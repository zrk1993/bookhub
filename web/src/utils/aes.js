let CryptoJS = require('crypto-js');
//import qs from 'qs'
exports.data = function() {
  return {
    key: CryptoJS.enc.Utf8.parse('iFuckUfdf0io@#$*'),
    iv: CryptoJS.enc.Utf8.parse('5a8cec409d13a8e8')
  }
};

/**
 * 加密
 * @param {*} data 
 */
exports.encryping =  function (data) {
  var kk = CryptoJS.enc.Utf8.parse('iFuckUfdf0io@#$*')
  var kiv = CryptoJS.enc.Utf8.parse('5a8cec409d13a8e8')
  var srcs = CryptoJS.enc.Utf8.parse(data)
  var content = CryptoJS.AES.encrypt(srcs, kk, {iv: kiv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding})
  // console.log('--AAA',encodeURI(content))
  return encodeURI(content)
  // return 'bQM1ZoKQ2OS2dW3GvP3bttqBIBNIF1v7FI1/tyIXK4RC3Tf0WfNX2iDRwr/1se1m'
};

/**
 * 解析后转为JSON
 * @param {*} encrypted 
 */
exports.decrypting = function(encrypted) {
  var kk = CryptoJS.enc.Utf8.parse('iFuckUfdf0io@#$*')
  var kiv = CryptoJS.enc.Utf8.parse('5a8cec409d13a8e8')
  // console.log('--1',encrypted)
  var decrypt = CryptoJS.AES.decrypt(encrypted, kk, {iv: kiv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding})
  // console.log('--2',decrypt)
  var re = CryptoJS.enc.Utf8.stringify(decrypt).toString();
  //console.log('--3',re)
  //re =  re.replace(/\0/g,"")
  return JSON.parse(re);
};

/**
 * 解析成字符串
 * @param {*} encrypted 
 */
exports.decrString = function(encrypted) {
  var kk = CryptoJS.enc.Utf8.parse('iFuckUfdf0io@#$*')
  var kiv = CryptoJS.enc.Utf8.parse('5a8cec409d13a8e8')
  // console.log('--1',encrypted)
  var decrypt = CryptoJS.AES.decrypt(encrypted, kk, {iv: kiv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding})
  // console.log('--2',decrypt)
  var re = CryptoJS.enc.Utf8.stringify(decrypt).toString();
  //console.log('--3',re)
  //re =  re.replace(/\0/g,"")
  return re;
};
