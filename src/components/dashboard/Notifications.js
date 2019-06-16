import React, { useEffect } from "react";

const Notifications = props => {
  const { notifications } = props;
  console.log(notifications);
  return (
    <div>
      {notifications &&
        notifications.map(item => {
          return <div>{item.user}</div>;
        })}
    </div>
  );
};

export default Notifications;
