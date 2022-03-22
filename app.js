const fs = require("fs");
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), (err) => {
	if (err) throw err;
	console.log("Portfolio complete! Check out index.html to see the output");
});

// const printProfileData = (profileDataArr) => {
// 	profileDataArgs.forEach((profileItem) => console.log(profileItem))}
// printProfileData(profileDataArgs)

//array
// const named = profileDataArgs[0];
// const github = profileDataArgs[1];
