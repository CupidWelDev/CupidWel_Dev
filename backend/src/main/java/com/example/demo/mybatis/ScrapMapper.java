package com.example.demo.mybatis;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface ScrapMapper {
    public void addScrap (@Param(value = "userId") String userId, @Param(value = "scholarshipId") String scholarshipId);
    public void deleteScrap (@Param(value = "userId") String userId, @Param(value = "scholarshipId") String scholarshipId);
    public List<String> getScrapList (@Param(value = "userId") String userId);
    public int isScraped (@Param(value = "userId") String userId, @Param(value = "scholarshipId") String scholarshipId);
    public void increaseScrapNum (@Param(value = "scholarshipId") String scholarshipId);
    public void decreaseScrapNum (@Param(value = "scholarshipId") String scholarshipId);
}
