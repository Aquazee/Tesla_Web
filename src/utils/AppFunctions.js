const AppFunctions = {};

AppFunctions.getStoredUserDetails = () => JSON.parse(localStorage.getItem('user'));

export default AppFunctions;
