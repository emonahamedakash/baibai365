import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { BASE_URL } from "../../baseUrl";

export default function Slider() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanners().then();
  }, []);

  const fetchBanners = async () => {
    await axios
      .get(`${BASE_URL}/api/v1/banner/list/all`, {
        params: {
          access_token: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log(response);
        let temp = [];
        if (response.data.data !== undefined) {
          response.data.data.forEach((item) => {
            temp.push(item);
          });
          setBanners(temp);
        }
      });
  };
  return (
    <div className="slider">
      <Carousel>
        {banners.map((banner) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${BASE_URL}${banner.imageUrl}`}
                alt="banner image"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
