package com.alibou.security.mattress.entities.mattress_size.entity;

import com.alibou.security.mattress.entities.Mattress;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "mattress_size")
public class MattressSize {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String size;
    private int price;

    @ManyToOne
    @JoinColumn(name="mattress_id", nullable=false)
    private Mattress mattress;
}
