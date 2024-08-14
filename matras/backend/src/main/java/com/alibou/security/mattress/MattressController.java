package com.alibou.security.mattress;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/public")
@RequiredArgsConstructor
@RestController
public class MattressController {
    private final MattressService mattressService;

    @GetMapping("/mattress")
    public ResponseEntity<String> getMattresses() {
        return ResponseEntity.ok("mattresses");
    }
}
