
package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.domain.FCMToken;
import com.example.demo.domain.ResultDO;
import com.example.demo.mybatis.FCMTokenMapper;
import com.example.demo.mybatis.UserMapper;

@Service
public class FCMService {

    @Autowired
    private FCMTokenMapper fcmTokenMapper;

    @Autowired
    private UserMapper userMapper;

    // @Autowired
    // private FirebaseCloudMessageService firebaseCloudMessageService;

    public List<FCMToken> getFCMTokenList(FCMToken fcmToken) {
        return fcmTokenMapper.getFCMTokenList(fcmToken);
    }

    public ResultDO addFCMToken(FCMToken fcmToken) {

        ResultDO result = new ResultDO();

        /* 사용자가 없는 경우 */
        // if (userMapper.isUserExisting(fcmToken.getEmail()) == 0) {
        //     result.setResultCode(404);
        //     result.setErrorMsg("USER NOT FOUND");
        //     result.setResultMsg("");

        //     return result;
        // }

        fcmTokenMapper.addFCMToken(fcmToken);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("ADDED");

        return result;
    }

    public ResultDO deleteFCMToken(FCMToken fcmToken) {
        ResultDO result = new ResultDO();

        /* email이 없는 경우 */
        if (isEmail(fcmToken.getEmail()) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("EMAIL NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* token이 없는 경우 */
        if (isToken(fcmToken.getToken()) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("TOKEN NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        fcmTokenMapper.deleteFCMToken(fcmToken);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("DELETED");

        return result;
    }

    public int isEmail(String email) {
        return fcmTokenMapper.isEmail(email);
    }

    public int isToken(String token) {
        return fcmTokenMapper.isToken(token);
    }
}