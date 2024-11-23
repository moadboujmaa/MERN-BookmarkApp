import { User } from "../Models/user.model.js";

export const signup = async (req, res) => {
	const { username, email, password } = req.body;

	console.log(username, email, password);
	const user = new User({
		username,
		email,
		password
	})
	await user.save();
	res.send("Hello this is signup");
}

export const login = (req, res) => {
	const { email, password } = req.body;

	console.log(email, password);
	res.send("Hello this is login");
}

