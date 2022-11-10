package com.example.demo.mybatis;

import java.util.List;

import com.example.demo.domain.Scholarship;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface ScholarshipMapper {
    public List<Scholarship> getAllScholarships();
<<<<<<< Updated upstream
    public Scholarship getScholarshipDetail(@Param(value = "scholarshipId") String scholarshipId);
=======

    public List<Scholarship> getSearchScholarships();
>>>>>>> Stashed changes
}
