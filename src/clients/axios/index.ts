import axios from "axios";
import { endpoint } from "../constants";

interface IAxiosClient {
  method: "GET" | "POST";
}

export const axiosClient = ({ method = "GET" }: IAxiosClient) => {
  return axios.create({
    baseURL: endpoint,
    method,
    timeout: 1000,
  });
};
