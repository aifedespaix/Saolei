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
	return tabSize[0];
}

function getYTab() {
	var tabSize = getDimmenssionTableau();
	return tabSize[1];
}

function clicCase(id) {
	switch(gameTab[getNumCase(id)].getType().getNom()) {
		case 'vide':
			clicVide(id);
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

function clicVide(id) {
	var nbB = compterBombesAutour(getNumCase(id))
	if(nbB == 0) {
		$("#"+id).attr("src", "../images/cases/sansBombe.png");
	} else $("#"+id).attr("src", "../images/cases/"+nbB+"bombe.png");

	$("#affNbPts").html(parseInt($("#affNbPts").html())+1);
}

function compterBombesAutour(numCase) {
	var nbBombes = 0;
	if(numCase == 0) { // Coin haut gauche
		if( isCaseBomb(parseInt(numCase)+1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())+1) ) nbBombes++;
	} else if(numCase == parseInt(getXTab())-1) { // Coin haut Droite
		if( isCaseBomb(parseInt(numCase)-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())-1) ) nbBombes++;
	} else if(numCase == parseInt(getXTab()*getYTab())-1) {  // Coin bas droite
		if( isCaseBomb(parseInt(numCase)-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())-1) ) nbBombes++;
	} else if(numCase == parseInt(getXTab()*(getYTab()-1))) {  // Coin bas gauche
		if( isCaseBomb(parseInt(numCase)+1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())+1) ) nbBombes++;
	} else if(numCase < parseInt(getXTab())) {  // Haut
		if( isCaseBomb(parseInt(numCase)+1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())+1) ) nbBombes++;
	} else if(numCase > getXTab()*(getYTab()-1)) {  // bas
		if( isCaseBomb(parseInt(numCase)+1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())+1) ) nbBombes++;
	} else if(numCase%getXTab() == 0) {  // Gauche
		if( isCaseBomb(parseInt(numCase)+1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab()))) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab()))+1) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab()))) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())+1)) nbBombes++;
	} else if((parseInt(numCase)+1)%getXTab() == 0) {  // Droite
		if( isCaseBomb(parseInt(numCase)-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab()))) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab()))-1) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab()))) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())-1)) nbBombes++;
	} else {
		if( isCaseBomb(parseInt(numCase)-1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+1) ) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab()))) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())-1)) nbBombes++;
		if( isCaseBomb(parseInt(numCase)-parseInt(getXTab())+1)) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab()))) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())-1)) nbBombes++;
		if( isCaseBomb(parseInt(numCase)+parseInt(getXTab())+1)) nbBombes++;
	}
	return nbBombes;
}

function getNomTypeCase(numCase) {
	return gameTab[numCase].getType().getNom();
}

function isCaseBomb(numCase) {
	return getNomTypeCase(numCase) == 'bombe';
}

function clicDroitCase(id) {
	var urlImg = $("#"+id).attr("src");
	if(parseInt($("#affNbDrap").html()) == 0) alert("Vous n'avez plus de drapeaux à poser");
	else if(urlImg.substr(urlImg.length-8, urlImg.length) == "vide.png") {
		$("#"+id).attr("src", "../images/cases/danger.png");
		$("#affNbDrap").html(parseInt($("#affNbDrap").html())-1);
	} else if(urlImg.substr(urlImg.length-9, urlImg.length) == "danger.png") {
		$("#"+id).attr("src", "../images/cases/vide.png");
		$("#affNbDrap").html(parseInt($("#affNbDrap").html())+1);
	}

}

var duree;
function timer() {
	$("#tempsEcoule").html(duree++);
}