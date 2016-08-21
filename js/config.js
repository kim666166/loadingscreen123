/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/touhou01.jpg",
	"backgrounds/images/touhou02.jpg",
	"backgrounds/images/touhou03.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "182TRJq9Zt8", name: "Sam Smith - Leave Your Lover "},
	{youtube: "Av9_dFkTOsc", name: "CODY SIMPSON - Summertime Of Our Lives"},
	{youtube: "Yqtoz4Sw_40", name: "Jamie N Commons - Karma"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 100;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"장난으로 하는것이 아닙니다. 진지해지세요.",
"우리 착한 부대원들이 당신을 반겨줄 겁니다!!",
"이노래가 무엇인지 궁금하시다구요? 그럼 좌측 하단을 보세요!!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;