var widthWindow;

var son_boum 		= new Audio('../sons/boum.ogg');
var son_clic 		= new Audio('../sons/clic.ogg');
var son_start 		= new Audio('../sons/start.ogg');
var son_win 		= new Audio('../sons/applaudissements.ogg');
var son_drapeauOn 	= new Audio('../sons/drapeauOn.ogg');
var son_drapeauOff 	= new Audio('../sons/drapeauOff.ogg');

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
	ecouteurBouttonAudio();
	ecouteursMenuPrincipal();
	ecouteursOption();
	ecouteursOptionJeu();
	ecouteursJeu();

	// Mise en place du timer
	duree = 0;

});

$(document).ready(function() {
	$("html").show();  
});



$(window).resize(function() {
	widthWindow = $(window).width();
	$("#option").css("font-size", ((1.5/100)*widthWindow)+"px");
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

function ecouteurBouttonAudio() {
	$("#bouttonAudio").click(function() {
		mute = !mute;
		if(mute) 	$("#bouttonAudio").attr("src", "../images/audioOff.png");
		else 		$("#bouttonAudio").attr("src", "../images/audioOn.png");
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

	$("#new").click(function() {
		reinitialiserJeu();
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
