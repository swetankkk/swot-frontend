import axios from "axios";
import Config from "../config.json";

export const loginUser = async (email, password) => {
	try {
		console.log("Config :", Config.BACKEND_URL + `/v1/auth/login`);
		const res = await axios({
			method: "POST",
			url: Config.BACKEND_URL + `/v1/auth/login`,
			data: {
				email: email,
				password: password,
			},
		});
		console.log("Response from Login :", res);
		if (res.data.status === "success") {
			alert("Logged in successfully!");
			/*window.setTimeout(() => {
				location.assign("/");
			}, 1500);*/
		}
	} catch (err) {
		alert(err.response.data.message);
	}
};
//http://localhost:4000
//Config.BACKEND_URL
//http://localhost:4000/api/v1/users/login
