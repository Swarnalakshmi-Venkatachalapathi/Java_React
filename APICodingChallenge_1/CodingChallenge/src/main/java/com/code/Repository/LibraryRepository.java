package com.code.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.Entity.Library;
@Repository
public interface LibraryRepository extends JpaRepository<Library, Long> {

}
