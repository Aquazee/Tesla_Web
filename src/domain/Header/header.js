import React, { useEffect } from 'react';
import './style.css';
import menu from './menu';
import { getWindowDimensions, UpperCaseArray } from '../../utils/Helper';
import { Dropdown, Input } from '../../components';
import { useAuth } from '../../contexts';
import Constants from "../../utils/Constants";
import HeaderSearch from './HeaderSearch';
import MoreListItems from './MoreListItems';
import AccountDropDown from './AccountDropDown';
import HoverableDropdown from '../../components/HoverableDropdown';


const MenuItem = () => {
  const myWidth = getWindowDimensions().width * (97 / 100);
  const MENU_DATA = menu.items;
  return Object.keys(MENU_DATA[0]).map((j, indexj) => {
    const title1 = MENU_DATA[0][j].title
      .split(',')
      .join(' ')
      .split('&amp;')
      .join(' & ')
      .split('&')
      .join(' & ');
    return (
      <div className="" style={{ margin: '0 auto' }} key={j + indexj}>
        <a
          className="mr-3 nav-link dropdown-toggle footerBtmlistitem headerProducts"
          href="#"
          id={MENU_DATA[0][j].title}
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {title1}
        </a>
        <div
          className="dropdown-menu rounded-0 border-0"

          aria-labelledby={MENU_DATA[0][j].title}
          style={{ width: myWidth }}
        >
          <div className="row">
            {MENU_DATA[0][j].tabs &&
              MENU_DATA[0][j].tabs.map((k, kIndex) =>
                k.columns.map((m, mIndex) => (
                  <div key={'m' + mIndex} className="col-2 me-auto ">
                    {m.map((l, lIndex) => {
                      let title = l.title
                        .split(',')
                        .join(' ')
                        .split('&amp;')
                        .join(' & ')
                        .split('&')
                        .join(' & ');
                      title = UpperCaseArray(title);
                      return (
                        <a
                          key={'l' + lIndex}
                          className={`dropdown-item ${l.type ? 'font-weight-500' : ''}`}
                          href={l.url}
                        >
                          {title}
                        </a>
                      );
                    })}
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
    );
  });

  // return Object.keys(MENU_DATA[0]).map((j, indexj) => {
  //     return <div key={j + indexj}>
  //         <a className="nav-link dropdown-toggle footerBtmlistitem" href="#" id={"Electronics"} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //             {"Electronics"}
  //         </a>
  //         <div className="dropdown-menu" aria-labelledby={"Electronics"} style={{ width: myWidth }}>
  //             <div className="row">
  //                 <div className="col-2">
  //                     <a key={2} className={"dropdown-item font-weight-bold bg-transparent"} href={"#"}>
  //                         {"Mobiles"}
  //                     </a>
  //                     <a key={3} className={"dropdown-item text-secondary bg-transparent"} href={"#"}>
  //                         {"Mi"}
  //                     </a>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
};

const Header = () => {
  const { isLoggedIn, setLoggedIn, user } = useAuth();


  useEffect(() => {
    const tokenExtras = window.location.href.split('token=')[1];
    const token = tokenExtras ? tokenExtras.split(';')[0] : undefined;
    if (token && !isLoggedIn) {
      setLoggedIn(token);
    }
  })

  return (
    <div className='row'>
      <nav className="mb-0 navbar navbar-expand-lg navbar-light container-fluid pr-15 pl-15 headerSpacing headerNavb text-white">
        <a className="navbar-brand text-white" href="/">
          Tesla
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <HeaderSearch />
        <div className="col-3 collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto float-end">
            <li className="nav-item">
              <AccountDropDown isLoggedIn={isLoggedIn} name={user?.first_name}/>
            </li>
            {/* <Dropdown label={'more'} onSelect={()=>{}} options={['Notification Preferences', 'Sell on Triangle', '24/7 Customer Care', 'Advertise', 'Download App']}/> */}
            <li className="nav-item dropdown header-more ml-2">
              <HoverableDropdown label="More" options={Constants.MORELIST} />
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link text-white cart-icon" href="/checkout">
                <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="nav container-fluid allmenubar">{MenuItem()}</nav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
