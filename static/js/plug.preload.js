function _PreLoadImg(b, e,fnEach) {
  var c = 0,
    a = {},
    d = 0;
  for (src in b) {
    d++;
  }
  for (src in b) {
    loadImg(src);
    function loadImg(src){
      var strSrc = src;
      a[strSrc] = new Image();
      a[strSrc].onload = function() {
        fnEach&&fnEach(b[strSrc]);
        if (++c >= d) {
          e(a);
        }
      };
      a[strSrc].src = b[strSrc];
    }
  }
}
