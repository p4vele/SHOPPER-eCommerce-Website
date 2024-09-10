import React, { useContext, useState } from 'react'
import './CSS/ShopCaregory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

  const {all_product}=useContext(ShopContext);

  const [sortBy, setSortBy] = useState('default'); 

  const sortProducts = (products) => {
    if (sortBy === 'price-asc') {
      return [...products].sort((a, b) => a.new_price - b.new_price);
    } else if (sortBy === 'price-desc') {
      return [...products].sort((a, b) => b.new_price - a.new_price);
    }
    return products;
  };

  const filteredProducts = all_product.filter((item) => item.category === props.category);
  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of {filteredProducts.length} products
          </p>
          <div className="shopcategory-sort">
            Sort by
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-dropdown"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="shopcategory-products">
          {sortedProducts.slice(0, 12).map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
        <div className="shopcategory-loadmore" onClick={()=>{window.scrollTo(0, 0);}}>
          Explore More
        </div>
    </div>
  )
}
export default ShopCategory