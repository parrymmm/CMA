import React from "react";
import "./Profile.css";
import userPhoto from "../../assets/images/users/nick_such.jpeg";
import ProfileCol2 from "./ProfileCol2";
import ProfileCol1 from "./ProfileCol1";
import fakeUsers from "./FakeUsers";
import fakeContacts from "./FakeContacts";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <ProfileCol1 userPhoto={userPhoto} />
      <ProfileCol2 />
      <fakeUsers />
      <fakeContacts />
    </div>
  );
};

export default Profile;
