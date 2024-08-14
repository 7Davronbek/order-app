package com.alibou.security.mattress.entities;

import com.alibou.security.mattress.entities.mattress_size.entity.MattressSize;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Mattress {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    @Column(columnDefinition = "text", length = 8192)
    private String description;

    @Enumerated(value = EnumType.STRING)
    private MattressType mattressType;

    @Lob
    private byte[] bytes;
    private String fileType;
    private String fileName;

    @OneToMany(mappedBy = "mattress")
    private List<MattressSize> sizes;
}
