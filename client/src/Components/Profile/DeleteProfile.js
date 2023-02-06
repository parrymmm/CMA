import React from "react";
import "./DeleteProfile.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserShield } from "react-icons/fa";

const DeleteProfile = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a">
            <FaUserShield /> Delete Account
          </div>
          <div className="page-row-1-b">
            <Link to="/profile/settings">
              <FaRegArrowAltCircleLeft /> Back
            </Link>
          </div>
        </div>
        <div className="page-row-2">
          {/* ------add contact starts here------ */}
          <div className="signup-rows">
            <label htmlFor="password">Current Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>
          <div className="signup-rows">
            <button type="submit">Confirm Delete Account</button>
          </div>
          {/* ------add contact ends here------ */}
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
