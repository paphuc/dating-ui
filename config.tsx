import { IConfig } from "./src/interfaces";
let config: IConfig = {
  Host: process.env.REACT_APP_HOST || "http://192.168.1.3",
  Port: process.env.REACT_APP_PORT || "8080",
};
export default config;
