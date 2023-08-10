package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.CupidToken;
import com.example.demo.domain.UserDO;
import com.example.demo.service.LoginService;
import com.example.demo.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping(value = "/api/social")
public class SocialController {

    @Autowired
    private UserService userService;

    @Autowired
    private LoginService loginService;

    @PostMapping(value = "/login")
    public CupidToken login(@RequestParam String kakaoAccessToken){
        
        log.info(kakaoAccessToken);

        UserDO user = userService.getUserDetail("alswo9853@gmail.com");

        CupidToken cupidToken = loginService.login(user);

        CupidToken a = new CupidToken();
        a.setAccessToken("test_access_token");
        a.setGrantType("Bearer");
        a.setRefreshToken("test_refresh_token");
           
        return cupidToken;

    }
    
}
