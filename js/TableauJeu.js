var tCase = 30;
var gameTab;

function jouer() {
	effacerTerrain();
	initialiserInfos();
	creerTableau();
	placerBombes();
	ecouteursJeu();
}

function effacerTerrain() {
	$("#jeuPlateau").html("");
}

function initialiserInfos() {
	duree = 0;
	$("#affNbPts").html(0);
	$("#affNbDrap").html(getNBMine);
	$("#messageFin").html("");
}

function recommencerJeu() {
	$(".caseJeu").attr("src", "../images/cases/vide.png");
	initialiserInfos();
}

function creerTableau() {
	var nbMine = getNBMine();
	var xtab = getXTab(), ytab = getYTab();

	for(i=0; i<xtab*ytab; i++) {
			$("#jeuPlateau").append("<img id=\""+idCaseJeu(i)+"\" class=\"caseJeu\" src=\"../images/cases/vide.png\" width=\""+tCase+"px\" height=\""+tCase+"px\"></div>");
	}
	rechargerTailleCases();

	gameTab = new Array(xtab*ytab);
	for(i=0; i<xtab*ytab; i++) {
		gameTab[i] = new Case(i);
	}
}

var positionBombes
function placerBombes() {
	recuperePostionBombesAlea();
	for(i=0; i<positionBombes.length; i++) {
		gameTab[positionBombes[i]].setType(type_bombe);
	}
}

function recuperePostionBombesAlea() {
	positionBombes = new Array();
	for(i=0; i<getNBMine(); i++) {
		var pos;
		do {
			pos = posAlea();
		} while(estDejaPresent(pos));
		positionBombes.push(pos);
	}
}
function estDejaPresent(pos) {
	for(i=0; i<positionBombes.length; i++)
		if(pos == (positionBombes[i])) return true;
}

function posAlea() {
	return Math.floor( (Math.random()*(getXTab()*getYTab()) ));
}

function idCaseJeu(x) {
	return "case"+x;
}

function agrandireCases() {
	if(tCase < 100) tCase += 1;
	rechargerTailleCases();
}

function reduireCases() {
	if(tCase > 21) tCase -=1;
	rechargerTailleCases();
}

function rechargerTailleCases() {
	$("#jeuPlateau").css("width", (tCase*getXTab())+"px")
	$(".caseJeu").attr("width", tCase);
	$(".caseJeu").attr("height", tCase);
}

function getXTab() {
	var tabSize = getDimmenssionTableau();
	return parseInt(tabSize[0]);
}

function getYTab() {
	var tabSize = getDimmenssionTableau();
	return parseInt(tabSize[1]);
}

function clicCase(id) {
	switch(gameTab[getNumCase(id)].getType().getNom()) {
		case 'vide':
			clicVide(getNumCase(id));
		break;
		case 'bombe':
			clicBombe(id);
		break;
	}
}

function clicBombe(id) {
	$(".caseJeu").attr("src", "../images/cases/bombe.png");
	$("#messageFin").html("Perdu !");
}

function clicVide(numCase) {
	if(numCase==null) return 0;
	if(!verifierNumCase(numCase)) return 0;
	
	var nbB = compterBombesAutour(numCase);
	if(nbB == 0) {
		changerImage(numCase, "sansBombe.png");
		//clicVide(caseHaut(numCase));
		//clicVide(caseDroite(numCase));
		//clicVide(caseBas(numCase));
		//clicVide(caseGauche(numCase));
	} else changerImage(numCase, nbB+"bombe.png");

	gagner1Point();
}

function changerImage(numCase, image) {
	$("#case"+numCase).attr("src", "../images/cases/"+image);
}

function gagner1Point() {
	$("#affNbPts").html(parseInt($("#affNbPts").html())+1);
}

function caseDroite(numCase) {
	if((numCase+1)%getXTab() != 0) 
		return (numCase+1);
}

function caseGauche(numCase) {
	if((numCase)%getXTab() != 0) 
		return (numCase-1);
}

function caseBas(numCase) {
	if(numCase+getXTab() < getXTab()*(getYTab()-1)) 
		return numCase+getXTab();
}

function caseHaut(numCase) {
	if(numCase-getXTab() >= 0) 
		return numCase-getXTab();
}

function caseHD(numCase) {
	if(caseHaut(numCase) != null && caseDroite(numCase) != null)
		return numCase-getXTab()+1;
}

function caseHG(numCase) {
	if(caseHaut(numCase) != null && caseGauche(numCase) != null)
		return numCase-getXTab()-1;
}

function caseBD(numCase) {
	if(caseBas(numCase) != null && caseDroite(numCase) != null)
		return numCase+getXTab()+1;
}

function caseBG(numCase) {
	if(caseBas(numCase) != null && caseGauche(numCase) != null)
		return numCase+getXTab()-1;
}

function verifierNumCase(numCase) {
	return(numCase >= 0 && numCase < getXTab()*getYTab());
}

function compterBombesAutour(numCase) {
	var nbBombes = 0;

	isCaseBomb(caseHaut(numCase)) 	? nbBombes++ : nbBombes;
	isCaseBomb(caseHD(numCase)) 	? nbBombes++ : nbBombes;
	isCaseBomb(caseDroite(numCase))	? nbBombes++ : nbBombes;
	isCaseBomb(caseBD(numCase))		? nbBombes++ : nbBombes;
	isCaseBomb(caseBas(numCase)) 	? nbBombes++ : nbBombes;
	isCaseBomb(caseBG(numCase))		? nbBombes++ : nbBombes;
	isCaseBomb(caseGauche(numCase))	? nbBombes++ : nbBombes;
	isCaseBomb(caseHG(numCase))		? nbBombes++ : nbBombes;

	return nbBombes;
}

function compterCasesAutour(numCase) {
	var nbCase = 0;
	caseHaut(numCase) 	!= null ? nbCase++ : nbCase;
	caseHD(numCase) 	!= null ? nbCase++ : nbCase;
	caseDroite(numCase)	!= null ? nbCase++ : nbCase;
	caseBD(numCase)		!= null ? nbCase++ : nbCase;
	caseBas(numCase) 	!= null ? nbCase++ : nbCase;
	caseBG(numCase)		!= null ? nbCase++ : nbCase;
	caseGauche(numCase)	!= null ? nbCase++ : nbCase;
	caseHG(numCase)		!= null ? nbCase++ : nbCase;
	return nbCase;
}

function getNomTypeCase(numCase) {
	return gameTab[numCase].getType().getNom();
}

function isCaseBomb(numCase) {
	if(verifierNumCase(numCase))
		return getNomTypeCase(numCase) == 'bombe';
	else
		return null;
}

function clicDroitCase(id) {
	var urlImg = $("#"+id).attr("src");
	if(urlImg.substr(urlImg.length-10, urlImg.length) == "danger.png") {
		changerImage(getNumCase(id), "vide.png");
		$("#affNbDrap").html(parseInt($("#affNbDrap").html())+1);
	} else if(parseInt($("#affNbDrap").html()) == 0) {
		alert("Vous n'avez plus de drapeaux à poser");
	} else if(urlImg.substr(urlImg.length-8, urlImg.length) == "vide.png") {
		changerImage(getNumCase(id), "danger.png");
		$("#affNbDrap").html(parseInt($("#affNbDrap").html())-1);
	} 
}

var duree;
function timer() {
	$("#tempsEcoule").html(duree++);
}

function verifierVictoire() {
	var win = true;
	var verif = $(".caseJeu");
	for(i=0; i<verif.length; i++) {
		if(verif.substr(50, 58) == "vide.png")
			return false;
	}
	return win;
}