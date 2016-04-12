function Case(num) {
	this.type = type_vide;
	this.clic = false;

	this.setType = function(type) {
		this.type = type;
	}

	this.getType = function() {
		return this.type;
	}
}

/**
* Retourne le numéro de case en fonction de son ID
**/
function getNumCase(IDCase) {
	return parseInt(IDCase.substr(4, IDCase.length));
}