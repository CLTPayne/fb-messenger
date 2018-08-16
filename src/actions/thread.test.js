import {
  receiveThread,
  RECEIVE_THREAD,
} from './thread'

describe('Thread action', () => {
  // 1- pair up and discuss which 'it' statement you are going to write to describe the test case
  it(`should return an object with type 'RECEIVE_THREAD'`, () => {
      //2- Write a test for the function receiveThread
    expect(receiveThread({msg: 'hi'}).type).toEqual('RECEIVE_THREAD')
  })
  it(`should return an object with the same thread it was passed`, () => {
    const exampleThread = [{msg: 'Hello'}]
    expect(receiveThread(exampleThread).thread).toEqual(exampleThread)
  })
})
