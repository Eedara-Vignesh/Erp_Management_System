package com.example.erp_management_system.repository;
import com.example.erp_management_system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
long count();
}
