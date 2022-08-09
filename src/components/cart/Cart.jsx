import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../baseUrl";
import "./Cart.css";
import { DLT, CLR } from "../../redux/actions/cartAction";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Cart = () => {
  const [price, setPrice] = useState();

  const getData = useSelector((state) => state.cartReducer.carts);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(DLT(id));
  };

  const handleSubmit = () => {
    let data = {
      createdBy: currentUser.username,
      products: getData,
      status: "UNPAID",
      totalCost: price,
      paidAmount: price,
      contactNo: "0171324621",
      address: "Dhaka",
      paymentHistory: {
        total: price,
        paymentMethod: {
          amount: price,
          type: "CASH",
          issuer: "CUSTOMER",
        },
      },
    };
    console.log(data);
    axios
      .post(`${BASE_URL}/api/v1/order-history/create`, data, {
        params: { access_token: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        console.log(response);
        getData.map((item) => {
          delet(item.id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const total = () => {
    let price = 0;
    getData.map((ele) => {
      price = parseFloat(ele.salePrice) + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
    console.log(getData);
  }, [total]);

  return (
    <div className="container-fluid">
      <div className="row cartContainer">
        <h2 style={{ textAlign: "center" }}>Cart</h2>
        <div className="col-md-8">
          {getData.map((e) => {
            return (
              <>
                <div className="cartItemList row">
                  <div className="col-md">
                    <img
                      className="mx-auto cartImg"
                      src={
                        e.images.length > 0
                          ? `${BASE_URL}${e.images[0].thumbUrl.replace(
                              "D:",
                              ""
                            )}`
                          : "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                      }
                      alt={e.title}
                    />
                  </div>
                  <div className="productSummery col-md">
                    <h5 className="title">{e.title}</h5>
                    <p className="color">White</p>
                    <p className="size">Small</p>
                  </div>
                  <div className="quantity col-md">
                    <input type="number" className="w-50 p-3" placeholder="1" />
                  </div>
                  <div className="price col-md">
                    <h3>¥{e.salePrice}</h3>
                    <button
                      onClick={() => delet(e.id)}
                      className="btn btn-warning"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="col-md-4">
          <div className="total">
            <div className="checkoutTotal">
              <div className="row">
                <div className="col-md-9">
                  <p>Total Cost</p>
                </div>
                <div className="col-md-2">¥{price}</div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-100 mt-5 mb-2"
            >
              PROCEED TO CHECKOUT
            </button>
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline-success w-100"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
