package com.example.demo.mybatis;

import java.util.List;

import com.example.demo.domain.FilterDO;
import com.example.demo.domain.Scholarship;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface ScholarshipMapper {
    public List<Scholarship> getAllScholarships();

    public Scholarship getScholarshipDetail(@Param(value = "scholarshipId") String scholarshipId);

    public void increaseShowNum(@Param(value = "scholarshipId") String scholarshipId);

    public List<Scholarship> scholarshipFilter(@Param(value = "filterInput") FilterDO filterDO);
    
    public List<Scholarship> searchScholarships(@Param(value = "searchWord") String searchWord);

    public int isScholarshipExisting(@Param(value = "scholarshipId") String scholarshipId);
}
