package com.example.demo.service;

import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

public class KakaoService {
   
    public void test(String accessToken){
        String requestURL = "https://kapi.kakao.com/v2/user/me";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "Bearer "+ accessToken);
        
    }
}
