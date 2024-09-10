import React,{useRef} from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
const Shop = () => {

  const newCollectionsRef = useRef(null);

  const scrollToNewCollections = () => {
    if (newCollectionsRef.current) {
      newCollectionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <Hero scrollToNewCollections={scrollToNewCollections}/>
        <Popular />
        <Offers />
        <div ref={newCollectionsRef}>
          <NewCollections />
        </div>
        <NewsLetter />
    </div>
  )
}
export default Shop 