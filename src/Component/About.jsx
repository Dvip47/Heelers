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
                    src="assets/images/home-01/dontate_invite.png"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    ipsa ducimus amet! Eos?
                  </p>
                  <p className="section-heading__desc">
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ducimus odit laborum adipisci delectus voluptatibus velit
                      libero possimus commodi quas omnis non veniam
                      exercitationem accusamus repellendus nisi aspernatur, quia
                      hic! Beatae sunt laboriosam obcaecati quaerat. libero{" "}
                      <br />
                      possimus commodi quas omnis non veniam exercitationem
                      accusamus repellendus nisi aspernatur, quia hic! Beatae
                      sunt laboriosam obcaecati quaerat.
                    </li>
                  </p>
                </div>
                <div className="button-wrapper">
                  <NavLink to="/call" className="btn--base bg-one">
                    Get Appointment
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
