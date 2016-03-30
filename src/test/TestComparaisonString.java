/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;
import static_functions.ComparaisonString;

/**
 *
 * @author AifeDesPaix
 */
public class TestComparaisonString {
    public static void main(String[] args) {
        char c = 'e';
        char tab[] = {'a', '3', 'f'};
        char tab2[] = {'a', '3', 'e'};
        System.out.println(ComparaisonString.charParmisTab(c, tab));
        System.out.println(ComparaisonString.charParmisTab(c, tab2));
    }
}
