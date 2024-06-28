var msg = decodeURIComponent('%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%AF%B7%E5%85%B3%E9%97%AD%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E6%8F%92%E4%BB%B6%E5%90%8E%E5%86%8D%E8%AF%95%EF%BC%81')
var readAdKey = 'VXETABLE_ADVERTISING_AGREEMENT'
var showFlag = false
function updateMsg (bEl) {
  try {
    const radv = localStorage.getItem(readAdKey)
    if (!showFlag && (!radv || radv === 'Y')) {
      showFlag = true
      if (confirm(decodeURIComponent('%E8%AF%B7%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E6%8E%A5%E5%8F%97%E8%AF%A5%E7%BD%91%E7%AB%99%E7%9A%84%E5%B9%BF%E5%91%8A%EF%BC%9F'))) {
        localStorage.setItem(readAdKey, 'Y')
        alert(decodeURIComponent('%E8%AF%B7%E5%B0%86%E5%AE%98%E7%BD%91%E5%9F%9F%E5%90%8D%E5%8A%A0%E5%85%A5%E7%9B%B8%E5%85%B3%E7%99%BD%E5%90%8D%E5%8D%95%E5%90%8E%E5%86%8D%E9%87%8D%E6%96%B0%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%EF%BC%81'))
      } else {
        localStorage.setItem(readAdKey, 'N')
      }
    }
  } catch (e) { }
  if (bEl) {
    if (bEl.textContent !== msg) {
      bEl.innerHTML = '<h1 style="text-align: center;width: 100%;padding: 2em;">' + msg + '</h1>'
    }
  }
}

var adDelay = 60000
var adTimeout = null
function checkAd () {
  var warpperEl = document.getElementById('XET_AD_202406')
  var bEl = document.querySelector('.page-container');
  var wwDiv = warpperEl.querySelector('.wwads-cn');
  var wwImgEl = warpperEl.querySelector('.wwads-img');
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

var hdDelay = 10000
var hdTimeout = null
function checkHide () {
  var bEl = document.querySelector('.page-container');
  var warpperEl = document.getElementById('XET_AD_202406');
  var wwDiv = warpperEl.querySelector('.wwads-cn');
  if (warpperEl) {
    warpperEl.style = 'position: fixed !important;right: 20px !important;top: 50px !important;width: 280px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;'
  } else {
    updateMsg(bEl)
    return
  }
  if (wwDiv) {
    wwDiv.style = "max-width: 200px !important;;visibility: visible !important;display: block !important;"
  } else {
    updateMsg(bEl)
    return
  }
  hdTimeout = setTimeout(checkHide, hdDelay)
}

// 不定期检查，周一周三周五（4点, 10点, 15点, 22点）强制检查广告拦截
if ([1, 3, 5].includes(new Date().getDay()) && [4, 10, 15, 22].includes(new Date().getHours())) {
  adTimeout = setTimeout(checkAd, adDelay)
  hdTimeout = setTimeout(checkHide, hdDelay)
}