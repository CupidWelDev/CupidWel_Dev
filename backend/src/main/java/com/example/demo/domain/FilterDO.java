package com.example.demo.domain;

import lombok.Data;

@Data
public class FilterDO {
    // 유저 맞춤필터
    private String school;
    private String department;
    private String major;
    private String grade;
    private String attendance;
    private String incomeBracket;
    private String[] specialClass;
    private String address;

    //  장학금 필터
    private String[] scholarshipTypes;
    private Boolean duplicateBenefit;
}