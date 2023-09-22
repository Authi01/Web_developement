import React from "react";
import "./Home.css";
import ProductGrid from "../components/Productgrid";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-row">
          <div className="text">Easy way to make an order</div>
          <div
            className="text"
            style={{ color: "#dd2127", marginTop: "10px", fontSize: "50px" }}
          >
            Hungry?
          </div>
          <div
            className="text"
            style={{ color: "#24262b", marginTop: "10px", fontSize: "50px" }}
          >
            just wait for food at
          </div>{" "}
          <div
            className="text"
            style={{ color: "#dd2127", marginTop: "10px", fontSize: "50px" }}
          >
            your Door
          </div>
          <button className="button1" style={{ marginLeft: "100px" }}>
            Order Now
          </button>
          <button className="button2" style={{ marginLeft: "100px" }}>
            See All Foods
          </button>
        </div>
        <div className="home-row">
          <img src="hero.png" alt="icon" className="hero-image" />
        </div>
      </div>
      <div className="home-column">
        <ProductGrid />
      </div>
    </div>
  );
}

export default Home;
