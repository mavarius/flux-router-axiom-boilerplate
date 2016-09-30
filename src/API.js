import { get } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getPrimary(variable) {
    get(`url${variable}`)
      .then(response => {
        console.log('Primary response: ', response);
        let { primaryResponseData } = response;

        ServerActions.receivePrimary(primaryResponseData);
      })
      .catch(console.error)
  },

  getSecondary(variable) {
    get(`url${variable}`)
      .then(response => {
        console.log('Secondary response: ', response);
        let { secondaryResponseData } = response;

        ServerActions.receiveSecondary(secondaryResponseData);
      })
      .catch(console.error)
  }
}

export default API;
