import React from 'react';
//import styles from "./style";
import styles from "./style";
import ImmutablePropTypes from 'react-immutable-proptypes';

const Footer = () =>
    (<footer className="footer" style={styles.footer}>
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group list-group-flush opacity-0">
                            <li className="list-group-item border-0" style={styles.header}>
                                ABOUT
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Contact Us</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>About Us</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Careers</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Tesla Stories</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Press</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-group list-group-flush opacity-0">
                            <li className="list-group-item border-0" style={styles.header}>
                                HELP
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Payments</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Shipping</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Cancellation & Returns</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>FAQ</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Report Infringement</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-group list-group-flush opacity-0">
                            <li className="list-group-item border-0" style={styles.header}>
                                POLICY
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Return Policy</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Terms Of Use</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Security</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Privacy</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Sitemap</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>EPR Compliance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-group list-group-flush opacity-0">
                            <li className="list-group-item border-0" style={styles.header}>
                                SOCIAL
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Facebook</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Twitter</a>
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <a href="#" style={styles.listitem}>Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-4">
                        <ul className="list-group list-group-flush opacity-0">
                            <li className="list-group-item border-0" style={styles.header}>
                                Mail Us
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <p style={styles.listitem}>Tesla Corp, <br />5th Avenue, Second Lane, <br />CA, USA </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <ul className="list-group list-group-flush opacity-0">
                            <li className="list-group-item border-0" style={styles.header}>
                                Registered Office Address:
                            </li>
                            <li className="list-group-item border-0" style={styles.transparent}>
                                <p style={styles.listitem}>Tesla Corp, <br />5th Avenue, Second Lane, <br />CA, USA </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row bt-1">
            <nav className="nav">
                <a className="nav-link" style={styles.footerBtmlistitem} href="#">
                <i className="fa fa-suitcase mr-3"></i> Sell On Tesla
                    </a>
                <a className="nav-link" style={styles.footerBtmlistitem} href="#">
                <i className="fa fa-star mr-3"></i>
                Advertise</a>
                <a className="nav-link" style={styles.footerBtmlistitem} href="#">
                <i className="fa fa-gift mr-3"></i>
                    Gift Cards</a>
                <a className="nav-link" style={styles.footerBtmlistitem} href="#">
                <i className="fa fa-question-circle mr-3"></i>
                    Help Center</a>
                <a className="nav-link disabled" style={styles.footerBtmlistitem}  href="#"> © 2007-2020 Tesla.com</a>
            </nav>
        </div>
    </footer>);

Footer.propTypes = {
};

export default Footer;
