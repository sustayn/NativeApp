import makeActionCreator from '../util/makeActionCreator';

export const a = {
  // React Navigation
  NAVIGATE:             'Navigate',
  RESET:                'Reset',
  BACK:                 'Back',

  // Device
  FETCH_CONFIG_RES:     'FETCH_CONFIG_RES',
  FETCH_CONFIG_TIMEOUT: 'FETCH_CONFIG_TIMEOUT',
  CONFIGURE_DEVICE:     'CONFIGURE_DEVICE',
  SUBMIT_CONFIG:        'SUBMIT_CONFIG',

  INCREMENT:            'INCREMENT',
  DECREMENT:            'DECREMENT',
};

export const configureDevice = makeActionCreator(a.CONFIGURE_DEVICE, 'payload');
export { submitConfig } from './device';

export const increment = makeActionCreator(a.INCREMENT);
export const decrement = makeActionCreator(a.DECREMENT);
