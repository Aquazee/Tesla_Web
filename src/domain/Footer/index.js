import React from 'react';
import { Constants } from '../../utils';
import styles from './style';

const { ABOUT, FOOTERBOTTOMLIST, FOOTERCONTACT, HELP, POLICY, SOCIAL } = Constants.FOOTER;

function Footer() {
  return (
    <footer className="footer row" style={styles.footer}>
      <div className="row w-100">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <ul className="list-group list-group-flush opacity-0">
                <li className="list-group-item border-0 ps-3" style={styles.header}>
                  ABOUT
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Contact Us
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    About Us
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" className='text-light'>
                    Careers
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Ekart Stories
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-group list-group-flush opacity-0">
                <li className="list-group-item border-0 ps-3" style={styles.header}>
                  HELP
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Payments
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Shipping
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Cancellation & Returns
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    FAQ
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Report Infringement
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-group list-group-flush opacity-0">
                <li className="list-group-item border-0 ps-3" style={styles.header}>
                  POLICY
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Return Policy
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Terms Of Use
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Security
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Privacy
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Sitemap
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    EPR Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-group list-group-flush opacity-0">
                <li className="list-group-item border-0 ps-3" style={styles.header}>
                  SOCIAL
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Facebook
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Twitter
                  </a>
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <a href="#" style={styles.listitem}>
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <ul className="list-group list-group-flush opacity-0">
                <li className="list-group-item border-0 ps-3" style={styles.header}>
                  Mail Us
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <p style={styles.listitem}>
                    Ekart Corp,
                    <br />
                    5th Avenue, Second Lane,
                    <br />
                    CA, USA
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <ul className="list-group list-group-flush opacity-0">
                <li className="list-group-item border-0 ps-3" style={styles.header}>
                  Registered Office Address:
                </li>
                <li className="list-group-item border-0" style={styles.transparent}>
                  <p style={styles.listitem}>
                    Ekart Corp,
                    <br />
                    5th Avenue, Second Lane,
                    <br />
                    CA, USA{' '}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterBottomList />
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;

const FooterBottomListItem = ({ name, url, icon }) => {
    return (<a className="nav-link" style={styles.footerBtmlistitem} href={url}>
      <i className={`${icon} me-2`} />
      {name}
    </a>
  );
}

const FooterBottomList = () => {
  return (
    <div className="row bt-1">
      <nav className="nav">
        {FOOTERBOTTOMLIST.map((footerBottomItem, index) => (
          <FooterBottomListItem key={`footerBottomItem_${index}`} {...footerBottomItem} />
        ))}
      </nav>
    </div>
  );
}
