import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <section className="pt-60 pb-120">
        <div className="container">
          <div className="row align-items-center gy-5 flex-wrap-reverse">
            <div className="col-lg-6">
              <div className="about-left pe-lg-3">
                <div className="about-left__thumb">
                  <img
                    className="w-100"
                    src="assets/images/home-01/about-img.png"
                    alt=""
                  />
                  {/* <video width="1000" height="600" autoplay>
                    <source src="assets/a.mp4" />
                  </video> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right ps-lg-3">
                <div className="section-heading style-two">
                  <h2 className="section-heading__title">
                    We care your feelings
                  </h2>
                  <p className="section-heading__subtitle">
                    There is a tough time where we can't see and think actual
                    things. We will help you to understand actual things.
                  </p>
                  <p className="section-heading__desc">
                    <li>
                      If someone ended the relationship with you it doesn’t mean
                      that there’s anything wrong with you. Try not to take it
                      personally because relationship break-ups happen all the
                      time.
                    </li>
                  </p>
                </div>
                <div className="button-wrapper">
                  <NavLink to="/call" className="btn--base bg-one">
                    Call Us
                  </NavLink>
                  <div className="button-wrapper__arrow arrow-two">
                    <img
                      className=""
                      src="assets/images/home-01/arrow-base-two.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
