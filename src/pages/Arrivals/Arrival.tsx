import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { callApi } from "../../redux/actions/action";
import { addToCart } from "../../redux/actions/action";
import { NavLink, useNavigate } from "react-router-dom";
import {Countcontext} from '../../context/Context'

import { useDispatch, useSelector } from "react-redux";

const Arrival = () => {
  const { user, isAuthenticated }: any = useAuth0();

  const {count, setCount} = useContext(Countcontext)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Apidata = useSelector((state: any): any => state.API_Data.Apidata);

  useEffect(() => {
    dispatch(callApi);
  }, []);
  
  const add = (id: number): any => {
    dispatch(addToCart(id));
    setCount(count + 1)
  };

  return (
    <>
      {user && (
        <div>
          <section id="new-arrivals" className="new-arrivals">
            <div className="container">
              <div className="section-header">
                <h2>new arrivals</h2>
              </div>
              <div className="new-arrivals-content">
                <div className="row">
                  {Apidata.map((e: any, key: any) => {
                    return (
                      <React.Fragment key={key}>
                        <div className="col-md-3 col-sm-4">
                          <div className="single-new-arrival">
                            <div className="single-new-arrival-bg">
                              <img src={e.img} alt="new-arrivals images" />
                              <div className="single-new-arrival-bg-overlay"></div>
                              <div className="sale bg-1" >
                                <p >Cart-{e.qty}</p>
                              </div>
                              <div className="new-arrival-cart">
                                <p>
                                  <span className="lnr lnr-cart"></span>
                                  <a onClick={() => add(e.id)}>
                                    add <span>to </span> cart
                                  </a>
                                </p>
                                <p className="arrival-review pull-right">
                                  <span className="lnr lnr-heart"></span>
                                  <span
                                    className="lnr lnr-frame-expand"
                                    onClick={() => {
                                      navigate(`view/${e.id}`);
                                    }}
                                  >
                                    {" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <h4>
                              <a href="#">{e.name}</a>
                            </h4>
                            <p className="arrival-product-price">${e.price}</p>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section id="sofa-collection">
            <div className="owl-carousel owl-theme" id="collection-carousel">
              <div className="sofa-collection collectionbg1">
                <div className="container">
                  <div className="sofa-collection-txt">
                    <h2>unlimited sofa collection</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="sofa-collection-price">
                      <h4>
                        strting from <span>$ 199</span>
                      </h4>
                    </div>
                    <button className="btn-cart welcome-add-cart sofa-collection-btn">
                      view more
                    </button>
                  </div>
                </div>
              </div>
              <div className="sofa-collection collectionbg2">
                <div className="container">
                  <div className="sofa-collection-txt">
                    <h2>unlimited dainning table collection</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="sofa-collection-price">
                      <h4>
                        strting from <span>$ 299</span>
                      </h4>
                    </div>
                    <button className="btn-cart welcome-add-cart sofa-collection-btn">
                      view more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Arrival;
