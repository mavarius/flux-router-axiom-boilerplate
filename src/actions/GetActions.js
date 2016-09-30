import API from '../API'
import AppDispatcher from '../AppDispatcher'

const GetActions = {
  getPrimary(variable) {
    API.getPrimary(variable);
  },

  getSecondary(variable) {
    API.getSecondary(variable);
  },

  clearSearch() {
    AppDispatcher.dispatch({
      type: 'CLEAR_SEARCH'
    })
  }
}

export default GetActions;
