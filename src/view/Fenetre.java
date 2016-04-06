/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

/**
 *
 * @author P1509142
 */
import java.io.File;
import javafx.application.Application;
import javafx.application.ConditionalFeature;
import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
 
public class Fenetre extends Application {
    String  title           = "Saolei - Demineur";
    int     defaultSizeWinX = 600;
    int     defaultSizeWinY = 400;
    Color   bgColor         = new Color(1, 0.4, 0.02, 1);
    
    @Override
    public void start(Stage primaryStage) {
        final WebView webView = new WebView();
        
        final String pageURI= new File("html/index.html").toURI().toString(); 
        webView.getEngine().load(pageURI);
        
        final Scene scene = new Scene(webView, defaultSizeWinX, defaultSizeWinY); 
        primaryStage.setTitle(title); 
        primaryStage.setScene(scene); 
        primaryStage.getIcons().add(new Image("file:images/bombe.png"));
        primaryStage.show(); 

    }
    
    public void demarrer() {
        if(Platform.isSupported(ConditionalFeature.WEB))
            launch();
        else System.out.println("Désolé ça marche pas");
    }
}
