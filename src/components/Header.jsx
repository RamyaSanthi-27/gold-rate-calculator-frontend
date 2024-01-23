import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Breadcrumb from "./Breadcrumb";

const Header = () => {
  const [nyTime, setNyTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const newYorkTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
      });
      const date = new Date();
      const month = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = `${date.toLocaleDateString(
        "en-US",
        month
      )} , ${date.toLocaleTimeString()}`;

      setNyTime(newYorkTime);
      setCurrentDate(formattedDate);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="shadow-sm bg-dark">
        <div className="container d-flex flex-warp justify-content-center pt-2 mb-2">
          <Link
            to="/today"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-white"
            title="Gold price today"
          >
            <img
              src="https://pricegold.net/images/logo.svg"
              height="70"
              alt="Gold price today"
              className="mx-1"
            />
            <span className="fs-4">Gold price</span>
            <span className="fs-7 ms-1 border-bottom">Today</span>
          </Link>

          <div
            className="col-12 col-lg-8 mb-3 pt-2 mb-lg-0 text-lg-end text-center"
            style={{ color: "white" }}
          >
            <div className="currTime" data-o="3">
              <span className="ms-1 fs-5 fw-bold" id="siteTime">
                {nyTime}
              </span>
              NY Time
              <br />
              <span className="fs-7">{currentDate}</span>
            </div>
          </div>
        </div>

        <div
          className="nav-scroller py-1 border-bottom border-5 fs-5"
          style={{
            borderColor: "#b3871b",
            backgroundColor: "#252e36",
          }}
        >
          <nav className="nav d-flex justify-content-between container">
            <Link
              className="nav-link p-2 text-white rounded"
              to="/today"
              title="Gold price today"
            >
              Today
            </Link>
            <Link
              className="nav-link p-2 text-white rounded"
              to="/performance"
              title="Gold price performance"
            >
              Performance
            </Link>
            <Link
              className="nav-link p-2 text-white rounded"
              to="/goldcalculator"
              title="Gold Calculator"
            >
              Gold Calculator
            </Link>
          </nav>
        </div>
      </header>
      {/* <div className="container d-flex flex-warp justify-content-center pt-2 mb-2">
      <img src="../public/image/Goldback.webp"  alt="Gold"/>
      </div> */}
    </>
  );
};

export default Header;
