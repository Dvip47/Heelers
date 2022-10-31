import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Banner";
import Footer from "../Footer";
import NavBar from "../NavBar";

function Chat() {
  return (
    <>
      <NavBar />
      <section className="banner style-two section-bg">
        <div className="work-shape d-flex justify-content-center">
          <ul className="work-shape__list">
            <li className="work-shape__item">
              <img src="assets/images/home-01/cross.png" alt="" />
            </li>
            <li className="work-shape__item">
              <img src="assets/images/home-01/shape-square.png" alt="" />
            </li>

            <li className="work-shape__item">
              <img src="assets/images/home-01/shape-square.png" alt="" />
            </li>
            <li className="work-shape__item">
              <img src="assets/images/home-01/shape-circle.png" alt="" />
            </li>
            <li className="work-shape__item">
              <img src="assets/images/home-01/cross-two.png" alt="" />
            </li>
          </ul>
          <ul className="cta-list">
            <li className="cta-list__item">
              <img
                src="assets/images/home-01/moon.png"
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
          </ul>
        </div>
        <div className="container">
          <div className="row gy-5 justify-content-center">
            <div className="col-lg-10">
              <div className="banner-content text-center">
                <h1 className="section-heading__title text-white">
                  Don't Worry <br />
                  We All Stranger Here To Understand <br /> Your Feelings
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h5 className="section-heading__top-title">
                  {" "}
                  Our Online Stranger{" "}
                </h5>
                {/* <ChatUser /> */}
                <h2 className="section-heading__title">Pick And Chat </h2>
                {/* <p className="section-heading__subtitle">
                  Donec interdum metus et hendrerit aliquet dolor diam satis
                  ligula eget egestas libero turpis velmi Nunc nulla.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-01.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Leslie Alexander</h4>
                  <span className="team-item__designation">CEO</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-02.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Esther Howard</h4>
                  <span className="team-item__designation">Chairman</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-03.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Jenny Wilson</h4>
                  <span className="team-item__designation">
                    Cilf Tecnology Officer
                  </span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-04.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Eleanor Pena</h4>
                  <span className="team-item__designation">Team Leader</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <a href="msg.html">
                    {" "}
                    <img
                      src="assets/images/home-02/team-img-01.png"
                      alt=""
                    />{" "}
                  </a>
                </div>

                <div className="team-item__content">
                  <h4 className="team-item__title">Leslie Alexander</h4>
                  <span className="team-item__designation">CEO</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-02.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Esther Howard</h4>
                  <span className="team-item__designation">Chairman</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-03.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Jenny Wilson</h4>
                  <span className="team-item__designation">
                    Cilf Tecnology Officer
                  </span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-04.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Eleanor Pena</h4>
                  <span className="team-item__designation">Team Leader</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-01.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Leslie Alexander</h4>
                  <span className="team-item__designation">CEO</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-02.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Esther Howard</h4>
                  <span className="team-item__designation">Chairman</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-03.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Jenny Wilson</h4>
                  <span className="team-item__designation">
                    Cilf Tecnology Officer
                  </span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-04.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Eleanor Pena</h4>
                  <span className="team-item__designation">Team Leader</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-01.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Leslie Alexander</h4>
                  <span className="team-item__designation">CEO</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-02.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Esther Howard</h4>
                  <span className="team-item__designation">Chairman</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-03.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Jenny Wilson</h4>
                  <span className="team-item__designation">
                    Cilf Tecnology Officer
                  </span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-04.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Eleanor Pena</h4>
                  <span className="team-item__designation">Team Leader</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-01.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Leslie Alexander</h4>
                  <span className="team-item__designation">CEO</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-02.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Esther Howard</h4>
                  <span className="team-item__designation">Chairman</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-03.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Jenny Wilson</h4>
                  <span className="team-item__designation">
                    Cilf Tecnology Officer
                  </span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-04.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Eleanor Pena</h4>
                  <span className="team-item__designation">Team Leader</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-01.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Leslie Alexander</h4>
                  <span className="team-item__designation">CEO</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-02.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Esther Howard</h4>
                  <span className="team-item__designation">Chairman</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-03.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Jenny Wilson</h4>
                  <span className="team-item__designation">
                    Cilf Tecnology Officer
                  </span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="team-item">
                <div className="team-item__thumb">
                  <img src="assets/images/home-02/team-img-04.png" alt="" />
                </div>
                <div className="team-item__content">
                  <h4 className="team-item__title">Eleanor Pena</h4>
                  <span className="team-item__designation">Team Leader</span>
                  <ul className="social-simple justify-content-center">
                    <li className="social-simple__item">
                      <a
                        href="www.facebook.html"
                        className="social-simple__link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.twitter.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.linkedin.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="social-simple__item">
                      <a
                        href="www.pinterest.html"
                        className="social-simple__link"
                      >
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Chat;
