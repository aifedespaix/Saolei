package view;

public class Case {
    /* Largeur et auteur d'une case */
    int width = 20, height = 20;
    
    /* Etat de la case (bombe (b), drapeau (d), chiffre (1-8), question (q) vide (v)) */
    char etat;

    /**
     * Constructeur de case
     * @param etat Etat de la case (b,d,1-8,q,v)
     */
    public Case(char etat) {
        if(etat == 'b')
        this.etat = etat;
    }

    public Case() {
        etat = 'v';
    }
    
    
    
    
    
}
