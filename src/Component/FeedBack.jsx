import React from "react";

function FeedBack() {
  return (
    <>
      <section
        className="feedback section-bg bg-img"
        style="background-image: url(assets/images/home-01/feedback-bg.png)"
      >
        <div className="feedback__inner py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2 className="section-heading__title text-white">
                    Our Foundars Story
                  </h2>
                  <div className="section-heading__subtitle text-white">
                    {" "}
                    We are here to give you moral suport. So your Experience
                    also important for us.
                  </div>
                </div>
              </div>
              <div className="row feedback-wrapper justify-content-center gy-5 gx-lg-5 gx-4">
                <div className="col-lg-4 col-md-6">
                  <div className="feedback-item text-center">
                    <div className="feedback-item__thumb">
                      <div className="feedback-item__thumb-inner">
                        <img
                          src="assets/images/home-01/client-img-01.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="feedback-item__name text-white">
                      Shubhra Priyadarshi
                    </h4>
                    <p className="feedback-item__designation text-white">
                      Co-Founder, Healers
                    </p>
                    <p className="feedback-item__desc text-white">
                      "My ex flat out told me he wasn't spending my birthday
                      with me because we had been fighting a lot lately. Later,
                      I found out that he hooked up with another chick that day
                      and he eventually left me for her."
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feedback-item text-center">
                    <div className="feedback-item__thumb">
                      <div className="feedback-item__thumb-inner">
                        <img
                          src="assets/images/home-01/client-img-02.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="feedback-item__name text-white">
                      Saif Khan
                    </h4>
                    <p className="feedback-item__designation text-white">
                      Co-Founder, Healers
                    </p>
                    <p className="feedback-item__desc text-white">
                      "When I was out with my friends, I would always complain
                      about her and how annoying she was. Then when my friends
                      took me places, I’d find myself looking at and flirting
                      with other girls. It took her finding out for me to
                      understand I’d fallen out of love."
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feedback-item text-center">
                    <div className="feedback-item__thumb">
                      <div className="feedback-item__thumb-inner">
                        <img
                          src="assets/images/home-01/client-img-01.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="feedback-item__name text-white">
                      Prachi Chaurasiya
                    </h4>
                    <p className="feedback-item__designation text-white">
                      Co-Founder, Healers
                    </p>
                    <p className="feedback-item__desc text-white">
                      "I'm falling out of love right now.I just can't stand my
                      boyfriend anymore. He's shallow, uncultured, and lazy,
                      meanwhile I love art, culture, knowledge, music, science,
                      etc. We're polar opposites. So I quit.."
                    </p>
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

export default FeedBack;
