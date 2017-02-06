import { a } from '../actions';

/**
 * The initial object
 * @type {Object}
 * @property {String}  name          The name of the device
 * @property {String}  ssid          The provided ssid
 * @property {Boolean} isConfiguring Does the device have stored config on it?
 * @property {Boolean} isConnected   Is there a connection to the device?
 */
const init = {};

export function reducer(state = init, action) {
  switch(action.type) {
    case a.FETCH_CONFIG_RES:
      const isConfiguring = !(action.payload.name && action.payload.ssid);
      return { ...state, ...action.payload, isConfiguring, isConnected: true };
    case a.FETCH_CONFIG_TIMEOUT:
      return { ...state, isConfiguring: false, isConnected: false };
    case a.CONFIGURE_DEVICE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}