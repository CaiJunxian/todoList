/**
 * Created by sysu_ on 2017/6/28.
 */

import {STORAGE_KEY} from './mutations'
import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
