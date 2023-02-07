import React from "react";
import { Link } from "react-router-dom";

const ProfileCol1 = (props) => {
  const { userPhoto } = props;
  return (
    <div className="profile-col-1">
      <div className="profile-col-1-sub-1">
        <div className="profile-photo-round">
          <img alt="my pics" src={userPhoto} />
        </div>
      </div>
      <div className="profile-col-1-sub-2">Nike Omolade Halima</div>
      <div className="profile-col-1-sub-3">Last seen 2/2/2023 03-31-57PM</div>
      <div className="profile-col-1-sub-4">
        <Link to="/profile/settings">Settings</Link>
        <Link to="/edit-profile">Logout</Link>
      </div>
    </div>
  );
};

export default ProfileCol1;
