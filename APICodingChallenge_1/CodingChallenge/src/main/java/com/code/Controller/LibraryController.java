package com.code.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.code.Entity.Library;
import com.code.Exceptions.ResourceNotFoundException;
import com.code.Repository.LibraryRepository;
import com.code.dto.BookDto;
import com.code.services.LibraryService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:3000")
public class LibraryController {
	
	@Autowired
	LibraryService libSer;
	
	@Autowired
	LibraryRepository libRepo;
	
	@GetMapping("/books")
	public ResponseEntity<?> getAllBooks() {
		return ResponseEntity.ok(libSer.getAllBooks());
		
	}
	
	
    @GetMapping("/book/{isbn}")
    public ResponseEntity<?> getBookByIsbn(@PathVariable Long isbn) {
        List<Library> book = libSer.getBookByIsbn(isbn);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            throw new ResourceNotFoundException("Book with ISBN " + isbn + " not found.");
        }
    }
    
}

	

	
	

