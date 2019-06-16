import React, { useEffect } from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  if (notifications && notifications.length > 0) {
    return (
      <div>
        <ul className="online-users">
          {notifications.map(item => {
            return (
              <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">
                  {moment(item.time.toDate()).fromNow()}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  if (notifications.length === 0) {
    return <div>No notifications...</div>;
  }
};

export default Notifications;
