import { getData, getUser } from '../handlers/handler.js';

export const getAllUsers = (element) => {
	element.addEventListener('click', getData);
};

export const getSpecificUser = (element) => {
	element.addEventListener('click', getUser);
};
