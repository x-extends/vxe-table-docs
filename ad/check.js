var msg = decodeURIComponent(['%E5%', 'BD%93%E', '5%89', '%8D%E', '7%8E%A', 'F%E5%', 'A2%83', '%E4%B8', '%8D%E6%9', '4%AF', '%E6%8C', '%81%', 'E8%AE', '%BF%E9%', '97%A', 'E%EF%', 'BC%8C', '%E5', '%BB%', 'BA%E8', '%AE%AE', '%E6', '%9B%', 'B4%E', '6%8', 'D%A', '2%E6%B', '5%8F%', 'E8', '%A7%8', '8%E5%', '99%', 'A8%', 'E8%AF%', '95%E', '8%AF', '%95%EF', '%BC%81'].join(''))
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