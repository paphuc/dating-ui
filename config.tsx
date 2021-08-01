import { IConfig } from './src/interfaces'
let config: IConfig = {
  // Host: process.env.REACT_APP_HOST || 'https://dating-tma.herokuapp.com',
  // Port: process.env.REACT_APP_PORT || '443',
  // WS: process.env.REACT_APP_WS || 'wss://dating-tma.herokuapp.com',
  Host: process.env.REACT_APP_HOST || 'http://192.168.1.172',
  Port: process.env.REACT_APP_PORT || '8080',
  WS: process.env.REACT_APP_WS || 'ws://192.168.1.172',
}
export default config
