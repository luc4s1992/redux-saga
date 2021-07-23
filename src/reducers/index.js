import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';

export function rootReducer(state = {}, { type, payload }) {
  switch (type) {
    case "fetch":
      return state;
    
    case "fetchSuccess":
      return {...state, data: payload}

    default:
      return state
    }
}

function fetchFailed(err) {
  console.log(err)
}

function fetchSuccess(res) {
  return {
    type: "fetchSuccess",
    payload: res
  }
}

export function* fetchRequest(action) {
  try {
    const response = yield call(request, {url: '/fetch', method: 'POST', payload: {id: action.payload}})

    yield put(fetchSuccess(response.data))

  } catch(error) {
    yield put(fetchFailed(error))
  }
}

export default function* fetchSaga() {
  yield takeLatest("fetch", fetchRequest)
}