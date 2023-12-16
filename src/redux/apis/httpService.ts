import axios from "axios";
// import Config from "react-native-config";

const httpService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 30000,
});

export default httpService;
