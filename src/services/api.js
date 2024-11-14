import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-node-1.onrender.com",
});
api.get("/users/:id");
