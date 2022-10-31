import React from "react";

function Price() {
  return (
    <>
      <section className="pricing pt-120 pb-60">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="pricing-wrapper">
                <div className="pricing-item">
                  <div className="pricing-item__content">
                    <h1 className="pricing-item__price">We need support</h1>
                    <h3 className="pricing-item__name">Show your love</h3>
                    <ul className="pricing-item__list">
                      <img
                        src="assets/images/qr.png"
                        alt=""
                        height={"150px"}
                        width={"150px"}
                      />
                    </ul>
                  </div>
                  <div className="pricing-item__details">
                    <a href="#" className="pricing-item__details-btn">
                      Scan and Donate
                    </a>
                    <a href="#" className="pricing-item__details-icon">
                      <span className="bi bi-credit-card"></span>
                      <i class="bi bi-credit-card"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-wrapper">
                <div className="pricing-item">
                  <div className="pricing-item__content">
                    <h1 className="pricing-item__price">Join Our Team</h1>
                    <h3 className="pricing-item__name">
                      Without paying anything <br />
                      Upload your work
                    </h3>

                    <ul className="pricing-item__list">
                      <div
                        style={{
                          backgroundColor: "",
                          height: "120px",
                        }}
                      >
                        <input
                          type="file"
                          name=""
                          id=""
                          style={{ marginTop: "35px" }}
                        />
                      </div>
                    </ul>
                  </div>
                  <div className="pricing-item__details">
                    <a href="#" className="pricing-item__details-btn">
                      Submit
                    </a>
                    <a href="#" className="pricing-item__details-icon">
                      <span className="bi bi-credit-card"></span>
                      <i class="bi bi-credit-card"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
