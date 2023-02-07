import React from "react";
import "./AccountCreated.css";
import { FaCheckCircle } from "react-icons/fa";

const AccountCreated = () => {
  return (
    <div className="account-created-wrapper">
      <div class="account-created-row-1">
        <FaCheckCircle className="created-icon" />
        Account Created
      </div>
      <div class="account-created-row-2">
        Thank you for signing up, a verification page has been send to &nbsp;
        <strong>example@gmail.com</strong>, click the link to verify your
        account
      </div>
      <div class="account-created-row-3">Redirecting to login page in 10s</div>
    </div>
  );
};

export default AccountCreated;
