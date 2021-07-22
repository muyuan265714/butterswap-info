const log = {}

/**
 * @description Returns the color value of this style
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = 'default') {
  let color = ''
  switch (type) {
    case 'default':
      color = '#35495E'
      break
    case 'primary':
      color = '#3488ff'
      break
    case 'success':
      color = '#43B883'
      break
    case 'warning':
      color = '#e6a23c'
      break
    case 'danger':
      color = '#f56c6c'
      break
    default:
      break
  }
  return color
}

/**
 * @description Print a [Title | Text] style information
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} type style
 */
log.capsule = function (title, info, type = 'primary') {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
    `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
    'background:transparent'
  )
}

/**
 * @description Print color text
 */
log.colorful = function (textArr) {
  console.log(`%c${textArr.map(t => t.text || '').join('%c')}`, ...textArr.map(t => `color: ${typeColor(t.type)};`))
}

/**
 * @description Print the text of the Default style
 */
log.default = function (text) {
  log.colorful([{ text }])
}

/**
 * @description Print the text of the Primary style
 */
log.primary = function (text) {
  log.colorful([{ text, type: 'primary' }])
}

/**
 * @description Print the text of the Success style
 */
log.success = function (text) {
  log.colorful([{ text, type: 'success' }])
}

/**
 * @description Print the text of Warning style
 */
log.warning = function (text) {
  log.colorful([{ text, type: 'warning' }])
}

/**
 * @description Print the text of Danger style
 */
log.danger = function (text) {
  log.colorful([{ text, type: 'danger' }])
}

export default log
