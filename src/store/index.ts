/*
 * @Author: zhaohui
 * @Date: 2020-11-11 10:08:36
 * @LastEditTime: 2021-03-19 15:09:40
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /web/src/store/index.ts
 */
// import { createStore, applyMiddleware, compose } from 'redux'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer
)
export default store;