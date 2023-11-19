import axios from "axios";

const request = axios.create({
	baseURL: "https://merry-eddy.co.kr"
});

export default request;