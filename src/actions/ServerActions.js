import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receivePrimary(primaryResponseData) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PRIMARY',
      payload: { primaryData: primaryResponseData.key }
    })
  },

  receiveSecondary(secondaryResponseData) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SECONDARY',
      payload: { secondaryData: secondaryResponseData.key }
    })
  }
}

export default ServerActions;
