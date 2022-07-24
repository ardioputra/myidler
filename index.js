const steamUser = require('steam-user');
const steamTotp = require('steam-totp');


var username = '';
var password = '';
var shared_secret = '';

var games = [730, 440, 570, 1172470, 218620, 50300, 271590,
	1091500, 1085660];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});