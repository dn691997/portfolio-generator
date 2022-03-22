const inquirer = require("inquirer");

inquirer
	.prompt([{ type: "input", name: "name", message: "What is your name?" }])
	.then((answers) => console.log(answers));
// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
// 	if (err) throw err;
// 	console.log("Portfolio complete! Check out index.html to see the output");
// });

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = (profileDataArr) => {
// 	profileDataArgs.forEach((profileItem) => console.log(profileItem))}
// printProfileData(profileDataArgs)

//array
// const named = profileDataArgs[0];
// const github = profileDataArgs[1];
// different way of writing the array
// const [name, github] = profileDataArgs;
