import React from "react";
import { NavLink } from "react-router-dom";
function Banner() {
  return (
    <>
      <section className="banner section-bg" id="Home">
        <div className="banner__vector-icon">
          <img src="assets/images/home-01/banner-vector.png" alt="" />
        </div>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="section-heading style-two">
                  <p className="section-heading__subtitle">
                    DONATE BLOOD SAVE LIFE
                  </p>
                  <h1 className="section-heading__title text-white">
                    YOUR DONATION CAN BRING SMILE AT OTHERS FACE
                  </h1>
                  <p className="section-heading__subtitle ">
                    You can give blood at any of our blood donation venues all
                    over the Uttar Pradesh. We have more than 2 donor centers
                    each district and visit thousands of other venues on various
                    occasions.
                  </p>
                </div>
                <div className="button-wrapper">
                  <NavLink to="/chat" className="btn--base bg-two">
                    JOIN US
                  </NavLink>
                  <div className="button-wrapper__arrow arrow-one">
                    <img
                      className=""
                      src="assets/images/home-01/arrow-base.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right mt-xl-0 mt-3">
                <div className="banner-right__thumb">
                  <img src="assets/images/home-01/logo.png" alt="" />

                  <img
                    className="banner-right__arrow"
                    src="assets/images/home-01/banner-arrow.png"
                    alt=""
                  />
                  <ul className="banner-right__images">
                    <li>
                      <img
                        src="assets/images/home-01/banner-message1.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/home-01/banner-message.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
