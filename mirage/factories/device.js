import Factory from './Factory';
import faker from 'faker';

const Device = new Factory('config', {
  name: faker.name.firstName,
  ssid: faker.company.companyName,
})

export default Device;