import { IConfig } from './src/interfaces'
let config: IConfig = {
  Host: process.env.REACT_APP_HOST || 'https://dating-tma.herokuapp.com',
  Port: process.env.REACT_APP_PORT || '443',
  WS: process.env.REACT_APP_WS || 'wss://dating-tma.herokuapp.com',
  BigRoomID: process.env.REACT_APP_ROOMID || '000000000000000000000000',
}
export default config
