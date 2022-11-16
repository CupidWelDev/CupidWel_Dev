package com.example.demo.mybatis;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.UserDO;


@Mapper
public interface UserMapper {
    public int isUserExisting(@Param(value = "userId") String userId);
    public UserDO getUserDetail(@Param(value = "userId") String email);
    public void updateUserDetail(
        @Param(value = "email") String email, 
        @Param(value = "name") String name,
        @Param (value = "age") int age,
        @Param (value = "birthDate") String birthDate,        
        @Param (value = "phoneNumber") String phoneNumber,
        @Param (value = "school") String school,
        @Param (value = "schoolBelong") String schoolBelong,
        @Param (value = "attendance") String attendance,
        @Param (value = "major") String major,
        @Param (value = "stratum") String stratum,
        @Param (value = "income") String income,
        @Param (value = "prevGrade") String prevGrade,
        @Param (value = "address") String address,
        @Param (value = "isMarried") Boolean isMarried,
        @Param (value = "famCum") int famCum,
        @Param (value = "monthIncome") int monthIncome,
        @Param (value = "parentAddress") String parentAddress,
        @Param (value = "parentJob") String parentJob,
        @Param (value = "remainedSemester") int remainedSemester,
        @Param (value = "isLeaveAbsence") Boolean isLeaveAbsence

        );
}
