package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.ResultDO;
import com.example.demo.mybatis.ScrapMapper;

@Service
public class ScrapService {
    @Autowired
    private ScrapMapper scrapMapper;

    @Autowired
    private ScholarshipService scholarshipService;

    @Autowired
    private UserService userService;

    public ResultDO addScrap(String userId, String scholarshipId){
        ResultDO result = new ResultDO();

        /*이미 스크랩을 한 경우 */
        if(scrapMapper.isScraped(userId, scholarshipId) > 0){
            result.setResultCode(409);
            result.setErrorMsg("DUPICATED");
            result.setResultMsg("");

            return result;
        }

        /*사용자가 없는 경우 */
        if(userService.isUserExisting(userId) == 0){
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /*해당 장학금이 없는 경우 */
        if(scholarshipService.isScholarshipExisting(scholarshipId) == 0){
            result.setResultCode(404);
            result.setErrorMsg("SCHOLARSHIP NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        scrapMapper.addScrap(userId, scholarshipId);
        scrapMapper.increaseScrapNum(scholarshipId);

        result.setResultCode(201);
        result.setErrorMsg("");
        result.setResultMsg("CREATED");
        return result;
    }

    public ResultDO deleteScrap(String userId, String scholarshipId){
        ResultDO result = new ResultDO();

        /*사용자가 없는 경우 */
        if(userService.isUserExisting(userId) == 0){
            result.setResultCode(404);
            result.setErrorMsg("USER NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        /*해당 장학금이 없는 경우 */
        if(scholarshipService.isScholarshipExisting(scholarshipId) == 0){
            result.setResultCode(404);
            result.setErrorMsg("SCHOLARSHIP NOT FOUND");
            result.setResultMsg("");

            return result;
        }

        scrapMapper.deleteScrap(userId, scholarshipId);
        scrapMapper.decreaseScrapNum(scholarshipId);

        result.setResultCode(200);
        result.setErrorMsg("");
        result.setResultMsg("DELETED");
        return result;
    }

    public List<String> getScrapList(String userId){
        return scrapMapper.getScrapList(userId);
    }
}
