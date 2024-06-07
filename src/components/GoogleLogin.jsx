// import { GoogleLogin } from 'react-google-login';
// import { googleAuth } from "../services/api";

// function Login() {
//   const responseGoogle = (response) => {
//     console.log(response);
//     // Here you can handle the response from Google and perform actions like setting the user in your state or sending the token to your backend
//   }

//   return (
//     <div>
//       <GoogleLogin
//         clientId="687117743395-hbvmn1vdft2jloimo7o5jal7d3ct628c.apps.googleusercontent.com" // Replace with your Google Client ID
//         buttonText="Login with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../service/api";
                              

export default (props) => {
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				console.log("inresponse google" ,authResult.code);
				sessionStorage.setItem("authCode", authResult.code);
				console.log(props	)
				// const result = await googleAuth(authResult.code);
				// props.setUser(result.data.data.user);
				props.setUserToken(authResult.code);
				// console.log("result",result)
				alert("successfuly logged in");
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<button
			style={{
				padding: "10px 20px",
			}}
			onClick={googleLogin}
		>
			Sign in with Google
		</button>
	);
};