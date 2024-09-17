package com.code.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @PostMapping("/book")
    public ResponseEntity<String> addBook(@RequestBody Library libra) {
        boolean isSuccessful = libSer.addBook(libra);
        if (isSuccessful) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Book added successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add the book.");
        }
    }
	
    @PutMapping("/updateBook/{isbn}")
    public ResponseEntity<String> updateBook(@PathVariable Long isbn, @RequestBody BookDto bookDto) {
        String resultMessage = libSer.updateBook(isbn, bookDto);
        if (resultMessage.contains("successfully")) {
            return ResponseEntity.status(HttpStatus.OK).body(resultMessage);
        } else {
            throw new ResourceNotFoundException(resultMessage);
        }
    }
    
	
	@DeleteMapping("/deleteBook/{isbn}")
	public ResponseEntity<?> deleteBookByIsbn(@PathVariable Long isbn){
		  try {
	            boolean isDeleted = libSer.deleteBook(isbn);

	            if (isDeleted) {
	                return ResponseEntity.status(HttpStatus.OK).body("Book with ID " + isbn + " has been deleted successfully.");
	            } else {
	                
	                throw new ResourceNotFoundException("Book with ID " + isbn + " not found.");
	            }
	        } catch (ResourceNotFoundException e) {
	           
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	        } catch (Exception e) {
	           
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An error occurred while deleting the car.");
	        }
	}
	

	
	
}
