package view;

import static_functions.ComparaisonString;

public class Case {
    /* Largeur et auteur d'une case */
    protected int width = 20, height = 20;
    
    /* Position dans le plateau */
    protected int x, y;
    
    /* Etat de la case (bombe (b), drapeau (d), chiffre (1-8), question (q) vide (v)) */
    protected char etat;
    
    /* Liste exaustive des etats possibles */
    private final char listeEtats[] 
            = {'b', 'd', '1', '2','3', '4', '5', '6','7', '8', 'q', 'v'};

    /**
     * Constructeur de case, si l'état n'est pas valide, est initié à vide.
     * @param etat Etat de la case (b,d,1-8,q,v)
     */
    public Case(int x, int y, char etat) {
        if(ComparaisonString.charParmisTab(etat, listeEtats))
            this.etat = etat;
        else
            this.etat = 'v';
    }

    /**
     * Constructeur par défaut : Case vide
     */
    public Case(int x, int y) {
        this.x = x;
        this.y = y;
        etat = 'v';
    }
    
    public Case[] getVoisins() {
        Case c[] = {new Case(1, 1, 'v')};
        return c;
    }
    
    
    
    
    
}
