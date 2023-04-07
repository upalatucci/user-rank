import { writable } from "svelte/store";

const storedUsers = localStorage.users ? JSON.parse(localStorage.users) : []
const users = writable(storedUsers); 

users.subscribe(value => localStorage.users = JSON.stringify(value))

export { users };
