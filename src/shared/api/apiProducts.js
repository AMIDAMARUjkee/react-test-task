import axios from 'axios';
import md5 from 'md5';

export const apiProducts = (options) => {
  //Todo: add password & api to .env file
  const password = 'Valantis';
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const authString = md5(`${password}_${timestamp}`);

  return axios
    .post('https://apis.valantis.store:41000/', options, {
      headers: {
        'X-Auth': authString,
      },
    })
    .catch((error) => {
      console.error('Error in API request:', error);
    });
};
