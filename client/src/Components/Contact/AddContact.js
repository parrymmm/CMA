import React from "react";
import "./AddContact.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const AddContact = () => {
  return (
    <div className="page-wrapper">
      <form action="" method="post">
        <div className="page-section">
          <div className="page-row-1">
            <div className="page-row-1-a">Add Contact</div>
            <div className="page-row-1-b">
              <Link to="/profile">
                <FaRegArrowAltCircleLeft /> Back
              </Link>
            </div>
          </div>
          <div className="page-row-2">
            {/* ------add contact starts here------ */}
            <div className="add-contact-wrapper">
              <div className="input-grp">
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
              </div>
              <div className="input-grp">
                <input type="phone" placeholder="080676xxxx" />
                <input type="email" placeholder="email" />
              </div>
              <div className="input-grp">
                <select name="" id="">
                  <option value="">Occupation</option>
                </select>
              </div>
            </div>
            {/* ------add contact ends here------ */}
          </div>
          <div className="page-row-3">
            <div className="page-row-3-a">
              <Link to="/profile">Cancel</Link>
            </div>
            <div className="page-row-3-b">
              <input type="submit" value="Create" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
