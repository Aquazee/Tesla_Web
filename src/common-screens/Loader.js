import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts';

const Loader  = () => {
  const history = useHistory();

  const { user } = useAuth();

  const checkAuth = () => {
    console.log(user);
    if (user) {
      history.push('/admin');
    }
  };

  useEffect(() => {
    checkAuth();
  }, [user]);

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ height: 400 }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body text-center">
            {/* <img
              src={require('assets/img/ninja.gif').default}
              alt="123"
              style={{ height: 200, width: 200 }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
