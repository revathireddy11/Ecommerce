import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductList from './Product';
import CartList from './Cart';

function Home() {
    const navigate = useNavigate()
    const [product] = useState([
        {
          url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
          name: 'TRQ White Shoes',
          price: 1999
        },
        {
          url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
          name: 'LOREM Watch Black',
          price: 2599
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
          name: 'AMZ Laptop 8GB RAM',
          price: 50000
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
          name: 'Security Camera',
          price: 4000
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
          name: 'Watch Pink',
          price: 2000
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
          name: 'Cup red Color',
          price: 100
        },
      ])

        const [cart, setCart ] = useState([])
        const [showCart] = useState(false)
        
        const addToCart = (data) => {
          console.log(data)
          setCart([...cart, { ...data, quantity: 1 }])
        }

      {
        showCart ?
      <CartList cart={cart} ></CartList> :
      <ProductList product={product} addToCart={addToCart}></ProductList>
      }

        useEffect(() => {
            if(!localStorage.getItem('token')) {
                navigate('/login')
            }
        },[])

        return (
            <div>
                Home
                <button class="logout" onClick={() => {
                    localStorage.clear()
                    navigate('/login')
                }}>Logout</button>


                <h1>Product List</h1>
                <div style={{
                    display: 'flex'
                }}>
                </div>
            </div>
        )
}

export default Home;