import React from 'react';

const ViewProvider = (props) => (
  // TASK 5:
  // Render Single Provider View Here
  // Feel free to using existing styles,
  // or add new ones if you want to :)
  <>
    <p>View Provider</p>

    <p>{props.location.state.name}</p>
    <p>{props.location.state.address}</p>
  </>
);

export default ViewProvider;