import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import userPhoto from "../../assets/images/users/nick_such.jpeg";
import ProfileCol2 from "./ProfileCol2";
import ProfileCol1 from "./ProfileCol1";
import fakeUsers from "./FakeUsers";
import fakeContacts from "./FakeContacts";

const Profile = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState({
    photo: "",
    firstname: "",
    lastname: "",
    lastseen: "",
  });

  useEffect(() => {
    try {
      //GET localhost:3000/api/users
      const foundUser = fakeUsers.filter((user) => user.id.toString() === id);
      setUserDetails({
        photo: foundUser.photo,
        firstname: foundUser.firstName,
        lastname: foundUser.lastName,
        lastseen: foundUser.lastSeen,
      });
    } catch (error) {
      console.log(error);
    }
    // return () => {
    //   cleanup;
    // };
  }, [id]);

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
