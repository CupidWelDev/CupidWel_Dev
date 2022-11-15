package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Scholarship;
import com.example.demo.mybatis.ScholarshipMapper;

@Service
public class ScholarshipService {
    @Autowired
    private ScholarshipMapper scholarshipMapper;

    public List<Scholarship> getAllScholarships(){
        return scholarshipMapper.getAllScholarships();
    }

    public Scholarship getScholarshipDetail(String scholarshipId){
        return scholarshipMapper.getScholarshipDetail(scholarshipId);
    }

   public List<Scholarship> scholarshipFilter(String category, String filteringWord) {
       return scholarshipMapper.scholarshipFilter(category, filteringWord);
   }
    // public List<Scholarship> scholarshipFilter(String filteringWord) {
    //     return scholarshipMapper.scholarshipFilter(filteringWord);
    // }
}
