package com.example.demo.graphql;

import java.util.List;

import com.example.demo.service.ScholarshipService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import com.example.demo.domain.Scholarship;

@Controller
@Slf4j
public class QueryResolver {
    @Autowired
    private ScholarshipService scholarshipService;

    @QueryMapping
    public List<Scholarship> getAllScholarships() {
        return scholarshipService.getAllScholarships();
    }

    @QueryMapping
    public Scholarship getScholarshipDetail(@Argument(name = "scholarshipId") String scholarshipId) {
        return scholarshipService.getScholarshipDetail(scholarshipId);
    }

    @QueryMapping
    public List<Scholarship> getSearchScholarships(@Argument(name = "searchWord") String searchWord) {
        String sig = "%";
        String tmp = sig.concat(searchWord);
        String result = tmp.concat(sig);
        return scholarshipService.getSearchScholarships(result);
    }
}
