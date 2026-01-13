setTimeout(function () {
  var siteURL = ''
  var siteType = ''
  var hostname = location.hostname
  var uiDomain = 'vxeui.com'
  var tableDomain = 'vxetable.cn'
  if (hostname.indexOf(tableDomain) > -1) {
    siteURL = 'https://' + tableDomain
    siteType = 'vxetable'
  } else if (hostname.indexOf(uiDomain) > -1) {
    siteURL = 'https://' + uiDomain
    siteType = 'vxeui'
  }

  if (siteType) {
    var isZH = true
    try {
      var isZH = ['zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'].includes(localStorage.getItem('VXE_DOCS_LANGUAGE') || navigator.language)
    } catch(e){}

    var joinSponsorUrl = siteURL + '/#/start/joinSponsor'

    fetch('https://api.vxeui.com/storeapi/api/pub/' + siteType + '/sponsors', { method: 'GET' })
      .then(response => response.json())
      .then(rest => {
        var data = []
        try {
          data = JSON.parse(decodeURIComponent(atob(rest.result.join(''))))
        } catch (e) {}
        var sponsorEl = document.getElementById('{VXE_AD_SPONSOR_ID}')
        sponsorEl.style = 'display: block !important;'
        if (data && sponsorEl) {
          if (data.length < 5) {
            data.push(null)
          }
          sponsorEl.innerHTML = [
            '<div style="display: block !important;padding:4px 0 8px 0 !important;font-size: 14px !important;">',
            isZH ? '赞助商' : 'SPONSORS',
            '</div>',
            '<div style="display: block !important;">',
            data.map(function (item) {
              var height = item.height || '100px'
              var width = item.width || '200px'
              if (item) {
                var style = Object.assign({}, item.style)
                if (item.img) {
                  return [
                    '<a href="' + (item ? item.url : '') + '" style="display: block !important;margin:8px 0 !important;width:' + width + ' !important;max-height:' + height + ' !important;text-align: center !important;border-radius: 2px !important;cursor: pointer !important;' + (style.a || '') + '" target="_blank">',
                      '<img src="' + item.img + '" alt="" style="display: inline-block !important;max-width:100% !important;max-height:100% !important;vertical-align: middle !important;' + (style.img || '') + '">',
                    '</a>'
                  ].join('')
                }
                return [
                  '<a href="' + (item ? item.url : '') + '" style="display: block !important;margin:8px 0 !important;width:' + width + ' !important;max-height:' + height + ' !important;text-align: center !important;border-radius: 2px !important;cursor: pointer !important;' + (style.a || '') + '" target="_blank">',
                    '<span style="display: block !important;font-size: 15px !important;' + (style.span || '') + '">', 
                      item.title || '', 
                    '</span>',
                  '</a>'
                ].join('')
              }
              return [
                '<a href="' + joinSponsorUrl + '" style="display: block !important;margin:8px 0 !important;width:' + width + ' !important;max-height:' + height + ' !important;text-align: center !important;background-color: var(--vxe-ui-status-info-tinge-color, rgba(0, 0, 0, 0.05)) !important;border-radius: 2px !important;cursor: pointer !important;" >',
                  '<span style="display: block !important;font-size: 13px !important;padding: 8px 0 !important;">', 
                    isZH ? '点击成为赞助商' : 'Click become a Sponsor', 
                  '</span>',
                '</a>'
              ].join('')
            }).join(''),
            '</div>'
          ].join('')
        }
      })
  }
}, Math.min(3000, 300 + Math.ceil(Math.random() * 1000)))