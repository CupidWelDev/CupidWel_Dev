package com.example.demo.domain;

import lombok.Data;

@Data
public class UserDO {
    private String name;
    private String email;
    private int age;
    private String birthDate;
    private String gender;
    private String phoneNumber;
    private String school;
    private String schoolBelong;
    private String attendance;
    private String major;
    private String stratum;
    private String income;
    private String prevGrade;
    private String address;
    private Boolean isMarried;
    private int famCum;
    private int monthIncome;
    private String parentAddress;
    private String parentJob;
    private int remainedSemester;
    private Boolean isLeaveAbsence;
}
