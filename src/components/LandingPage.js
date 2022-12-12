import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div
      className="landingPage"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.61), #111 ), url("https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="landingPage_nav">
        <Link to="/">
          <img
            className="landingPage_navlogo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="netflix_logo"
          />
        </Link>
        <Link to="/" className="landingPage_signinButton">
          SignIn
        </Link>
      </div>
      <div className="landingPage_content">
        <h1>Unlimited movies, TV shows and many more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h3>Ready to watch? Click on below button to create your membership</h3>
        <Link to="/" className="landingPage_startButton">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
