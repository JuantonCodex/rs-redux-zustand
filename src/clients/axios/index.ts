import axios from "axios";
import { videoEndpoint } from "../../api/constants";
import { getGlobalConfiguration } from "../../configuration/global";

export const axiosClient = () => {
  return axios.create({
    baseURL: videoEndpoint,
    timeout: 3000,
    params: {
      key: getGlobalConfiguration().google.API_KEY,
    },
    headers: {
      Accept: "application/json",
    },
  });
};
