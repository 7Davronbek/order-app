package com.alibou.security.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ErrorModel {
    private int status;
    private String message;
    private LocalDateTime timestamp;
}
