var tableauSauvegarde;

function saveCookie() {
	var chaine = "";
	var inputs = $("#option input");
	inputs = inputs.toArray();
	for(i=0; i<inputs.length; i++) {
		chaine = chaine+inputs[i].id+"="+inputs[i].value+";";
	}
	setCookie("option", chaine);
}

function loadCookie() {
	chaine = getCookie("option");
	if(chaine == null) return;

	chaine = chaine.split(';');
	for(i=0; i<chaine.length; i++) {
		chaine[i] = chaine[i].split('=');
	}
	tableauSauvegarde = chaine;
	updateOptions(chaine);
}

function updateOptions(options) {
	for(i=0; i<options.length-1; i++) { // Danger chelou -1 
		$("#"+options[i][0]).val(options[i][1]);
	}
}

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (365*24*60*60*1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function getCookie(sName) {
        var oRegex = new RegExp("(?:; )?" + sName + "=([^;]*);?");

        if (oRegex.test(document.cookie))
            return decodeURIComponent(RegExp["$1"]);
        else
			return null;
}

function getDimmenssionTableau() {
	return new Array(tableauSauvegarde[0][1], tableauSauvegarde[1][1]);
}
/*
function getDimmenssionCase() {
	return new Array(tableauSauvegarde[2][1], tableauSauvegarde[3][1]);
}
*/
function getNBMine() {
	return tableauSauvegarde[2][1];
}