import React from "react";

function AboutCompany() {
  return (
    <>
      <section className="about-company pt-120 pb-60" id="about">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6 pe-lg-5">
              <div className="section-heading style-two">
                <h2 className="section-heading__title">
                  About Sankalp Faundation
                </h2>
                <p className="section-heading__subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto illum fuga eligendi accusamus non, laboriosam hic nemo
                  reiciendis rerum delectus tempora tempore veritatis in?
                  Impedit beatae facere blanditiis quas dolores, labore
                  perferendis fuga harum ullam dolor earum repellat consectetur
                  eos?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Hic exercitationem eos suscipit?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Hic exercitationem eos suscipit?
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
