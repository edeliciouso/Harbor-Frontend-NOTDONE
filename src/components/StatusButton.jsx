// status update button

import React from 'react';

const StatusButton = ({ pkg, updateStatus }) => {
  if (pkg.status === 'Pending') {
    return <button className="statsbutton" onClick={() => updateStatus(pkg.id, 'Arrived in Harbor')}>Arrived in Harbor</button>;
  } else if (pkg.status === 'Arrived in Harbor') {
    return <button className="statsbutton" onClick={() => updateStatus(pkg.id, 'Received by XYZ')}>Received by XYZ</button>;
  } else if (pkg.status === 'Received by XYZ') {
    return <p className="received-date">Received by XYZ - {pkg.orderTime}</p>;
  }
  return null;
};

export default StatusButton;
