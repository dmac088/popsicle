import React, { useState, useEffect } from "react";
import WebMenu from './MainMenu/Web/WebMenu';
import MobileMenu from './MainMenu/Mob/MobileMenu';
import Search from './Search/Search';
import Language from './Language/Language';
import Currency from './Currency/Currency';
import HeaderItem from './HeaderItem';
import BagMenu from './Bag/BagMenu';
import { isMobile } from '../Helpers/mobile';
import { Transition } from 'react-transition-group';
import { slide } from "../Helpers/animation";
import logo from '../../../assets/images/logo.png'
import iconPhone from '../../../assets/images/icon-phone.png';
import { localization } from '../Localization/Localization';

function Header(props) {
  const { lang } = props.match.params;

  const [stateObject, setObjectState] = useState({
    scrollPosition: 0,
    isMobile: false,
    revealMenu: false,
  });

  const renderMenu = () => {
    setObjectState((prevState) => ({
      ...prevState,
      isMobile: isMobile(),
    }));
  }

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    setObjectState((prevState) => ({
      ...prevState,
      revealMenu: !prevState.revealMenu,
    }));
  }

  const listenToScroll = () => {
    let scroll = document.documentElement.scrollTop;
    setObjectState((prevState) => ({
      ...prevState,
      scrollPosition: scroll,
    }));
  }

  useEffect(() => {
    renderMenu();
    // initiate the event handler
    if(isMobile) { slide(container, 'slideUp', {duration: 0 } ); }
    window.addEventListener('scroll', listenToScroll, { passive: true });
    window.addEventListener('resize', renderMenu, { passive: true });

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('scroll', listenToScroll, { passive: true });
      window.removeEventListener('resize', renderMenu, { passive: true });
    };
  }, []);


  let container = null;

  const setContainer = (c) => {
    container = c;
  }

  return (
    <header>
      {/*<!--=======  header top  =======-->*/}
      <div className="header-top pt-10 pb-10 pt-lg-10 pb-lg-10 pt-md-10 pb-md-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center text-sm-left">
              {/*<!-- currncy language dropdown -->*/}
              <div className="lang-currency-dropdown">
                <ul>
                  <Language 
                    {...props} />
                  <Currency
                    {...props} />
                </ul>
              </div>
              {/*<!-- end of currncy language dropdown -->*/}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  text-center text-sm-right">
              {/*<!-- header top menu -->*/}
              <div className="header-top-menu">
                <ul>
                  <HeaderItem
                    {...props}
                    routePage={'myaccount'} />
                  <HeaderItem
                    {...props}
                    routePage={'mywishlist'} />
                  <HeaderItem
                    {...props}
                    routePage={'mycheckout'} />
                </ul>
              </div>
              {/*<!-- end of header top menu -->*/}
            </div>
          </div>
        </div>
      </div>
      {/*<!--=======  End of header top  =======-->*/}

      {/*<!--=======  header bottom  =======-->*/}
      <div className={"header-bottom header-bottom-one header-sticky"
        + ((stateObject.scrollPosition >= 300) ? " is-sticky" : "")}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center">
              {/*<!-- logo -->*/}
              <div className="logo mt-15 mb-15">
                <a href="index.html">
                  <img src={logo} className="img-fluid" alt="" />
                </a>
              </div>
              {/*<!-- end of logo -->*/}
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className={"menubar-top "
                + " justify-content-between align-items-center flex-sm-wrap flex-md-wrap flex-lg-nowrap mt-sm-15"
                + ((stateObject.scrollPosition >= 300) ? " d-none" : " d-flex")}>
                {/*<!-- header phone number -->*/}
                <div className="header-contact d-flex">
                  <div className="phone-icon">
                    <img src={iconPhone} className="img-fluid" alt="" />
                  </div>
                  <div className="phone-number">
                    {localization[lang]['phone']}: <span className="number">1-888-123-456-89</span>
                  </div>
                </div>
                {/*<!-- end of header phone number -->*/}
                <Search 
                  {...props}/>
                {/*<!-- shopping cart -->*/}
                <BagMenu 
                  {...props}/>
              </div>

              {/*<!-- navigation section -->*/}
                <div className="main-menu" >
                  {(!stateObject.isMobile) 
                  ? <WebMenu 
                    {...props}/> 
                  : <React.Fragment />}
                </div>
              {/*<!-- end of navigation section -->*/}
            </div>
            <div className="col-12">
              {/*<!-- Mobile Menu -->*/}
              <div  className="mobile-menu d-block d-lg-none mean-container">
                <div className="mean-bar">
                  <a onClick={toggleMobileMenu}
                    href="#nav"
                    className={"meanmenu-reveal " + ((stateObject.revealMenu) ? "meanclose" : "")}
                    style={{
                      background: '',
                      color: '',
                      right: 0,
                      left: 'auto'
                    }}>
                    <span className={(stateObject.revealMenu) ? "menu-close" : "menu-bar"} />
                  </a>
                  <nav className="mean-nav">
                  <ul ref={setContainer}>
                  
                  <Transition
                    in={stateObject.revealMenu}
                    timeout={0}
                    onEntering={() => { slide(container, 'slideDown', {duration: 500 }); }}
                    onEntered={() => { console.log(' entered') }}
                    onExiting={() => { slide(container, 'slideUp', {duration: 500 }); }}
                    onExited={() => { console.log(' exited') }}>
                      <MobileMenu 
                        {...props}/>
                  </Transition>
                  </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--=======  End of header bottom  =======-->*/}
    </header>
  );
}


export default Header;


