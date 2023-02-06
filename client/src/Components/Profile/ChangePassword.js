import React from "react";
import "./ChangePassword.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserLock } from "react-icons/fa";

const ChangePassword = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a">
            <FaUserLock />
            Change Password
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
            <label htmlFor="password">Enter New Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>
          <div className="signup-rows">
            <label htmlFor="cpassword">Confirm New Password</label>
            <input
              type="password"
              id="cpassword"
              placeholder="confirm password"
            />
          </div>
          <div className="signup-rows">
            <button type="submit">Change Password</button>
          </div>
          {/* ------add contact ends here------ */}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
