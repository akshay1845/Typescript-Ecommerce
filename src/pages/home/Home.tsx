import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {

  const { loginWithRedirect, isAuthenticated, logout, user }: any = useAuth0();

  const login  = () : void =>{
    loginWithRedirect()
  }
  return (
    <div>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <div className="single-slide-item slide1">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-txt">
                        <h4>great design collection</h4>
                        <h2>cloth covered accent chair</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiuiana smod tempor ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="packages-price">
                          <p>
                            $ 399.00
                            <del>$ 499.00</del>
                          </p>
                        </div>
                        <button className="welcome-add-cart" onClick={()=>login()} >
                          <span className="lnr lnr-plus-circle" ></span>
                          add <span>to</span> cart
                        </button>
                        <button className="btn-cart welcome-add-cart welcome-more-info">
                          more info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-img">
                        <img
                          src="assets/images/slider1.png"
                          alt="slider image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="single-slide-item slide2">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-txt">
                        <h4>great design collection</h4>
                        <h2>mapple wood accent chair</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiuiana smod tempor ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="packages-price">
                          <p>
                            $ 199.00
                            <del>$ 299.00</del>
                          </p>
                        </div>
                        <button className="btn-cart welcome-add-cart">
                          <span className="lnr lnr-plus-circle"></span>
                          add <span>to</span> cart
                        </button>
                        <button className="btn-cart welcome-add-cart welcome-more-info">
                          more info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-img">
                        <img
                          src="assets/images/slider2.png"
                          alt="slider image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="single-slide-item slide3">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-txt">
                        <h4>great design collection</h4>
                        <h2>valvet accent arm chair</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiuiana smod tempor ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="packages-price">
                          <p>
                            $ 299.00
                            <del>$ 399.00</del>
                          </p>
                        </div>
                        <button className="btn-cart welcome-add-cart">
                          <span className="lnr lnr-plus-circle"></span>
                          add <span>to</span> cart
                        </button>
                        <button className="btn-cart welcome-add-cart welcome-more-info">
                          more info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-img">
                        <img
                          src="assets/images/slider3.png"
                          alt="slider image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="populer-products" className="populer-products">
        <div className="container">
          <div className="populer-products-content">
            <div className="row">
              <div className="col-md-3">
                <div className="single-populer-products">
                  <div className="single-populer-product-img mt40">
                    <img
                      src="assets/images/p1.png"
                      alt="populer-products images"
                    />
                  </div>
                  <h2>
                    <a href="#">arm chair</a>
                  </h2>
                  <div className="single-populer-products-para">
                    <p>
                      Nemo enim ipsam voluptatem quia volu ptas sit asperna aut
                      odit aut fugit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-populer-products">
                  <div className="single-inner-populer-products">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <div className="single-inner-populer-product-img">
                          <img
                            src="assets/images/p2.png"
                            alt="populer-products images"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="single-inner-populer-product-txt">
                          <h2>
                            <a href="#">
                              latest designed stool <span>and</span> chair
                            </a>
                          </h2>
                          <p>
                            Edi ut perspiciatis unde omnis iste natusina error
                            sit voluptatem accusantium doloret mque laudantium,
                            totam rem aperiam.
                          </p>
                          <div className="populer-products-price">
                            <h4>
                              Sales Start from <span>$99.00</span>
                            </h4>
                          </div>
                          <button className="btn-cart welcome-add-cart populer-products-btn">
                            discover more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-populer-products">
                  <div className="single-populer-products">
                    <div className="single-populer-product-img">
                      <img
                        src="assets/images/p3.png"
                        alt="populer-products images"
                      />
                    </div>
                    <h2>
                      <a href="#">hanging lamp</a>
                    </h2>
                    <div className="single-populer-products-para">
                      <p>
                        Nemo enim ipsam voluptatem quia volu ptas sit asperna
                        aut odit aut fugit.
                      </p>
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
};

export default Home;
