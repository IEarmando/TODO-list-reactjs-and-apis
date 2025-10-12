
export const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    return response.json();
}


import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}