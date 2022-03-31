import { useEffect, useState, useContext } from "react";
import  {useNavigate} from 'react-router-dom'
import { LoginOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { Auth0ContextInterface,  useAuth0 } from "@auth0/auth0-react";
import { Dropdown, Menu, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {removeToCart} from'../../redux/actions/action'
import {Countcontext} from '../../context/Context'

import "./header.scss";

const { Item } = Menu;


const Header = () => {
  interface Context{
    count: number;
    setCount: Function
  }

  const { loginWithRedirect, isAuthenticated, logout, user}:Auth0ContextInterface = useAuth0();
  const [data, setData] = useState<object[]>([]);
  let [total, setTotal] = useState<number>(0);
  const {count, setCount} = useContext<Context>(Countcontext)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const addItem = () => {
    setData(UpdateData());
    // data.map((e:)=> localStorage.setItem(e.id,JSON.stringify(e)))
    totalPrice()
  };
  const Apidata = useSelector((state:any ) => state.API_Data.Apidata);

  const UpdateData = (): any => {
    const data = Apidata.filter((e: any) => e.qty > 0);
    
    return data;
  };

  let sum1 = 0;
  const totalPrice = () => {
    data
      .map((e: any) => e.qty * e.price)
      .map((e: number) => {
        sum1 += e;
        setTotal(sum1);
      });
  }; 

  const removeItem = (id: number) =>{
    console.log("tatatatatat",id)
    dispatch(removeToCart(id))
    setCount(count+1)
  }

  const handleClick = (e:any) => {
    console.log("e" + e);
    if (e.key === "logout") {
      logout();
    }
  };

  const dropdown_menu = (
    <Menu onClick={handleClick}>
      <Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Item>
    </Menu>
  );

  useEffect(() => {
    addItem()
  }, [count]);
  return (
    <header id="home" className="welcome-hero">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to="0"
            className="active"
          >
            <span className="small-circle"></span>
          </li>
          <li data-target="#header-carousel" data-slide-to="1">
            <span className="small-circle"></span>
          </li>
          <li data-target="#header-carousel" data-slide-to="2">
            <span className="small-circle"></span>
          </li>
        </ol>
      </div>

      <div className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            <div className="top-search">
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-addon close-search">
                    <i className="fa fa-times"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="attr-nav">
                <ul>
                  <li className="search">
                    <a href="#">
                      <span className="lnr lnr-magnifier"></span>
                    </a>
                  </li>
                  {isAuthenticated ? (
                    <li className="logout">
                      {/* <a href="">
                        <LogoutOutlined onClick={() => logout()} />
                      </a> */}
                      <Dropdown
                        className="dropdown"
                        overlay={dropdown_menu}
                        trigger={["click"]}
                      >
                        <a
                          className="ant-dropdown-link dropdown_name"
                          onClick={(e) => e.preventDefault()}
                        >
                          {user?.nickname}
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </li>
                  ) : (
                    <li className="login">
                      <a href="">
                        <LoginOutlined onClick={() => loginWithRedirect()} />
                      </a>
                    </li>
                  )}
                  {/* <li>
                    {isAuthenticated ? (
                      <Avatar size={40} className="main_avatar">
                        {user?.nickname?.toUpperCase()?.[0]}
                      </Avatar>
                    ) : (
                      false
                    )}
                  </li> */}

                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="lnr lnr-cart" onMouseOver={() => addItem()}></span>
                      <span className="badge badge-bg-1">{data.length}</span>
                    </a>
                    <ul
                      className="dropdown-menu cart-list s-cate"
                      onMouseOver={() => addItem()}
                    >
                      {data
                        .filter((e: any) => e.qty > 0)
                        .map((e: any) => {
                          return (
                            <li className="single-cart-list" key={e.id}>
                              <a href="#" className="photo">
                                <img
                                  src={e.img}
                                  className="cart-thumb"
                                  alt="image"
                                />
                              </a>
                              <div className="cart-list-txt">
                                <h6>
                                  <a href="#">{e.name}</a>
                                </h6>
                                <p>
                                  {e.qty} x -{" "}
                                  <span className="price">${e.price}</span>
                                </p>
                              </div>
                              <div className="cart-close">
                                <span
                                  className="lnr lnr-cross"
                                  onClick={() => removeItem(e.id)}
                                ></span>
                              </div>
                            </li>
                          );
                        })}

                      {/* <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/arrivals2.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                single <br /> armchair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          <div className="cart-close">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/arrivals3.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                wooden arn <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          <div className="cart-close">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </li> */}
                      <li className="total">
                        <span>Total: ${total}</span>
                        <button className="btn-cart pull-right">
                          view cart
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#">
                  logo
                </a>
              </div>
              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  className="nav navbar-nav navbar-center"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className=" scroll active">
                    <a href="#home" onClick={() => navigate('/')}>home</a>
                  </li>
                  {user ? (
                    <li className="scroll">
                      <a href="#new-arrivals"  onClick={() => navigate('/')}>new arrival</a>
                    </li>
                  ) : (
                    false
                  )}

                  <li className="scroll">
                    <a href="#feature"  onClick={() => navigate('/')}>features</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog"  onClick={() => navigate('/')}>blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#newsletter"  onClick={() => navigate('/')}>contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
};

export default Header;
