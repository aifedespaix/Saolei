$(function() {
	$("html").hide();
	loadCookie();
	saveCookie();
	
	// Chargement menu principal
	modeMenuPrincipal();

	// Charge les animations écouteurs
	animMenuPrincipal();
	animOption();

	// Charge les écouteurs
	ecouteursMenuPrincipal();
	ecouteursOption();
	ecouteursOptionJeu();
	ecouteursJeu();

	// Mise en place du timer
	duree = 0;
	setInterval(timer ,1000);
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
	// Désactive Clic Droit
  	document.oncontextmenu = function() {return false;};

	$("#bouttonJouer").click(function() {
		loadCookie();
		modeJouer();
		jouer();
	});

	$("#bouttonOption").click(function() {
		loadCookie();
		modeOption();
	});
}

function ecouteursOption() {
	$("#bouttonAnnulerOption").click(function() {
		loadCookie();
		modeMenuPrincipal();
	});

	$("#bouttonValiderOption").click(function() {
		saveCookie();
		modeMenuPrincipal();
	});
}

function ecouteursOptionJeu() {
	$("#btnReduireCases").click(function() {
		reduireCases();
	});

	$("#btnAgrandirCases").click(function() {
		agrandireCases();
	});

	$("#abandon").click(function() {
		modeMenuPrincipal();
	});

	$("#retry").click(function() {
		recommencerJeu();
	});
}

function ecouteursJeu() {
	$(".caseJeu").click(function() {
		clicCase(this.id);
	});

	$(".caseJeu").mousedown(function(e){ 
    if( e.button == 2 ) { 
    	clicDroitCase(this.id);
    } 
    return true; 
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