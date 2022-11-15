package com.example.demo.domain;

import lombok.Data;

@Data
public class FilterDO {
    // 유저 맞춤필터
    private String school; // 학교
    private String department; // 소속
    private String major; // 전공
    private String grade; // 학점
    private String attendance; // 재학유무
    private String incomeSection; // 소득분위
    private String specialClass; // 특수계층
    private String address; // 주소

    //  장학금 필터
    private String scholarshipNature; // 등록금 성격(등록금/생활비/활동지원금)
    private String doubleBenefit; // 중복수혜
    
    private Boolean allFalse;
}