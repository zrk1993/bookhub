var AES = require("./aes");

exports.abc = function(req, res){
	var plain = '{uname:"test", passcode:"8578df715a8cec409d13a8e8b863a943"}';
	var sec = AES.encryping(plain);
	Log.trace(sec);
	var aa = AES.decrString(sec);
	Log.trace(aa);
	res.send({code: 200});
}


var plain = '{uname:"test", passcode:"8578df715a8cec409d13a8e8b863a943"}';
var sec = AES.encryping(plain);
console.log(sec)

