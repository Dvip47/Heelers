import React from "react";

function AboutCompany() {
  return (
    <>
      <section className="about-company pt-120 pb-60" id="about">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6 pe-lg-5">
              <div className="section-heading style-two">
                <h2 className="section-heading__title">About Healers</h2>
                <p className="section-heading__subtitle">
                  Healers is a plateform where two stranger meet and talk via
                  Chat and Voice Call.
                  <br />
                  In this modern world everyone busy in there life and no one
                  has time for for anyone else.But when anyone has any emotioan
                  problem then no one free for them.
                </p>
              </div>
              <div className="about-company__wrapper">
                <div className="company-item d-flex align-items-center flex-wrap">
                  <div className="company-item__icon">
                    <span className="icon-mission"></span>
                  </div>
                  <div className="company-item__content">
                    <h5 className="company-item__title">Our Mission</h5>
                    <p className="company-item__desc">
                      To provide a plateform where you can share your story and
                      emotion and no one judge you. We'll never share your
                      orginal identity with anyone.
                    </p>
                  </div>
                </div>
                <div className="company-item d-flex align-items-center flex-wrap">
                  <div className="company-item__icon">
                    <span className="icon-mission-1"></span>
                  </div>
                  <div className="company-item__content">
                    <h5 className="company-item__title">Our Vission</h5>
                    <p className="company-item__desc">
                      Our vission is return smile to our young generation. No
                      one will feel alone just becouse of he/she does't have any
                      true friend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-company__thumb">
                <img
                  className="w-100"
                  src="assets/images/home-01/about-company-right-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCompany;
