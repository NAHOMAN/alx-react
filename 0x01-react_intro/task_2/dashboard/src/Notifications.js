// task_2/dashboard/src/Notifications.js

import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none' }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="Close icon" width="15" height="15" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} data-priority="urgent"></li>
      </ul>
    </div>
  );
}
