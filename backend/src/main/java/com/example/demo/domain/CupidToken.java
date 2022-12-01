package com.example.demo.domain;


import lombok.Data;

@Data
public class CupidToken {
    private String accessToken;
    private String refreshToken;
    private String grantType;
    
}
