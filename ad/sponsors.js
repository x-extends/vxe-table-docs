setTimeout(function () {
  var isZH = true
  try {
    var isZH = ['zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'].includes(localStorage.getItem('VXE_DOCS_LANGUAGE') || navigator.language)
  } catch(e){}

  window.joinSponorEvent = function () {
    location.href = 'https://vxetable.cn/#/start/joinSponsor'
  }

  fetch('https://api.vxetable.cn/vxe/api/pub/vxetable/sponsors', { method: 'GET' })
    .then(response => response.json())
    .then(rest => {
      let data = []
      try {
        data = JSON.parse(decodeURIComponent(atob(rest.result.join(''))))
      } catch (e) {}
      var sponsorEl = document.querySelector('.xe-sponsor')
      sponsorEl.style = 'display: block !important;'
      if (data && sponsorEl) {
        if (data.length < 3) {
          data.push(null)
        }
        sponsorEl.innerHTML = [
          '<div style="display: block !important;padding:4px 0 8px 0 !important;font-size: 14px !important;">',
          isZH ? '赞助商' : 'SPONSORS',
          '</div>',
          '<div style="display: block !important;">',
          data.map(function (item) {
            if (item) {
              return '<a href="' + (item ? item.url : '') + '" style="display: block !important;margin:5px 0 !important;width:200px !important;height:100px !important;line-height:100px !important;text-align: center !important;background-color: rgba(0, 0, 0, 0.2) !important;border-radius: 2px !important;cursor: pointer !important;" target="_blank"><img src="' + item.img + '" alt="" style="display: inline-block !important;max-width:100% !important;max-height:100% !important;vertical-align: middle !important;"></a>'
            }
            return [
              '<a style="display: block !important;margin:5px 0 !important;width:200px !important;height:100px !important;line-height:100px !important;text-align: center !important;background-color: rgba(0, 0, 0, 0.2) !important;border-radius: 2px !important;cursor: pointer !important;" onclick="joinSponorEvent()">',
              '<span style="font-size: 13px !important;">', 
              isZH ? '成为赞助商' : 'Become a Sponsor', 
              '</span>',
              '</a>'
            ].join('')
          }).join(''),
          '</div>'
        ].join('')
      }
    })
}, Math.min(4000, 500 + Math.ceil(Math.random() * 1000)))
