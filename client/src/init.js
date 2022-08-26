import { getAllUsers, getSpecificUser } from './listeners/listener.js';

getAllUsers(document.getElementById('display-users'));
getSpecificUser(document.getElementById('search-user'));
