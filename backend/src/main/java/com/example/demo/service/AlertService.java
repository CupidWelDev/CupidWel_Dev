package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.AlertDO;
import com.example.demo.domain.ResultDO;
import com.example.demo.mybatis.AlertMapper;

@Service
public class AlertService {

    @Autowired
    private AlertMapper alertMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private ScholarshipService scholarshipService;
    
    public List<AlertDO> getAlertList(String userId) {
        return alertMapper.getAlertList(userId);
    }

    public ResultDO addAlert(String userId, String scholarshipId) {
        ResultDO result = new ResultDO();

        /* 동일한 알림이 이미 있는 경우 */
        if (alertMapper.isAlert(userId, scholarshipId) > 0) {
            result.setResultCode(404);
            result.setErrorMsg("ALERT ALREADY EXISTED");
            result.setResultMsg("");

            return result;
        }

        /* 사용자가 없는 경우 */
        if (userService.isUserExisting(userId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 해당 장학금이 없는 경우 */
        if (scholarshipService.isScholarshipExisting(scholarshipId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("SCHOLARSHIP NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        alertMapper.addAlert(userId, scholarshipId);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("ADDED");

        return result;
    }

    public ResultDO deleteAlert(String userId, String scholarshipId) {
        ResultDO result = new ResultDO();

        /* 해당 알림이 없는 경우 */
        if (alertMapper.isAlert(userId, scholarshipId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("ALERT NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 사용자가 없는 경우 */
        if (userService.isUserExisting(userId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        alertMapper.deleteAlert(userId, scholarshipId);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("DELETED");

        return result;
    }

    public ResultDO checkAlert(String userId, String scholarshipId) {
        ResultDO result = new ResultDO();

        /* 해당 알림이 없는 경우 */
        if (alertMapper.isAlert(userId, scholarshipId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("ALERT NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 사용자가 없는 경우 */
        if (userService.isUserExisting(userId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 해당 장학금이 없는 경우 */
        if (scholarshipService.isScholarshipExisting(scholarshipId) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("SCHOLARSHIP NOT FOUND");
            result.setResultMsg("");

            return result;
        }
        alertMapper.checkAlert(userId, scholarshipId);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("CHECKED");

        return result;
    }
    
}
