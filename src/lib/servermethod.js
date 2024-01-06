import { baseurl } from "@/config/config";
import axios from "axios";

export const serverMethod = async (endpint, params) => {
    const option = {
      method: params.method,
      url: baseurl + endpint,
      headers: {
        Authorization: params?.token && "Bearer " + params.token,
      },
      params: params?.query,
      data: params?.data,
    };
    let response;
    let error;
    try {
      response = await axios.request(option);
    } catch (e) {
      error = e.response;
  
      //  throw new Error(JSON.stringify(e.response.data));
    }
    return response?.data ? response?.data : error; // or set initial value
  };