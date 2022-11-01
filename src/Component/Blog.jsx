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
                      <h2 className="section-heading__title">Donor Opinion</h2>
                      <p className="section-heading__subtitle">
                        {/* <!-- Donec interdum metus et hendrerit aliquet dolor diam satis
                      ligula eget egestas libero turpis velmi Nunc nulla. --> */}
                      </p>
                    </div>
                    <div className="button-wrapper">
                      <a className="btn--base bg-one" href="#">
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
                        <img src="assets/images/home-01/3.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="blog-item__content">
                      <ul className="blog-item__list">
                        <li className="blog-item__list-item">
                          VIRENDRA KUMAR SINGH
                        </li>
                        <li className="blog-item__list-item">|</li>
                        <li className="blog-item__list-item">
                          DONOR, GHAZIPUR
                        </li>
                      </ul>
                      <h4 className="blog-item__title">
                        <p>
                          I proudly donate blood on a regular basis because it
                          gives others something they desperately need to
                          survive. Just knowing I can make a difference in
                          someone else’s life makes me feel great!
                        </p>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-item">
                    <div className="blog-item__thumb">
                      <a href="blog-details.html">
                        <img src="assets/images/home-01/4.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="blog-item__content">
                      <ul className="blog-item__list">
                        <li className="blog-item__list-item">
                          ARUSH CHAUDHARY
                        </li>
                        <li className="blog-item__list-item">|</li>
                        <li className="blog-item__list-item">
                          FOUNDER, SANKALP FOUNDATION
                        </li>
                      </ul>
                      <h4 className="blog-item__title">
                        <p>
                          Our Mission 16000+ Unit Donation Every Year For
                          Thallesmia, Anemia, Blood Cancer Patient. Awareness
                          Program for Voluntary Blood Donation by Youth. Just
                          knowing I can make a difference in someone else’s life
                          makes me feel great!
                        </p>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-item">
                    <div className="blog-item__thumb">
                      <a href="blog-details.html">
                        <img src="assets/images/home-01/5.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="blog-item__content">
                      <ul className="blog-item__list">
                        <li className="blog-item__list-item">KAMIL AZAMI</li>
                        <li className="blog-item__list-item">|</li>
                        <li className="blog-item__list-item">
                          CEO, ROUNDPAY VOICE TECH
                        </li>
                      </ul>
                      <h4 className="blog-item__title">
                        <p>
                          Heroes don't always wear capes; they sometimes wear
                          jeans and shirts too! Do good for others by giving
                          from what you have. Surely, it will come back to you
                          with greater value - donate blood .
                        </p>
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
