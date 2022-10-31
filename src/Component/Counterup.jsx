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
                    <span className="odometer" data-odometer-final="50">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">Happly Client</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="28">
                      0
                    </span>
                  </h1>
                </div>
                <p className="para">Total Available</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="100">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">Total Register</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counterup-item text-center">
                <div className="counterup-item__number">
                  <h1 className="counterup-item__title">
                    <span className="odometer" data-odometer-final="600">
                      0
                    </span>
                    +
                  </h1>
                </div>
                <p className="para">Total Chat/Call Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counterup;
