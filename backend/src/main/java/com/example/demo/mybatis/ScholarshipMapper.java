package com.example.demo.mybatis;

import java.util.List;

import com.example.demo.domain.Scholarship;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface ScholarshipMapper {
    public List<Scholarship> getAllScholarships();
    public Scholarship getScholarshipDetail(@Param(value = "scholarshipId") String scholarshipId);
//    public List<Scholarship> scholarshipFilter(@Param(value = "category") String category, @Param(value = "filteringWord") String filteringWord);
    public List<Scholarship> scholarshipFilter(@Param(value = "filteringWord") String filteringWord);
}
