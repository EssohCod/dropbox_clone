// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../AuthContext"
// import { Link, useHistory } from "react-router-dom"
// import CenteredContainer from "./CenteredContainer"

// export default function UpdateProfile() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { currentUser, updatePassword, updateEmail } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   function handleSubmit(e) { e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }
//     const promises = []
//     setLoading(true)
//     setError("")
//     if (emailRef.current.value !== currentUser.email) {
//       promises.push(updateEmail(emailRef.current.value))
//     }
//     if (passwordRef.current.value) {
//       promises.push(updatePassword(passwordRef.current.value))
//     }
//     Promise.all(promises)
//       .then(() => {
//         history.push("/user")
//       })
//       .catch(() => {
//         setError("Failed to update account")
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }
//   return (
//     <CenteredContainer>
//       <Card>
//         <Card.Body className="bg-light rounded">
//           <h2 className="text-center mb-4 text-secondary mt-3 ">Update Your Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Control className="bg-light text-dark" placeholder="email" type="email" ref={emailRef} required defaultValue={currentUser.email}/>
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Control className="bg-light text-dark" placeholder="password" type="password" ref={passwordRef}/>
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Control className="bg-light text-dark" placeholder="password confirm" type="password" ref={passwordConfirmRef}/>
//             </Form.Group>
//             <Button disabled={loading} className="w-100 btn btn-secondary" type="submit">
//               Update
//             </Button>
//           </Form>
//           <div className="p-2 text-center">
//         <Link to="/user">Cancel</Link>
//       </div>
//         </Card.Body>
//       </Card>
      
//     </CenteredContainer>
//   )
// }



import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import './UpdateProfile.css';

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const phoneRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    // Additional logic for updating name, age, and phone in Firestore can go here

    Promise.all(promises)
      .then(() => {
        history.push("/user");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body className="bg-light rounded">
          <h2 className="text-center mb-4 text-secondary mt-3">Update Your Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Control
                className="bg-light text-dark"
                placeholder="Name"
                type="text"
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group id="age">
              <Form.Control
                className="bg-light text-dark"
                placeholder="Age"
                type="number"
                ref={ageRef}
              />
            </Form.Group>
            <Form.Group id="phone">
              <Form.Control
                className="bg-light text-dark"
                placeholder="Phone Number"
                type="text"
                ref={phoneRef}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Control
                className="bg-light text-dark"
                placeholder="Email"
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control
                className="bg-light text-dark"
                placeholder="Password"
                type="password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control
                className="bg-light text-dark"
                placeholder="Password Confirm"
                type="password"
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 btn btn-secondary" type="submit">
              Update
            </Button>
          </Form>
          <div className="p-2 text-center">
            <Link to="/user">Cancel</Link>
          </div>
        </Card.Body>
      </Card>
    </CenteredContainer>
  );
}
