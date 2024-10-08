// import React, { useState } from "react";
// // import { useAuth } from "../AuthContext";
// import { useHistory } from "react-router-dom";
// import CenteredContainer from "./CenteredContainer";
// import './Profile.css';

// export default function Profile() {
//   const [error] = useState("");
//   // const { currentUser, updateEmail, updatePassword } = useAuth();
//   const history = useHistory();

//   // const [name, setName] = useState("");
//   // const [phoneNumber] = useState("");
//   // const [email] = useState(currentUser.email);
//   // const [password] = useState("");

//   const handleGoBack = () => {
//     history.push("/");
//   };

//     return (
//     <CenteredContainer>
//       <div className="profile-card">
//         <div className="profile-header">
//           <h2>Profile</h2>
//         </div>
//         {error && <div className="profile-alert">{error}</div>}
//         <div className="profile-content">
//           <p><strong>Email:</strong> {currentUser.email}</p>
//           <button className="profile_go_back" onClick={handleGoBack}>
//             Go Back
//           </button>
//         </div>
//       </div>
//     </CenteredContainer>
//   );
// }



import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import './Profile.css';

export default function Profile() {
  const [error] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory(); // Define history using useHistory()

  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <CenteredContainer>
      <div className="profile-card"> {/* Added class for the card */}
        <div className="profile-header">
          <h2 className="text-secondary mb-4">Your Profile</h2>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="profile-content">
          <strong className="text-dark">Email:</strong> {currentUser.email}
        </div>
        <button className="profile_go_back" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </CenteredContainer>
  );
}

