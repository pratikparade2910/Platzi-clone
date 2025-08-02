import React, { useState } from 'react';

const Cart = ({ cart, setcart }) => {   // access props in cart
  const [ordered, setOrdered] = useState(false);


  const handleOrder = () => {
    setOrdered(true);
    setcart([]); // Clear the cart after ordering 
  };

  return (
    <>
      <div className="container-fluid w-75 my-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-4"> Cart Items</h1>

            {ordered && (
              <div className="alert alert-success w-50 mx-auto" role="alert">
                Order placed successfully!
              </div>
            )}

            {cart.length === 0 && !ordered ? (
              <p>No items in cart</p>


            ) : (
              <>
                <div className="card shadow p-4">
                  {cart.map((val, index) => (
                    <div key={index} className="d-flex align-items-center mb-3 border-bottom pb-3">
                      <img
                        src={val.images[0]}
                        alt={val.title}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }}
                      />
                      <div className="text-start">

                        <h5>{val.title}</h5>
                        <p className="text-success fw-bold">Price: ${val.price}</p>
                      </div>
                    </div>
                  ))}

                  <button
                    className="btn btn-primary w-50 mx-auto mt-4"
                    onClick={handleOrder}
                  >
                    Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
