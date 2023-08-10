package com.example.demo.service;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.config.JwtTokenProvider;
import com.example.demo.domain.CupidToken;
import com.example.demo.domain.UserDO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LoginService {

    private final JwtTokenProvider jwtTokenProvider;

    /**
     * @param userDO
     * @return
     */
    @Transactional
    public CupidToken login(UserDO userDO) {
        Authentication authentication = new Authentication() {

            @Override
            public String getName() {
                // TODO Auto-generated method stub
                return userDO.getName();
            }

            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                // TODO Auto-generated method stub
                return null;
            }

            @Override
            public Object getCredentials() {
                // TODO Auto-generated method stub
                return null;
            }

            @Override
            public Object getDetails() {
                // TODO Auto-generated method stub
                return null;
            }

            @Override
            public Object getPrincipal() {
                // TODO Auto-generated method stub
                return null;
            }

            @Override
            public boolean isAuthenticated() {
                // TODO Auto-generated method stub
                return false;
            }

            @Override
            public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
                // TODO Auto-generated method stub
                
            }
            
        };
        

        return jwtTokenProvider.generateToken(authentication);
    }
}
