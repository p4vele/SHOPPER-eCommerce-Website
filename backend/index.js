require('dotenv').config();
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

app.use(express.json());
app.use(cors());

// Ensure upload directory exists
const dir = './upload/images';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

//Database connection with MongoDB

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});

//API creation

app.get("/",(req,res) => {
    res.send("Express app is running");
});

app.listen(port,(error) => {
    if (!error){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console.log("Error starting the server", error);
    }
});


//Image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image:  req.body.image,
        category:  req.body.category,
        new_price:  req.body.new_price,
        old_price:  req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    });
})

//creating API for deleting product
app.post('/removeproduct',async (req,res)=>{
    const product = await Product.findOneAndDelete({id:req.body.id});
    if(product){
        res.json({
            success:true,
            id:req.body.id,
        });
    }
    else{
        res.json({
            success:false,
            message:"Product not found",
        });
    }
})

//creating API for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})

//Schema creating for User modal

const Users = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

//creating Endpoint for register the user
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Email already exists"});
    }
    let cart ={}
    for (let i=0; i<300 ;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData: cart,
    })

    await user.save();

    const data= {
        user:{
            id:user.id,
        }
    }

    const token = jwt.sign(data,'secret_ecom');

    res.json({success:true,token:token});
})

//creating endpoint for login the user
app.post('/login',async(req, res)=>{
    const user = await Users.findOne({email:req.body.email});
    if(!user){
        return res.status(400).json({success:false, message:"User not found"});
    }
    else{
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data= {
                user:{
                    id:user.id,
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token:token});
        }
        else{
            return res.json({success:false, message:"Incorrect password"});
        }
    }
})