import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import './Profile.css';

export default function Profile() {
  const [error] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory(); // Initialize useHistory

  const handleGoBack = () => {
    history.goBack(); // Navigate back to the previous page
  };

  return (
    <CenteredContainer>
      <div className="profile-card">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        {error && <div className="profile-alert">{error}</div>}
        <div className="profile-content">
          <p><strong>Email:</strong> {currentUser.email}</p>
          <Link to="/update-profile" className="profile-button">
            Update Profile
          </Link>
          <button className="profile_go_back" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </CenteredContainer>
  );
}
