import React from 'react';
import './style.css';

function Account() {
  return (
    <div className="col-12">
      <div className="" style={{ background: '#e0e0e0', padding: 10 }}>
        <div className="row">
          <div className="col-3 offset-1">
            <div id="" className="bg-white p-2 pl-4 card">
              <ul className="mb-0">
                <li className="filter_title">
                  <div className="row">
                    <div className="col-2">
                      <div
                        className="rounded-circle w-auto text-center border border-secondary"
                        style={{ padding: 15, marginBottom: 0, width: 58 }}
                      >
                        <i className="fa fa-user" height />
                      </div>
                    </div>
                    <div className="col-9">
                      {' '}
                      Hello,
                      <br />
                      Aqua freax
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="" className="nav nav-tabs mt-4 card">
              {/* <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                        </div> */}
              <ul className="Account-side_sect mb-0">
                <li className="text-secondary text-uppercase">
                  <a className="nav-link" href="/myorders">
                    <i className="fa fa-suitcase" /> My Orders
                  </a>
                </li>
                <li className="text-secondary text-uppercase">
                  <a
                    className="nav-link"
                    id="one-tab"
                    data-toggle="tab"
                    href="#one"
                    role="tab"
                    aria-controls="One"
                    aria-selected="true"
                  >
                    <i className="fa fa-user" height /> Account Settings
                  </a>
                  <div className="Account-sublist" style={{ marginLeft: 35, paddingBottom: 10 }}>
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#one"
                      role="tab"
                      aria-controls="profile-tab"
                      aria-selected="true"
                    >
                      Profile Information
                    </a>

                    <a
                      className="nav-link"
                      id="address-tab"
                      data-toggle="tab"
                      href="#one"
                      role="tab"
                      aria-controls="address-tab"
                      aria-selected="true"
                    >
                      Manage Addresses
                    </a>

                    <a
                      className="nav-link"
                      id="pancard-tab"
                      data-toggle="tab"
                      href="#one"
                      role="tab"
                      aria-controls="pancard-tab"
                      aria-selected="true"
                    >
                      Pan Card Information
                    </a>
                  </div>
                </li>

                {/* <ul className="">
                                    <li>
                                        <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">
                                            Account Settings
                                        </a>
                                    </li>
                                </ul> */}
              </ul>
            </div>
          </div>
          <div className="col-7 productList card" style={{ padding: 0 }}>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                home{' '}
              </div>
              <div
                className="tab-pane fade"
                id="address"
                role="tabpanel"
                aria-labelledby="address-tab"
              >
                Profile
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="pancard-tab"
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Account.propTypes = {};

export default Account;
