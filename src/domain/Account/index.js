import React, { useState } from "react";
import ManageAddresses from "./ManageAddresses";
import PanCardInformation from "./PanCardInformation";
import PersonalInformation from "./PersonalInformation";
import Constants from "../../utils/Constants";
import "./style.css";

const RoundedUserBorderIcon = () => (
  <div
    className="rounded-circle w-auto text-center border border-secondary me-3 ms-2"
    style={{ padding: 15, marginBottom: 0, minWidth: 58 }}
  >
    <i className="fa fa-user" />
  </div>
);

function Account() {
  const [selectedMenu, setSelectedMenu] = useState("");
  const onMenuClick = (menuName) => {
    const x = document.querySelector('.Account-side_sect')
    const y = x.querySelectorAll('.nav-link')
    for (let index = 0; index < y.length; index++) {
      const element = y[index];
      element.classList.remove('active')
    }
    setSelectedMenu(menuName);
  };
  return (
    <div className="col-12 mt-3 mb-3">
      <div className="row">
        <div className="col-3 offset-1">
          <div id="" className="bg-white p-2 ps-4 card">
            <ul className="mb-0">
              <li className="filter_title">
                <div className="row">
                  <RoundedUserBorderIcon />
                  <div className="">
                    <small>Hello,</small> <br />
                    <span className="h6">Aqua freax</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id="" className="nav nav-tabs mt-3 card">
            <ul className="Account-side_sect mb-0 ps-0">
              <li className="text-secondary text-uppercase">
                <a className="nav-link" href="/myorders">
                  <i className="fa fa-suitcase" /> My Orders
                </a>
              </li>
              {Constants.ACCOUNT_TABS.map((items, index) => {
                return (
                  <TabContainer
                    key={`account_tabs_${index}`}
                    {...items}
                    onMenuClick={onMenuClick}
                    selectedMenu={selectedMenu}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-7 productList card" style={{ padding: 0 }}>
          <div className="tab-content" id="myTabContent">
            <PersonalInformation />
            <ManageAddresses />
            <PanCardInformation />
          </div>
        </div>
      </div>
    </div>
  );
}

Account.propTypes = {};

export default Account;

const TabHead = ({ name, icon, index }) => {
  const id = name.toLowerCase().split(" ").join("_");
  return (
    <a
      className={`nav-link disabled`}
      id={`${id}-tab`}
      data-toggle="tab"
      href={`#${id}`}
      role="tab"
      aria-controls={`${id}-tab`}
      aria-selected="true"
    >
      <i className={icon} /> {name}
    </a>
  );
};

const TabSubList = ({ name, is_active, index, onMenuClick, selectedMenu }) => {
  const id = name.toLowerCase().split(" ").join("_");
  return (
    <a
      className={`nav-link`}
      id={`${id}-tab`}
      data-toggle="tab"
      href={`#${id}`}
      role="tab"
      aria-controls={`${id}-tab`}
      aria-selected="true"
      onClick={() => onMenuClick(name)}
    >
      {name}
    </a>
  );
};

const TabContainer = ({ name, sections, onMenuClick, selectedMenu }) => {
  return (
    <li className="text-secondary text-uppercase">
      <TabHead name={name} icon="fa fa-user" index="1" />
      <div className="Account-sublist" style={{ paddingBottom: 10 }}>
        {sections.map((section, index) => {
          return (
            <TabSubList
              key={`account_section_tabs_${index}`}
              {...section}
              onMenuClick={onMenuClick}
              selectedMenu={selectedMenu}
            />
          );
        })}
      </div>
    </li>
  );
};
