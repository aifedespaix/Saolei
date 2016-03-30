/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package static_functions;

/**
 *
 * @author AifeDesPaix
 */
public class ComparaisonString {
    
    /**
     * Vérifie si le caractère se trouve dans le tableau de charactères
     * @param c Charactère à comparer
     * @param tab Tableau de comparaison
     * @return True si le le caractère est présent
     */
    public static boolean charParmisTab(char c, char[] tab) {
        for(int $i=0; $i<tab.length; $i++)
            if(c == tab[$i]) return true;
        return false;
    }
}
