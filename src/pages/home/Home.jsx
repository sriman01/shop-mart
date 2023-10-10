import React, {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


export default function Home() {
    const context = useContext(myContext);
    const {mode} = context;

    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart)

     console.log(cartItem)

    const addCart = () => {
      dispatch(addToCart("shirt"))
    }

    const deleteCart = () => {
      dispatch(deleteFromCart(''))
    }
  return (
    <section style = {{backgroundColor : mode === 'dark' ? '#5C8374' : ''}}>
        <Layout>
          {/* <div>
            <button onClick={() => addCart()}>add</button>
            <button onClick={() => deleteCart()}>delete</button>
          </div> */}
            <HeroSection />
            <Filter />
            <ProductCard />
            <Track />
            <Testimonial />
        </Layout>
    </section>
  )
}
