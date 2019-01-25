const isMobile = /iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent.toLowerCase());
var useragent = 'desktop';
if (isMobile) {
  useragent = 'mobile';
}

console.log(useragent);

export default useragent;