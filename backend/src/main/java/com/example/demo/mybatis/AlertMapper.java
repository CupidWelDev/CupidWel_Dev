package com.example.demo.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.AlertDO;

@Mapper
public interface AlertMapper {
    
    public List<AlertDO> getAlertList(@Param(value = "userId") String userId);
    public void addAlert(@Param(value = "alertInput") AlertDO alertDO);
    public void deleteAlert(@Param(value = "alertInput") AlertDO alertDO);
    public void checkAlert(@Param(value = "alertInput") AlertDO alertDO);
    public int isAlert(@Param(value = "alertInput") AlertDO alertDO);
}
