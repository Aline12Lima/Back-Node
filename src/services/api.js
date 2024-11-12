import axios from "axios";

export const api = axios.create({
  baseURL: "localholst:3333",
});
api.get("/users/:id");
