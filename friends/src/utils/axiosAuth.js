import axios from "axios";

export const axiosAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};