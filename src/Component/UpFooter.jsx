import React from "react";

function UpFooter() {
  return (
    <>
      <footer className="footer-area section-bg-two">
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
        </ul>
        <div className="container footer-top py-120">
          <div className="row justify-content-center gy-5">
            <div className="col-xl-3 col-sm-6">
              <div className="footer-item">
                <div className="footer-item__logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo-footer.png" alt="" />
                  </a>
                </div>
                <p className="footer-item__desc">
                  To provide a plateform where you can share your story and
                  emotion and no one judge you. We'll never share your orginal
                  identity with anyone.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="footer-item">
                <h5
                  className="footer-item__title bg-img bg-img__contain"
                  style="
                  background-image: url(assets/images/home-01/footer-title-bg.png);
                "
                >
                  Useful Link
                </h5>
                <ul className="footer-menu">
                  <li className="footer-menu__item">
                    <a href="index-two.html" className="footer-menu__link">
                      Home Two
                    </a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="about.html" className="footer-menu__link">
                      About Us
                    </a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="services.html" className="footer-menu__link">
                      Service
                    </a>
                  </li>
                  <li className="footer-menu__item">
                    <a
                      href="services-details.html"
                      className="footer-menu__link"
                    >
                      Service Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="footer-item">
                <h5
                  className="footer-item__title bg-img bg-img__contain"
                  style="
                  background-image: url(assets/images/home-01/footer-title-bg.png);
                "
                >
                  Contact Us
                </h5>
                <p className="footer-item__desc">
                  553 Vivek Kahd 3 Railway Station Road, Patrakarpuram Crossing
                  Rd, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                </p>
                <ul className="social-list">
                  <li className="social-list__item">
                    <a href="www.facebook.html" className="social-list__link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      href="www.twitter.html"
                      className="social-list__link active"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="www.linkedin.html" className="social-list__link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="www.pinterest.html" className="social-list__link">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default UpFooter;
