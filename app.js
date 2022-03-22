const profileDataArgs = process.argv.slice(2);

const printProfileData = (profileDataArr) => {
	profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
