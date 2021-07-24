import axios from "axios";

var mysql = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});

var jsonPlaceholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-type": "application/json"
    }
});

export {
    mysql,
    jsonPlaceholder
}