import React from "react";

function Blog() {
  return (
    <div>
      <section className="blog py-120">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-blog d-flex justify-content-between flex-wrap align-items-center">
                    <div className="section-heading style-two mb-4">
                      <h2 className="section-heading__title">Our Celebraty</h2>
                      <p className="section-heading__subtitle">
                        {/* <!-- Donec interdum metus et hendrerit aliquet dolor diam satis
                      ligula eget egestas libero turpis velmi Nunc nulla. --> */}
                      </p>
                    </div>
                    <div className="button-wrapper">
                      <a className="btn--base bg-one" href="registration.html">
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row blog-wrapper gy-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="blog-item">
                    <div className="blog-item__thumb">
                      <a href="blog-details.html">
                        <img src="assets/images/download.jfif" alt="" />
                      </a>
                      <div className="blog-item__date">
                        <h4 className="blog-item__date-time">27</h4>
                        <span className="blog-item__date-month"> Aug </span>
                      </div>
                    </div>
                    <div className="blog-item__content">
                      <ul className="blog-item__list">
                        <li className="blog-item__list-item">
                          Post by : sandeep maheshwari
                        </li>
                        <li className="blog-item__list-item">|</li>
                        <li className="blog-item__list-item">Tag : Breakup</li>
                      </ul>
                      <h4 className="blog-item__title">
                        <a href="blog-details.html">
                          How to get over to breakup.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-item">
                    <div className="blog-item__thumb">
                      <a href="blog-details.html">
                        <img src="assets/images/yes.jpg" alt="" />
                      </a>
                      <div className="blog-item__date">
                        <h4 className="blog-item__date-time">15</h4>
                        <span className="blog-item__date-month"> Aug</span>
                      </div>
                    </div>
                    <div className="blog-item__content">
                      <ul className="blog-item__list">
                        <li className="blog-item__list-item">
                          Post by : Robart turs
                        </li>
                        <li className="blog-item__list-item">|</li>
                        <li className="blog-item__list-item">Tag : Breakup</li>
                      </ul>
                      <h4 className="blog-item__title">
                        <a href="blog-details.html">
                          Manage Yourself after breakup
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-item">
                    <div className="blog-item__thumb">
                      <a href="blog-details.html">
                        <img src="assets/images/s.webp" alt="" />
                      </a>
                      <div className="blog-item__date">
                        <h4 className="blog-item__date-time">10</h4>
                        <span className="blog-item__date-month"> Aug</span>
                      </div>
                    </div>
                    <div className="blog-item__content">
                      <ul className="blog-item__list">
                        <li className="blog-item__list-item">
                          Post by : Haswardhan{" "}
                        </li>
                        <li className="blog-item__list-item">|</li>
                        <li className="blog-item__list-item">Tag : Breakup</li>
                      </ul>
                      <h4 className="blog-item__title">
                        <a href="blog-details.html">
                          Achive Goal after breakup.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
