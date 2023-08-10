package com.example.demo.config;



import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.example.demo.domain.CupidToken;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenProvider {
    private final Key key;

    /**
     * @param secret
     * @Description: secret key를 base64로 decode하여 key로 사용
     */
    public JwtTokenProvider(@Value("${jwt.secret}") String secret) {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }


    /**
     * 
     * @param authentication
     * @Description: Authentication 객체를 받아서 토큰을 생성
     */
    public CupidToken generateToken(Authentication authentication) {
        String authrities = "test";
        
        long now = (new Date()).getTime();
        Date accessTokenExpiresIn = new Date(now + 86400000);
        String accessToken = Jwts.builder()
                .setSubject(authentication.getName())
                .claim("auth", authrities)
                .setIssuedAt(new Date())
                .setExpiration(accessTokenExpiresIn)
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
        
        String refreshToken = Jwts.builder()
                .setExpiration(new Date(now + 86400000))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
                
        return CupidToken.builder()
                .grantType("Bearer")
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();

    }

    public Authentication getAuthentication(String accessToken){
        Claims claims = Jwts.parser()
            .setSigningKey(key)
            .parseClaimsJws(accessToken)
            .getBody();

        if(claims.get("auth") == null){
            throw new RuntimeException("403 Unauthorized");
        }

        Collection<? extends GrantedAuthority> authorities =
            Arrays.stream(claims.get("auth")
                .toString()
                .split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
        
        //TODO: Should I return new UsernamePasswordAuthenticationToken(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(claims.getSubject(), "", authorities);

    }


    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
