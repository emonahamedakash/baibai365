import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Category.css";
import { BASE_URL } from "../../baseUrl";
import ProductCard from "../shop/ProductCard";

function Category(props) {
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [subName, setSubName] = useState("");

  useEffect(() => {
    fetchSubCategories().then();
    fetchProducts().then();
  }, []);

  const fetchSubCategories = async () => {
    await axios
      .get(`${BASE_URL}/api/v1/sub-category/list/${categoryId}`, {
        params: {
          access_token: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        let temp = [];
        response.data.data.forEach((item) => {
          temp.push(item);
          console.log(item);
        });
        if (temp.length > 0) {
          setSubName(temp[0].name);
        }
        setSubCategories(temp);
      });
  };

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

  const handleSubBtn = (subName) => {
    console.log(subName);
    setSubName(subName);
  };
  const { state } = useLocation();
  const { categoryId } = state;
  useEffect(() => {
    console.log(categoryId);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="categories">
      <div className="row" style={{ padding: "15px" }}>
        <div className="col-md-2">
          {subCategories.map((subCategory) => (
            <div>
              <div className="SubcategoryList">
                <ul>
                  <li className="list">
                    <button
                      onClick={() => handleSubBtn(subCategory.name)}
                      className="btn btn-primary w-100 subcategoryList"
                    >
                      {subCategory.name}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-10 row">
          {products
            .filter((each) => each.subCategory?.name === subName)
            .map((product) => (
              <ProductCard
                className="col-sm-"
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
            ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
