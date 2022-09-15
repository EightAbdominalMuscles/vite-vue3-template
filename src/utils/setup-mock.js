import debug from './env'

export default ({ mock, setup }) => {
  if (mock !== false && debug) setup()
}
/**
 * 成功响应封装
 * @param {*} data
 * @returns
 */
export const successResponseWrap = (data) => {
  console.log('mock', {
    ...data,
    status: 'ok',
    msg: '操作成功',
    code: 200
  })
  return {
    ...data,
    status: 'ok',
    msg: '操作成功',
    code: 200
  }
}
/**
 * 失败响应封装
 * @param {*} data
 * @returns
 */
export const failResponseWrap = (data, msg, code = 500) => {
  console.log('mock', {
    ...data,
    status: 'fail',
    msg,
    code
  })
  return {
    ...data,
    status: 'fail',
    msg,
    code
  }
}
