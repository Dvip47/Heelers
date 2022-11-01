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
                  DONATION PROCESS
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
                <h5 className="work-item__title text-white">REGISTRATION</h5>
                <p className="work-item__desc text--color-darken">
                  You need to complete a very simple registration form. Which
                  contains all required contact information to enter in the
                  donation process.
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
                <h5 className="work-item__title text-white">SCREENING</h5>
                <p className="work-item__desc text--color-darken">
                  A drop of blood from your finger will take for simple test to
                  ensure that your blood iron levels are proper enough for
                  donation process.
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
                <h5 className="work-item__title text-white">DONATION</h5>
                <p className="work-item__desc text--color-darken">
                  After ensuring and passed screening test successfully you will
                  be directed to a donor bed for donation. It will take only
                  6-10 minutes.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-item text-center">
                <div className="work-item__icon">
                  <span className="icon-check"></span>
                </div>
                <h5 className="work-item__title text-white">REFRESHMENT</h5>
                <p className="work-item__desc text--color-darken">
                  You can also stay in sitting room until you feel strong enough
                  to leave our center. You will receive awesome drink from us in
                  donation zone.
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
