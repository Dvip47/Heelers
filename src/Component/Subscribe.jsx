import React from "react";

function Subscribe() {
  return (
    <div>
      <section className="cta py-120 section-bg" id="Contact">
        <ul className="cta-list">
          <li className="cta-list__item">
            <img
              src="assets/images/home-01/cta-round.png"
              alt=""
              className="cta-shape cta-shape-1"
            />
          </li>
          <li className="cta-list__item">
            <img
              src="assets/images/home-01/cta-dots.png"
              alt=""
              className="cta-shape cta-shape-2"
            />
          </li>
          <li className="cta-list__item">
            <img
              src="assets/images/home-01/cta-play.png"
              alt=""
              className="cta-shape cta-shape-3"
            />
          </li>
          <li className="cta-list__item">
            <img
              src="assets/images/home-01/cta-stair.png"
              alt=""
              className="cta-shape cta-shape-4"
            />
          </li>
        </ul>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content text-center">
                <h2 className="cta-content__title text-white">
                  Getting Connected With Us & For The Update.
                </h2>
                <div className="cta-form">
                  <form action="#" autocomplete="off">
                    <div className="input--group">
                      <input
                        type="email"
                        className="form-control form--control style-three"
                        placeholder="Enter Email Address"
                        required
                      />
                      <button
                        type="submit"
                        className="submit-button btn--base style-three"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
