package view;

public class TableauJeu {
    Case jeu[][];

    public TableauJeu() {
        jeu = new Case[30][30];
    }
    
    public TableauJeu(int x, int y) {
        jeu = new Case[x][y];
    }
    
    
    
}
