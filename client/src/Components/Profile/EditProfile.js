import React from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserEdit } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a">
            <FaUserEdit /> Update Profile
          </div>
          <div className="page-row-1-b">
            <Link to="/profile/settings">
              <FaRegArrowAltCircleLeft /> Back
            </Link>
          </div>
        </div>
        <div className="page-row-2">
          {/* ------add contact starts here------ */}
          <div className="edit-profile-wrapper">
            <div className="signup-body">
              <form action="" method="post" className="signup-form-wrapper">
                <div className="signup-rows">
                  <label htmlFor="Firstname">Firstname</label>
                  <input type="text" id="firstname" placeholder="Firstname" />
                </div>
                <div className="signup-rows">
                  <label htmlFor="LastName"> LastName</label>
                  <input type="text" id="LastName" placeholder="LastName" />
                </div>
                <div className="signup-rows">
                  {/* <label htmlFor="">gender</label> */}
                  <span>
                    Gender:
                    <label htmlFor="male">
                      <input type="radio" name="gender" id="male" disabled />
                      male
                    </label>
                    <label htmlFor="female">
                      <input type="radio" name="gender" id="male" disabled />
                      female
                    </label>
                  </span>
                </div>

                <div className="signup-rows">
                  <label htmlFor="datefbirth"> date of birth</label>
                  <input type="date" id="datefbirth" />
                </div>
                <div div className="signup-rows">
                  <label htmlFor="country">country</label>
                  <select name="" id="country" disabled>
                    <option value="">country</option>
                  </select>
                </div>
                <div div className="signup-rows">
                  <label htmlFor="state">state</label>
                  <select name="" id="state" disabled>
                    <option value="">state</option>
                  </select>
                </div>
                <div className="signup-rows">
                  <label htmlFor="city">city</label>
                  <select name="" id="city" disabled>
                    <option value="">city</option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="username"> username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="username"
                    disabled
                  />
                </div>

                <div className="signup-rows">
                  <label htmlFor="email"> email</label>
                  <input type="email" id="datefbirth" placeholder="email" />
                </div>

                <div className="signup-rows">
                  <label htmlFor="phone">phone number</label>
                  <input type="tel" id="phone" placeholder="phone number" />
                </div>

                <div className="signup-rows">
                  <button type="submit">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
          {/* ------add contact ends here------ */}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
