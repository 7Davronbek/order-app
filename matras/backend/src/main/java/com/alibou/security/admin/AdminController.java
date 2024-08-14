package com.alibou.security.admin;

import com.alibou.security.mattress.MattressService;
import com.alibou.security.mattress.entities.mattress_size.MattressSizeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {
    private final MattressSizeService mattressSizeService;
    private final MattressService mattressService;

    @GetMapping
    public ResponseEntity<String> getMattresses() {
        return ResponseEntity.ok("Mattress");
    }

}
