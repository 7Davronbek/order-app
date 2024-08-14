package com.alibou.security.mattress.entities.mattress_size;

import com.alibou.security.mattress.entities.mattress_size.entity.MattressSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MattressSizeRepository extends JpaRepository<MattressSize, UUID> {
}
