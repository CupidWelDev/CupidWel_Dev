package com.example.demo.domain;

import lombok.Data;

@Data
public class NoticeDO {
    private int id;
    private String title;
    private String content;
    private String createdDt;
    private String modifiedDt;
}
