import React from 'react';
import ManageAddresses from './ManageAddresses';
import PanCardInformation from './PanCardInformation';
import PersonalInformation from './PersonalInformation';
import './style.css';

const ACCOUNT = [
  {
    'name': 'Account Settings',
    'sections': [
      {
        name: 'Profile Information',
        is_active: true
      },
      {
        'name': 'Manage Addresses',
        is_active: true
      },
      {
        'name': 'Pan Card Information',
        'is_active': true
      },
    ]
  },
  {
    'name': 'Payments',
    'sections': [
      {
        'name': 'Gift Cards',
        is_active: false
      },
      {
        'name': 'Saved UPI',
        is_active: false
      },
      {
        'name': 'Saved Cards',
        is_active: false
      },
    ]
  },
  {
    'name': 'My Stuff',
    'sections': [
      {
        'name': 'Coupons',
        is_active: false
      },
      {
        'name': 'Reviews and Ratings',
        is_active: false
      },
      {
        'name': 'Notifications',
        is_active: false
      },
      {
        'name': 'Wishlist',
        is_active: false
      },
    ]
  },
]

function Account() {
  return (
    <div className="col-12 mt-3 mb-3" >
      <div className="row">
        <div className="col-3 offset-1">
          <div id="" className="bg-white p-2 pl-4 card">
            <ul className="mb-0">
              <li className="filter_title">
                <div className="row">
                  <div
                    className="rounded-circle w-auto text-center border border-secondary mr-3 ml-2"
                    style={{ padding: 15, marginBottom: 0, minWidth: 58 }}
                  >
                    <i className="fa fa-user" />
                  </div>

                  Hello,
                  <br />
                  Aqua freax
                </div>
              </li>
            </ul>
          </div>
          <div id="" className="nav nav-tabs mt-3 card">
            <ul className="Account-side_sect mb-0">
              <li className="text-secondary text-uppercase">
                <a className="nav-link" href="/myorders">
                  <i className="fa fa-suitcase" /> My Orders
                </a>
              </li>
              {
                ACCOUNT.map((items, index) => {
                  return <TabContainer key={`account_tabs_${index}`} {...items} />
                })
              }
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
  const id = name.toLowerCase().split(' ').join('_');
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
  )
}

const TabSubList = ({ name, is_active, index }) => {
  const id = name.toLowerCase().split(' ').join('_');
  return (
    <a
      className={`nav-link${is_active ? '': ' disabled not-allowed'}`}
      id={`${id}-tab`}
      data-toggle="tab"
      href={`#${id}`}
      role="tab"
      aria-controls={`${id}-tab`}
      aria-selected="true"
    >
      {name}
    </a>
  )
}

const TabContainer = ({ name, sections }) => {
  return (
    <li className="text-secondary text-uppercase">
      <TabHead name={name} icon="fa fa-user" index="1" />
      <div className="Account-sublist" style={{ paddingBottom: 10 }}>
        {
          sections.map((section, index) => {
            return <TabSubList key={`account_section_tabs_${index}`} {...section}/>
          })

        }
      </div>
    </li>
  )
}