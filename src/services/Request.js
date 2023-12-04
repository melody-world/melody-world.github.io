import axios from "axios";

const request = axios.create({
  baseURL: "https://codedream.co.kr",
});

export default request;
