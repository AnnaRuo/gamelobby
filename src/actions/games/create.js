import ApiClient from '../../api/client'
import {loading, showError} from '../loading'

export const CREATE_GAME = 'CREATE_GAME'

const api = new ApiClient()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    api
    .post('/games')
    .then(res => {
      dispatch({ type: CREATE_GAME, payload: res.body })
      dispatch(loading(false))
  })
    .catch(err => dispatch(showError(err)))
  }
}
