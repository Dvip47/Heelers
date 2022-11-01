import React from "react";

function Counterup() {
  return (
    <>
      <section className="counterup">
        <div className="container counterup__border py-60">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="7000">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">SUCCESS SMILE</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="1700">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">HAPPY DONORS</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="13">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">SUCCESS CAMP</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="10">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">TOTAL AWARDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counterup;
