import React from "react";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="hero">
      
     
      <div className="card bg-dark text-white border-0">
        <img
          src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="card-img"
          alt="Background"
          height="1000px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-right">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-black">
             BE SURE TO BE REINVENTED
            </h5>
            <p className="card-text lead fs-2 text-black">
              "Every exit you take is just an entrance to a different location...."
            </p>
            <p className="float-center author text-black">~Ashley Oketo~</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;