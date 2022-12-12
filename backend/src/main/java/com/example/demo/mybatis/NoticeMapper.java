package com.example.demo.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.NoticeDO;

@Mapper
public interface NoticeMapper {
    
    public List<NoticeDO> getNoticeList();
    public void addNotice(@Param(value = "noticeInput") NoticeDO noticeDO);
    public void deleteNotice(@Param(value = "noticeInput") NoticeDO noticeDO);
    public void modifyNotice(@Param(value = "noticeInput") NoticeDO noticeDO);
    public int isNotice(@Param(value = "noticeInput") NoticeDO noticeDO);
}
