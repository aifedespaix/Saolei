$(function() {
	$("html").hide();
	// Chargement menu principal
	modeMenuPrincipal();

	// Charge les animations écouteurs
	animMenuPrincipal();
	animOption();

	// Charge les écouteurs
	ecouteursMenuPrincipal();
	ecouteursOption();
});

$(document).ready(function() {
	$("html").show();  
});


// Annimations 
function animMenuPrincipal() {
	$("#bouttonJouer").mouseover(function(obj) {
		$("#bouttonJouer").attr("src", "../images/jouerHover.png")
	});

	$("#bouttonJouer").mouseout(function(obj) {
		$("#bouttonJouer").attr("src", "../images/jouer.png");
	});
}

function animOption() {
	$("#bouttonValiderOption").mouseover(function(obj) {
		$("#bouttonValiderOption").attr("src", "../images/bouttonValider.png")
	});

	$("#bouttonValiderOption").mouseout(function(obj) {
		$("#bouttonValiderOption").attr("src", "../images/bouttonValider1.png");
	});

	$("#bouttonAnnulerOption").mouseover(function(obj) {
		$("#bouttonAnnulerOption").attr("src", "../images/bouttonAnnulerHover.png")
	});

	$("#bouttonAnnulerOption").mouseout(function(obj) {
		$("#bouttonAnnulerOption").attr("src", "../images/bouttonAnnuler.png");
	});
}


// Ecouteurs
function ecouteursMenuPrincipal() {
	$("#bouttonJouer").click(function() {
		modeJouer();
	});
	$("#bouttonOption").click(function() {
		modeOption();
	});
}

function ecouteursOption() {
	$("#bouttonAnnulerOption").click(function() {
		modeMenuPrincipal();
	});
	$("#bouttonValiderOption").click(function() {
		modeMenuPrincipal();
	});
}


// Modes (switch mode)
function modeMenuPrincipal() {
	$("#option").hide();
	$("#jeu").hide();
	$("#menuPrincipal").show();
}

function modeOption() {
	$("#menuPrincipal").hide();
	$("#jeu").hide();
	$("#option").show();
}

function modeJouer() {
	$("#menuPrincipal").hide();
	$("#option").hide();
	$("#jeu").show();
}