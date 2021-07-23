import { all, fork } from 'redux-saga/effects'
import fetchSaga from 'reducers'

export default function* rootSaga() {
  yield all([
    fork(fetchSaga)
  ])
}

