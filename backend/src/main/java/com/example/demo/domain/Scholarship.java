package com.example.demo.domain;

import lombok.Data;

import java.sql.Date;

@Data
public class Scholarship {
    private String id;
    private String institution;
    private String product;
    private String institutionSort;
    private String productSort;
    private String schoolexpenseSort;
    private String univSort;
    private String gradeSort;
    private String majorSort;
    private String gradeStand_detail;
    private String incomeStand_detail;
    private String supportDetail;
    private String qualificationDetail;
    private String localResidenceDetail;
    private String durationDetail;
    private String selectionWayDetail;
    private String selectionNumDetail;
    private String qualificationRestrictionDetail;
    private String recommendationDetail;
    private String documentationDetail;
    private Date createdDt;
    private Date modifiedDt;
    private int likeNum;
    private int scrapNum;
}
