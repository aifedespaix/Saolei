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
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
 
public class Fenetre extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        GridPane grid = new GridPane();
        grid.setAlignment(Pos.CENTER);
        grid.setHgap(10);
        grid.setVgap(10);
        grid.setPadding(new Insets(25, 25, 25, 25));

        Label lbl = new Label("011");
        grid.add(lbl,0,1);
        Button btn = new Button("Start");
        grid.add(btn,1,1);
        Label lbl1 = new Label("014");
        grid.add(lbl1,2,1);
        
        /*btn.setOnAction(new EventHandler<ActionEvent>() {
 
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Hello World!");
            }
        });
        
        StackPane root = new StackPane();
        root.getChildren().add(btn);*/

        Scene scene = new Scene(grid, 300, 250);

        primaryStage.setTitle("Démineur");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    public void demarrer() {
        launch();
    }
}
