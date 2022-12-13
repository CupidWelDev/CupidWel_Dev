package com.example.demo.config;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FireBaseConfig {
    @PostConstruct
    public void init() {
        /* firebase project에서 비공개 키 생성 후 source path 입력해주기 */
        
        try{
            FileInputStream serviceAccount = 
            	new FileInputStream("src/main/resources/serviceAccountKey.json");
            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
            FirebaseApp.initializeApp(options);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
