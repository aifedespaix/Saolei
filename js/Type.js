function Type(nom, id_img, id_clickson) {
	this.nom;
	this.id_img;
	this.id_clickSon;

	this.getNom = function() {
		return nom;
	}
}

var type_vide = new Type("vide", 1, 1);
var type_bombe = new Type("bombe", 2, 2);