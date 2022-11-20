package com.example.demo.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.AlertDO;

@Mapper
public interface AlertMapper {
    
    public List<AlertDO> getAlertList(@Param(value = "userId") String userId);
    public void addAlert(@Param(value = "userId") String userId, @Param(value = "scholarshipId") String scholarshipId);
    public int isAlert(@Param(value = "userId") String userId, @Param(value = "scholarshipId") String scholarshipId);
}
