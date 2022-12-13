package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.NoticeDO;
import com.example.demo.domain.ResultDO;
import com.example.demo.mybatis.NoticeMapper;


@Service
public class NoticeService {

    @Autowired
    private NoticeMapper noticeMapper;

    public List<NoticeDO> getNoticeList() {

        return noticeMapper.getNoticeList();
    }

    public ResultDO addNotice(NoticeDO noticeDO) {
        ResultDO result = new ResultDO();

        /* 동일한 공지가 이미 있는 경우 */
        if (noticeMapper.isNotice(noticeDO) > 0) {
            result.setResultCode(409);
            result.setErrorMsg("NOTICE ALREADY EXISTED");
            result.setResultMsg("");

            return result;
        }

        noticeMapper.addNotice(noticeDO);

        result.setResultCode(201);
        result.setErrorMsg("");
        result.setResultMsg("ADDED");

        return result;
    }

    public ResultDO deleteNotice(NoticeDO noticeDO) {
        ResultDO result = new ResultDO();

        /* 해당 공지가 없는 경우 */
        if (noticeMapper.isNotice(noticeDO) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("NOTICE NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        noticeMapper.deleteNotice(noticeDO);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("DELETED");

        return result;
    }

    public ResultDO modifyNotice(NoticeDO noticeDO) {
        ResultDO result = new ResultDO();

        /* 해당 공지가 없는 경우 */
        if (noticeMapper.isNotice(noticeDO) == 0) {
            result.setResultCode(404);
            result.setErrorMsg("NOTICE NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        noticeMapper.modifyNotice(noticeDO);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("MODIFIED");

        return result;
    }

}
