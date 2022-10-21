import React from 'react';

const Notification = ({ notificationAlertRef, place = 'tr', message, type = 'primary' }) => {
  // var type;
  // switch (color) {
  //     case 1:
  //         type = "primary";
  //         break;
  //     case 2:
  //         type = "success";
  //         break;
  //     case 3:
  //         type = "danger";
  //         break;
  //     case 4:
  //         type = "warning";
  //         break;
  //     case 5:
  //         type = "info";
  //         break;
  //     default:
  //         break;
  // }
  let options = {};
  options = {
    place,
    message: (
      <div>
        <div>{message}</div>
      </div>
    ),
    type,
    icon: 'icon-bell-55',
    autoDismiss: 7
  };
  notificationAlertRef.current.notificationAlert(options);
};

export default Notification;
