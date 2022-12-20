package com.example.demo.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.FCMToken;

@Mapper
public interface FCMTokenMapper {
    
    public List<FCMToken> getFCMTokenList(@Param(value = "fcmTokenInput") FCMToken fcmToken);
    public void addFCMToken(@Param(value = "fcmTokenInput") FCMToken fcmToken);
    public void deleteFCMToken(@Param(value = "fcmTokenInput") FCMToken fcmToken);
    public int isEmail(@Param(value = "email") String email);
    public int isToken(@Param(value = "token") String token);
}
