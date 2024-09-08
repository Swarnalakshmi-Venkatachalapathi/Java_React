package com.school.Dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.school.Entity.Student;

@Repository
public interface RepStudent extends CrudRepository<Student, Integer>{

}
