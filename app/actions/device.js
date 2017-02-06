import { a } from './index';
import Ajax from '../services/Ajax';

export function submitConfig(body) {
  return (dispatch) => {
    Ajax.post('http://192.168.4.1/config', body)
    .then(() => {
      dispatch({ type: a.CONFIGURE_DEVICE, payload: { ...body, isConfiguring: false } });
      dispatch({ type: a.BACK });
    })
    .catch((err) => {
      console.log(err);
    });
  }
}