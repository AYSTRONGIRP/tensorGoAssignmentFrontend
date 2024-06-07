// import { useState } from 'react'
// import './App.css'

// import { Routes, Route, Navigate } from 'react-router-dom';
// import { GoogleOAuthProvider } from "@react-oauth/google";

// import login from './components/login'

// function App() {
//   const [loggedin, setloggedin] = useState(false)

//   // const responseGoogle = (response) => {

//   return (
//     <>
//       <Routes>
//         <Route exact path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<login loggedin={loggedin} setloggedin={setloggedin}/>} />
//       </Routes>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./components/GoogleLogin";
import UserRequest from "./components/userRequest";

function App() {
	const [user, setUser] = useState();
	const [loggedin, setloggedin] = useState(false);
	const [userToken, setUserToken] = useState('');

	useEffect(() => {
		const sessionValue = sessionStorage.getItem('authCode');
		console.log(sessionValue);
		if (sessionValue) {
            setloggedin(true);
        }
	}, [userToken]);
	
	return (
		<>
			{!loggedin ? (
				<GoogleOAuthProvider clientId="687117743395-hbvmn1vdft2jloimo7o5jal7d3ct628c.apps.googleusercontent.com">
					<div className="App">
						<GoogleLogin setUser={setUser} setUserToken={setUserToken}></GoogleLogin>
						{user && user.name}
						{user && user.email}
					</div>
				</GoogleOAuthProvider>
			) : (
				// <OtherComponent />
				<UserRequest/>
			)}
		</>
	);
}

export default App;