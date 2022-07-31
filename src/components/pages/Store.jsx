import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Store.css";
import { BASE_URL } from "../../baseUrl";
import ProductCard from "../shop/ProductCard";

function Store(props) {
  const [products, setProducts] = useState([]);
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    fetchProducts().then();
  }, []);

  //products fetching from here

  const fetchProducts = async () => {
    await axios
      .get(`${BASE_URL}/api/v1/product/list/paginated`, {
        params: {
          access_token: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        let temp = [];
        if (response.data.data.content !== undefined) {
          response.data.data.content.forEach((item) => {
            temp.push(item);
          });
        }
        setProducts(temp);
      });
  };

  const handleSubBtn = (storeName) => {
    setStoreName(storeName);
  };
  const { state } = useLocation();
  const { sName } = state;
  const navigate = useNavigate();
  return (
    <div className="stores">
      <div className="container">
        <h2>{storeName}</h2>
        <div className="row ">
          {products
            .filter((each) => each.store?.name === sName)
            .map((product) => (
              <div className="col-sm mt-5">
                <ProductCard
                  id={product.id}
                  title={product.title}
                  regularPrice={product.regularPrice}
                  price={product.salePrice}
                  image={
                    product.images.length > 0
                      ? `${BASE_URL}${product.images[0].thumbUrl.replace(
                          "D:",
                          ""
                        )}`
                      : "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                  }
                  // btnFunction= {()=> send(product)}
                  // onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                  onClick={() =>
                    navigate("/products/productdetails", {
                      state: { product: product },
                    })
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
