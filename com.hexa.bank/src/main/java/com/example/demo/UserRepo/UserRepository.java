package com.example.demo.UserRepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
