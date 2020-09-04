import axios from "axios";
import authHeader from "./services/auth-header";

export default axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-type": "application/json",
    "Authorization": authHeader().Authorization,
  },
});
