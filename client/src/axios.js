import axios from "axios";

export const api_url = "http://localhost:9000/";

const instance = axios.create({
  baseURL: api_url
});

export default instance;
