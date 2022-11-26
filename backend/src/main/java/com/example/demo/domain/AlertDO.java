package com.example.demo.domain;

import java.sql.Date;

import lombok.Data;

@Data
public class AlertDO {
    private String email;
    private int notice_id;
    private Date sent_time;
    private boolean is_sent;
    private boolean is_checked;
}
