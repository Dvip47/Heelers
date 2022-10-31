import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

function Registation() {
  return (
    <>
      <NavBar />
      <section class="breadcumb section-bg py-120">
        <div class="work-shape d-flex justify-content-center">
          <ul class="work-shape__list">
            <li class="work-shape__item">
              <img src="assets/images/home-01/shape-circle.png" alt="" />
            </li>
            <li class="work-shape__item">
              <img src="assets/images/home-01/shape-square.png" alt="" />
            </li>
            <li class="work-shape__item">
              <img src="assets/images/home-01/shape-triangle.png" alt="" />
            </li>

            <li class="work-shape__item">
              <img src="assets/images/home-01/shape-circle.png" alt="" />
            </li>
            <li class="work-shape__item">
              <img src="assets/images/home-01/shape-square.png" alt="" />
            </li>
            <li class="work-shape__item">
              <img src="assets/images/home-01/shape-triangle.png" alt="" />
            </li>
          </ul>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcumb__wrapper">
                <h3 class="breadcumb__title">Create New Account</h3>
                <ul class="breadcumb__list">
                  <li class="breadcumb__item">
                    <a href="index.html" class="breadcumb__link">
                      {" "}
                      <i class="las la-home"></i> Home
                    </a>{" "}
                  </li>
                  <li class="breadcumb__item"> //</li>
                  <li class="breadcumb__item">
                    {" "}
                    <span class="breadcumb__item-text">Sign Up</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="account py-120">
        <div class="container">
          <div class="account-inner">
            <div class="account-inner__circle">
              <img src="assets/images/home-02/testimonial-circle.png" alt="" />
            </div>
            <div class="row align-content-center gy-5 flex-wrap-reverse">
              <div class="col-lg-6 pe-lg-5">
                <div class="account-thumb">
                  <img src="assets/images/home-01/account-img.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="account-wrapper">
                  <form action="#" autocomplete="off">
                    <div class="account-content">
                      <div class="account-content__top">
                        <h4 class="account-content__title">
                          Wellcome to H
                          <span class="account-content__title-colored">
                            ealers
                          </span>{" "}
                        </h4>
                        <p class="account-content__desc">
                          Sign Up With Socail Media
                        </p>
                        <ul class="social-list mt-4 mb-3 justify-content-center">
                          <li class="social-list__item">
                            <a
                              href="www.facebook.html"
                              class="social-list__link"
                            >
                              <i class="fab fa-facebook-f"></i>
                            </a>{" "}
                          </li>
                          <li class="social-list__item">
                            <a
                              href="www.twitter.html"
                              class="social-list__link active"
                            >
                              {" "}
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li class="social-list__item">
                            <a
                              href="www.linkedin.html"
                              class="social-list__link"
                            >
                              {" "}
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li class="social-list__item">
                            <a
                              href="www.pinterest.html"
                              class="social-list__link"
                            >
                              {" "}
                              <i class="fab fa-pinterest"></i>
                            </a>
                          </li>
                        </ul>
                        <span class="account-content__or">Or</span>
                      </div>
                    </div>
                    <div class="row gy-4">
                      <div class="col-sm-12">
                        <label for="username" class="form--label">
                          Username or Email
                        </label>
                        <div class="input--group">
                          <input
                            type="text"
                            id="username"
                            class="form--control form-control style-two"
                            placeholder="Username or email"
                          />
                          {/* <span class="input--icon">
                            <i class="fas fa-user"></i>
                          </span> */}
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <label for="Password" class="form--label">
                          Password
                        </label>
                        <div class="input--group">
                          <input
                            type="password"
                            id="Password"
                            class="form--control form-control style-two"
                            value="password"
                          />
                          {/* <span class="input--icon">
                            <i class="fas fa-lock"></i>
                          </span> */}
                          <div
                            class="password-show-hide fas fa-eye toggle-password"
                            id="#Password"
                          ></div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <label for="RePassword" class="form--label">
                          Re - Password
                        </label>
                        <div class="input--group">
                          <input
                            type="password"
                            id="RePassword"
                            class="form--control form-control style-two"
                            value="repassword"
                          />
                          <span class="input--icon">
                            <i class="fas fa-lock"></i>
                          </span>
                          <div
                            class="password-show-hide fas fa-eye toggle-password"
                            id="#RePassword"
                          ></div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="custom--checkbox">
                          <input
                            type="checkbox"
                            id="rem-me"
                            class="custom--checkbox__check"
                          />
                          <label for="rem-me" class="custom--checkbox__text">
                            {" "}
                            I agree with Licences Info,{" "}
                            <a
                              href="services-details.html"
                              class="custom--checkbox__text-highlited"
                            >
                              Terms of Service
                            </a>{" "}
                            , Privacy Policy
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="button-wrapper w-100">
                          <button type="submit" class="btn--base w-100">
                            {" "}
                            Create Account
                          </button>
                        </div>
                      </div>
                      <div class="col-sm-12 mt-lg-5 mt-4">
                        <div class="another-account d-flex justify-content-center">
                          <p class="another-account__desc">
                            {" "}
                            Already have an account ?{" "}
                            <a href="login.html" class="another-account__link">
                              {" "}
                              Sign In
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Registation;
