import axios from "axios";
import { endpoint } from "../../api/constants";

export const axiosClient = () => {
  return axios.create({
    baseURL: endpoint,
    timeout: 1000,
    headers: {
      Accept: "application/json",
    },
  });
};
