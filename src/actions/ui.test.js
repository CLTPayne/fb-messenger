import {
  toggleMessageDetail,
  TOGGLE_MESSAGE_DETAIL,
} from './ui'

describe('Thread action', () => {
  it(`should return an object with type 'TOGGLE_MESSAGE_DETAIL'`, () => {
    expect(toggleMessageDetail().type).toEqual('TOGGLE_MESSAGE_DETAIL')
  })
})
