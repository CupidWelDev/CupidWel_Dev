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

        /* 알림이 비어있을 때 사용자가 없는 경우 */
        // if (userService.isUserExisting(userId) == 0) {}
        return alertMapper.getAlertList(userId);
    }

    public ResultDO addAlert(AlertDO alertDO) {
        ResultDO result = new ResultDO();

        /* 동일한 알림이 이미 있는 경우 */
        if (alertMapper.isAlert(alertDO) > 0) {
            result.setResultCode(409);
            result.setErrorMsg("ALERT ALREADY EXISTED");
            result.setResultMsg("");

            return result;
        }

        /* 사용자가 없는 경우 */
        if (userService.isUserExisting(alertDO.getEmail()) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 장학금 알림일 경우 */
        if ((alertDO.getScholarshipId() != null) && (alertDO.getNoticeId() == 0)) {

            /* 해당 장학금이 없는 경우 */
            if (scholarshipService.isScholarshipExisting(alertDO.getScholarshipId()) == 0) {
                result.setResultCode(404);
                result.setErrorMsg("SCHOLARSHIP NOT FOUND");
                result.setResultMsg("");

                return result;
            }
        }

        /* 시스템 알림일 경우 */
        if ((alertDO.getScholarshipId() == null) && (alertDO.getNoticeId() != 0)) {

            /*
             * 해당 Notice가 없는 경우
             * 추후 Notice Service 개발되면 추가 예정
             */
        }

        alertMapper.addAlert(alertDO);

        result.setResultCode(201);
        result.setErrorMsg("");
        result.setResultMsg("ADDED");

        return result;
    }

    public ResultDO deleteAlert(AlertDO alertDO) {
        ResultDO result = new ResultDO();

        /* 해당 알림이 없는 경우 */
        if (alertMapper.isAlert(alertDO) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("ALERT NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 사용자가 없는 경우 */
        if (userService.isUserExisting(alertDO.getEmail()) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        alertMapper.deleteAlert(alertDO);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("DELETED");

        return result;
    }

    public ResultDO checkAlert(AlertDO alertDO) {
        ResultDO result = new ResultDO();

        /* 해당 알림이 없는 경우 */
        if (alertMapper.isAlert(alertDO) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("ALERT NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 사용자가 없는 경우 */
        if (userService.isUserExisting(alertDO.getEmail()) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 해당 장학금이 없는 경우 */
        if (scholarshipService.isScholarshipExisting(alertDO.getScholarshipId()) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("SCHOLARSHIP NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /* 해당 Notice가 없는 경우
         * Notice Service 개발 후
         * 추가 예정
        */
        alertMapper.checkAlert(alertDO);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("CHECKED");

        return result;
    }

}
