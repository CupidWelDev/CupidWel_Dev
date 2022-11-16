package com.example.demo.graphql;

import java.util.List;

import com.example.demo.service.ScholarshipService;
import com.example.demo.service.ScrapService;
import com.example.demo.service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.example.demo.domain.ResultDO;
import com.example.demo.domain.Scholarship;
import com.example.demo.domain.UserDO;

@Controller
public class QueryResolver {
    @Autowired
    private ScholarshipService scholarshipService;

    @Autowired
    private ScrapService scrapService;

    @Autowired
    private UserService userService;

    @QueryMapping
    public List<Scholarship> getAllScholarships() {
        return scholarshipService.getAllScholarships();
    }

    @QueryMapping
    public Scholarship getScholarshipDetail(@Argument(name = "scholarshipId") String scholarshipId) {
        return scholarshipService.getScholarshipDetail(scholarshipId);
    }

    @QueryMapping
    public List<Scholarship> searchScholarships(@Argument(name = "searchWord") String searchWord) {
        return scholarshipService.searchScholarships(searchWord);
    }

    @MutationMapping
    public ResultDO addScrap(@Argument (name = "userId") String userId, @Argument (name = "scholarshipId") String scholarshipId){
        return scrapService.addScrap(userId, scholarshipId);
    }

    @MutationMapping
    public ResultDO deleteScrap(@Argument (name = "userId") String userId, @Argument (name = "scholarshipId") String scholarshipId){
        return scrapService.deleteScrap(userId, scholarshipId);
    }

    @QueryMapping
    public List<String> getScrapList(@Argument (name = "userId") String userId){
        return scrapService.getScrapList(userId);
    }

    @QueryMapping
    public UserDO getUserDetail(@Argument (name = "userId") String userId){
        return userService.getUserDetail(userId);
    }

    @MutationMapping
    public ResultDO updateUser(@Argument(name = "userInput") UserDO userDO){
        return userService.updateUserDetail(userDO);
    }
}
