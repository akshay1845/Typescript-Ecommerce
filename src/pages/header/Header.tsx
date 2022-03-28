import { useEffect, useState } from "react";
import { LoginOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown, Menu, Avatar } from "antd";
import { useSelector } from "react-redux";
import "./header.css";

const { Item } = Menu;

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user }: any = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Apidata);
    show()
  }, data);

  const show = () => {
    setData(Apidata);
  };

  const Apidata = useSelector((state: any): any => state.API_Data.Apidata);
  console.log("from header", Apidata);
  const handleClick = (e: any) => {
    console.log("e" + e);
    if (e.key === "logout") {
      // localStorage.removeItem("auth")
      // setAccount(false)
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
                      <span className="lnr lnr-cart"></span>
                      <span className="badge badge-bg-1">2</span>
                    </a>
                    <ul
                      className="dropdown-menu cart-list s-cate"
                      onMouseOver={() => show()}
                    >
                      {
                      data.map((e:any) => {
                        return (
                          <li className="single-cart-list">
                            <a href="#" className="photo">
                              <img
                                src={e.img}
                                className="cart-thumb"
                                alt="image"
                              />
                            </a>
                            <div className="cart-list-txt">
                              <h6>
                                <a href="#">
                                  {e.name}
                                </a>
                              </h6>
                              <p>
                                {e.qty} x - <span className="price">${e.price}</span>
                              </p>
                            </div>
                            <div className="cart-close">
                              <span className="lnr lnr-cross"></span>
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
                        <span>Total: $0.00</span>
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
                    <a href="#home">home</a>
                  </li>
                  {user ? (
                    <li className="scroll">
                      <a href="#new-arrivals">new arrival</a>
                    </li>
                  ) : (
                    false
                  )}

                  <li className="scroll">
                    <a href="#feature">features</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog">blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#newsletter">contact</a>
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
