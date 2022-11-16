package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.ResultDO;
import com.example.demo.domain.UserDO;
import com.example.demo.mybatis.UserMapper;




@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public int isUserExisting(String userId){
        return userMapper.isUserExisting(userId);
    }

    public UserDO getUserDetail(String userId){
        return userMapper.getUserDetail(userId);
    }

    public ResultDO updateUserDetail(UserDO userDO){

        ResultDO result = new ResultDO();

        if(isUserExisting(userDO.getEmail()) > 0){
            UserDO oldUserDetail = getUserDetail(userDO.getEmail());
    
            /*변경하고자 하는 유저 정보가 있는 경우 */
            if(!(oldUserDetail.equals(userDO))){
                userMapper.updateUserDetail(
                    userDO.getEmail(), 
                    userDO.getName(), 
                    userDO.getAge(), 
                    userDO.getBirthDate().replaceAll("-", ""), 
                    userDO.getPhoneNumber(), 
                    userDO.getSchool(), 
                    userDO.getSchoolBelong(), 
                    userDO.getAttendance(), 
                    userDO.getMajor(), 
                    userDO.getStratum(), 
                    userDO.getIncome(),
                    userDO.getPrevGrade(),
                    userDO.getAddress(),
                    userDO.getIsMarried(),
                    userDO.getFamCum(),
                    userDO.getMonthIncome(), 
                    userDO.getParentAddress(), 
                    userDO.getParentJob(), 
                    userDO.getRemainedSemester(), 
                    userDO.getIsLeaveAbsence()
                );
                result.setErrorMsg("");
                result.setResultCode(200);
                result.setResultMsg("UPDATE SUCCESS");
    
                return result;
            }
            /*변경하고자 하는 유저 정보가 없는 경우 */
            else {
                result.setErrorMsg("");
                result.setResultCode(200);
                result.setResultMsg("NOTHING TO UPDATE, PASS");
    
                return result;
            }
        }   

        /*변경하고자 하는 유저가 없는 경우 */
        else{
            result.setErrorMsg("USER NOT FOUND");
            result.setResultCode(404);
            result.setResultMsg("");

            return result;
        }

    }
}
