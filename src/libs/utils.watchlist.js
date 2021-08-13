const watchlist = {}

watchlist.setWatch = function (watchToken = {}, type = 'token') {
  let watchList
  try {
    watchList = JSON.parse(localStorage.getItem(type)) || []
  } catch (err) {
    watchList = []
  }
  watchList.push(watchToken)
  localStorage.setItem(type, JSON.stringify(watchList))
}

watchlist.delWatch = function (watchToken = {}, type = 'token') {
  let watchList
  try {
    watchList = JSON.parse(localStorage.getItem(type)) || []
  } catch (err) {
    watchList = []
  }
  watchList.splice(watchList.findIndex(item => item.token == watchToken), 1)
  localStorage.setItem(type, JSON.stringify(watchList))
}

watchlist.getWatch = function (type = 'token') {
  try {
    return JSON.parse(localStorage.getItem(type))
  } catch (err) {
    return []
  }
}
watchlist.whetherToWatch = function (token, type = 'token') {
  let wl = localStorage.getItem(type)
  return wl.indexOf(`"${token}"`) != -1
}

export default watchlist
