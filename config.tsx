import { IConfig } from './src/interfaces'
let config: IConfig = {
  Host: process.env.REACT_APP_HOST || 'https://dating-tma.herokuapp.com',
  Port: process.env.REACT_APP_PORT || '443',
}
export default config
