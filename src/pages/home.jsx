import React, { useState, useEffect } from 'react'
import '../style/home.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = ({ cart, setcart }) => {
  // ********** hooks***************************************
  const [products, setproducts] = useState([])
  const [search, setSearch] = useState('')
  const [highlighted, setHighlighted] = useState(null)
  // const [cart,setcart]=useState([])
  const nav = useNavigate()









  // ********************  fetching and other ***********************************

  const fetchproducts = async () => {
    try {
      const pdata = await axios.get('https://api.escuelajs.co/api/v1/products')
      console.log(pdata)
      setproducts(pdata.data)
    } catch (err) {
      console.log(err)
      console.log("cannot fetch products, try again later")
    }
  }

  useEffect(() => {
    fetchproducts()
  }, [])










  // **************** SEARCH PRODUCTS **********************************
  useEffect(() => {
    if (search.trim() === '') {
      setHighlighted(null)
      // alert("no matches found ")
    } else {
      const found = products.find((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
      setHighlighted(found)
    }
  }, [search, products])












  // *************** ADD TO CART**********************************
  const addtocart = (products) => {
    setcart([...cart, products])
    alert("added to cart")

  }


  return (
    <>
      <div className="container-fluid main-box">
        <div className="row">
          <div className="col-md-12 text-center  ">
            <h1 className="text-dark mt-5 p-3">
              <i className='fa-solid fa-home'></i> Home


              <button className='btn btn-sm ' title='see cart' onClick={() => nav('/cart')}>  <span className='ms-5 ' ><i className='fa-solid fa-shopping-cart'></i> {cart.length} see cart</span></button>

            </h1>

            <form>
              <input
                type="text"
                placeholder="Search a product"
                className="form-control mb-3 w-25 mx-auto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>

        {/*  Highlighted Product if Found */}
        {highlighted && (
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card shadow border border-success" >
                <img
                  src={highlighted.images[0]}
                  alt={highlighted.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-success">{highlighted.title}</h5>
                  <p className="card-text">${highlighted.price}</p>
                </div>
                <div className="card-footer">{highlighted.category.name}</div>
              </div>
            </div>
          </div>
        )}

        {/* Cart Section  */}


        {/*  All Products Grid */}
        <div className="row my-3">
          {products.map((val) => (
            <div className="col-md-3 mb-4" key={val.id}>
              <div className="card product-card h-100 position-relative" onDoubleClick={() => nav(`/details/${val.id}`)} title='Double click to see details'>
                <img
                  src={val.images[0]}
                  alt={val.title}
                  className="card-img-top product-img"
                />
                <button className='btn btn-sm ' onClick={() => addtocart(val)} style={{ cursor: "pointer" }}> <span className="position-absolute top-0 end-0 m-2 bg-white p-3 rounded-circle fw-bold">
                  <i className='fa-solid fa-plus'></i>
                </span></button>
                <span className='position-absolute bottom-0 end-0 p-3 text-dark fw-bold '>
                  {val.category.name}
                </span>
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text fw-bold text-success">${val.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
