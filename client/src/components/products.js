import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("https://localhost:3001/products").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>

      <p>All the products are listed below</p>
    </div>
  );
};

export default Home;
