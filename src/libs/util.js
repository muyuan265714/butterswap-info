import cookies from './util.cookies'
import log from './util.log'

const util = {
  cookies,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'ButterSwapInfo'
  window.document.title = `${titleText ? `${titleText} | ` : ''}${processTitle}`
}

export default util
