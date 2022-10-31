import React from "react";

function Work() {
  return (
    <>
      <section className="work py-120 section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="section-heading__title text-white">
                  How To Work
                </h2>
                <p className="section-heading__subtitle text-white"></p>
              </div>
            </div>
          </div>
          <div className="work-shape d-flex justify-content-center">
            <ul className="work-shape__list">
              <li className="work-shape__item">
                <img src="assets/images/home-01/shape-circle.png" alt="" />
              </li>
              <li className="work-shape__item">
                <img src="assets/images/home-01/shape-square.png" alt="" />
              </li>
              <li className="work-shape__item">
                <img src="assets/images/home-01/shape-triangle.png" alt="" />
              </li>

              <li className="work-shape__item">
                <img src="assets/images/home-01/shape-circle.png" alt="" />
              </li>
              <li className="work-shape__item">
                <img src="assets/images/home-01/shape-square.png" alt="" />
              </li>
              <li className="work-shape__item">
                <img src="assets/images/home-01/shape-triangle.png" alt="" />
              </li>
            </ul>
          </div>
          <div className="row gy-5 work__inner">
            <div className="col-lg-3 col-sm-6">
              <div className="work-item text-center">
                <div className="work-item__arrow">
                  <img src="assets/images/home-01/work-arrow.png" alt="" />
                </div>
                <div className="work-item__icon">
                  <span className="icon-research"></span>
                </div>
                <h5 className="work-item__title text-white">
                  Register Yourself
                </h5>
                <p className="work-item__desc text--color-darken">
                  Firstly register yourself just using email or mobile number.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-item text-center">
                <div className="work-item__arrow">
                  <img src="assets/images/home-01/work-arrow.png" alt="" />
                </div>
                <div className="work-item__icon">
                  <span className="icon-submit"></span>
                </div>
                <h5 className="work-item__title text-white">
                  Choose mode of talking
                </h5>
                <p className="work-item__desc text--color-darken">
                  We provide two type of talking, Chat mode is Absulute free and
                  Calling mode is paid.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-item text-center">
                <div className="work-item__arrow">
                  <img src="assets/images/home-01/work-arrow.png" alt="" />
                </div>
                <div className="work-item__icon">
                  <span className="icon-positive-review"></span>
                </div>
                <h5 className="work-item__title text-white">Choose Person</h5>
                <p className="work-item__desc text--color-darken">
                  You have right to choose desirable person to talk in available
                  list.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-item text-center">
                <div className="work-item__icon">
                  <span className="icon-document"></span>
                </div>
                <h5 className="work-item__title text-white">
                  Submit Your Feedback
                </h5>
                <p className="work-item__desc text--color-darken">
                  Here you can submit your feedback which help to us in
                  improving our sevices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
