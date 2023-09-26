var msg = decodeURIComponent('%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%AF%B7%E6%A3%80%E6%9F%A5%E7%BD%91%E7%BB%9C%E6%88%96%E6%9B%B4%E6%8D%A2%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AF%95%E8%AF%95%EF%BC%81')
function updateMsg (bEl) {
  if (bEl) {
    if (bEl.textContent !== msg) {
      bEl.innerHTML = '<h1 style="text-align: center;width: 100%;padding: 2em;">' + msg + '</h1>'
    }
  }
}

var adDelay = 6000
var adTimeout = null
function checkAd () {
  var warpperEl = document.querySelector('.pagead-right');
  var bEl = document.querySelector('.page-container');
  var wwDiv = document.querySelector('.pagead-right .wwads-cn');
  var wwImgEl = document.querySelector('.pagead-right .wwads-img');
  if (!warpperEl) {
    updateMsg(bEl)
    return
  }
  if (!wwDiv) {
    updateMsg(bEl)
    return
  }
  if (!wwImgEl) {
    updateMsg(bEl)
    return
  }
  if (wwDiv && wwImgEl) {
    clearTimeout(adTimeout)
  } else {
    adDelay += 200
    adTimeout = setTimeout(checkAd, adDelay)
  }
}
adTimeout = setTimeout(checkAd, adDelay)

var hdDelay = 10000
var hdTimeout = null
function checkHide () {
  var bEl = document.querySelector('.page-container');
  var warpperEl = document.querySelector('.pagead-right');
  var wwDiv = document.querySelector('.pagead-right .wwads-cn');
  if (warpperEl) {
    warpperEl.style = 'position: fixed !important;right: 20px !important;top: 50px !important;width: 280px !important;padding: 0 !important;margin: 0 !important;z-index: 999999 !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;'
  } else {
    updateMsg(bEl)
    return
  }
  if (wwDiv) {
    wwDiv.style = "max-width: 180px !important;margin: 20px auto 0 auto !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;"
  } else {
    updateMsg(bEl)
    return
  }
  hdTimeout = setTimeout(checkHide, hdDelay)
}
hdTimeout = setTimeout(checkHide, hdDelay)