import React from 'react';

const Avatar = () => {
  return (
    <div id="avatar" className="bg-orange container-fluid">
      <div className="row">
        <div className="col-3"><img src="http://lorempixel.com/400/200" alt="" /></div>
        <div id="avatar-info" className="col-9 pl-0">
          <div className="name">Muhammad Hilmi</div>
          <div className="position">Software Developer</div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
