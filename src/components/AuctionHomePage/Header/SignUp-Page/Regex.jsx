export const validFirstName = new RegExp("[a-zA-Z]");

export const validLastName = new RegExp("/^[a-zA-Z]+$/");

export const validEmail = new RegExp("[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail|hotmail|yahoo|techouts)[.com]");

export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validPhoneNumber = new RegExp("[0][1-9]\d{9}$|^[1-9]\d{9}$");

