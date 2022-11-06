package com.example.demo.mybatis;

import java.util.List;

import com.example.demo.domain.Scholarship;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface ScholarshipMapper {
    public List<Scholarship> getAllScholarships();
}
