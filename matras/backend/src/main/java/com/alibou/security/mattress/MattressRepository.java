package com.alibou.security.mattress;

import com.alibou.security.mattress.entities.Mattress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MattressRepository extends JpaRepository<Mattress, UUID> {
}
