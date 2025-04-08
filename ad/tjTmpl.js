var _hmt = _hmt || [];
(function() {
  var hmId = ''
  var hostname = location.hostname
  if (hostname.indexOf('vxetable.cn') > -1) {
    hmId = '1eb3cea61a6e722c5e3dd0114830306c'
  } else if (hostname.indexOf('vxeui.com') > -1) {
    hmId = 'd7f93b6aca1d7ac7711f6c21b897a62c'
  }
  if (hmId) {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + hmId;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }
})()