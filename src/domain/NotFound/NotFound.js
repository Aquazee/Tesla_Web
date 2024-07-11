import React, { useEffect } from 'react';
import { AppFunctions } from '../../utils';
import './NotFound.css';
import { useTheme } from 'contexts/ThemeProvider';

function NotFound({ route }) {
  const { theme } = useTheme();
  useEffect(() => {
    pageLoad();
  })

  const pageLoad = () => {
    AppFunctions.setTitle(route.name)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <a href="/" className="btn btn-primary btn-lg" style={{ background: theme.primary, border: `2px solid ${theme.primary}` }}>
                <i className="glyphicon glyphicon-home" />
                <small >Go Home</small>
              </a>
              <a href="/support" className="btn btn-default btn-lg" style={{ border: `2px solid ${theme.primary}` }}>
                <i className="glyphicon glyphicon-envelope" />
                <small>Contact Support</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
