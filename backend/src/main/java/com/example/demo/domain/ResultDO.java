package com.example.demo.domain;

import lombok.Data;

@Data
public class ResultDO {
    private String errorMsg;
    private String resultMsg;
    private int resultCode;
}
