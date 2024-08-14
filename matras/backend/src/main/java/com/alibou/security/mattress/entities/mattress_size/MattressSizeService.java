package com.alibou.security.mattress.entities.mattress_size;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class MattressSizeService {
    private final MattressSizeRepository mattressSizeRepository;
}
