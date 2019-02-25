const isMobile = /iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent.toLowerCase());
var useragent = 'desktop';
if (isMobile) {
  useragent = 'mobile';
}

console.log('%c'+useragent, 'background:#2ee867;color:#000');

export default useragent;