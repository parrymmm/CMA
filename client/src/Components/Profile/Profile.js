import React from "react";
import "./Profile.css";
import userPhoto from "../../assets/images/users/nick_such.jpeg";
import { Link } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-wrapper">
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
      <div className="profile-col-2">
        <div className="profile-col-2-sub-1">
          <div className="search-box">
            <form action="#" method="get">
              <span className="search-box-grp">
                <FaSearchLocation className="search-icon" />
                <input type="search" placeholder="Search Contacts" />
              </span>
            </form>
          </div>
          <div className="number-of-contact-box">108 Contacts</div>
          <div className="add-contact-box">
            <Link to="/add-contact">Add Contact</Link>
          </div>
        </div>
        <div className="profile-col-2-sub-2">
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/delete">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/">Delete</Link>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-item">John</div>
            <div className="contact-box-item">Micheal</div>
            <div className="contact-box-item">johnmicheal@gmail.com</div>
            <div className="contact-box-item">08057878960</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">
                <Link to="/contact/edit">Edit</Link>
              </div>
              <div className="delete-btn">
                <Link to="/contact/">Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
