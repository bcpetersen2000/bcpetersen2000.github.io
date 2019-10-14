var database = [
{
	username: "andrei",
	password: "secret"
}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning."
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo cooolll!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function singIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password)	 {
		console.log(newfeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);