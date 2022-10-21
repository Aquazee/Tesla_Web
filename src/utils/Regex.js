const nameReg = /^[a-zA-Z]{2,10}$/;
const emailReg = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
const mobileReg = /^\(?\d{3}\)?[.-]?\d{3}[.-]?\d{3}[.-]?\d{4}$/;

export default { nameReg, emailReg, mobileReg };
