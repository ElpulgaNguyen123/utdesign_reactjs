import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
        <header id="header" className="border">
          <div className="container">
            <nav className="navbar navbar-default">
              {/*  Header Logo  */}
              <div id="logo">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo.png" className="normal" alt="logo" />
                  <img src="assets/img/logo@2x.png" className="retina" alt="logo" />
                </a>
              </div>
              {/*  END Header Logo  */}
              {/*  Menu  */}
              <div id="sidemenu">
                <div className="menu-holder">
                  <ul>
                    <li className="submenu">
                      <a href="javascript:void(0)" className="active-item">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index.html">Home Minimal</a></li>
                        <li><a href="index-creative.html">Home Creative</a></li>
                        <li><a href="index-agency.html">Home Agency</a></li>
                        <li><a href="index-shop.html">Home Shop</a></li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="about.html">About</a></li>
                        <li><a href="page-image-header.html">Page Image Header</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="404.html">404</a></li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0)">Portfolio</a>
                      <ul className="sub-menu">
                        <li><a href="portfolio-two-columns.html">Two Columns</a></li>
                        <li><a href="portfolio-three-columns.html">Three Columns</a></li>
                        <li><a href="portfolio-four-columns.html">Four Columns</a></li>
                        <li><a href="project-1.html">Project 1</a></li>
                        <li><a href="project-2.html">Project 2</a></li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0)">Journal</a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">Journal Classic</a></li>
                        <li><a href="blog-minimal.html">Journal Minimal</a></li>
                        <li><a href="single-post.html">Post</a></li>
                        <li><a href="single-post-slider.html">Post Slider</a></li>
                        <li><a href="single-post-video.html">Post Video</a></li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0)">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="index-shop.html">Index Shop</a></li>
                        <li><a href="single-product.html">Product</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li>
                      <a href="contacts.html">Contacts</a>
                    </li>
                    {/* Lang */}
                    <li className="lang">
                      <span className="current"><a href="#">en</a></span>
                      <ul>     
                        <li><a href="#">it</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  END Menu  */}
              {/*  Button for Responsive Menu  */}
              <div id="menu-responsive-sidemenu">
                <div className="menu-button">
                  <span className="bar bar-1" />
                  <span className="bar bar-2" />
                  <span className="bar bar-3" />
                </div>
              </div>
              {/*  END Button for Responsive Menu  */}
            </nav>
          </div>
        </header>
       )
  }
}

export default Header;