package com.code.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.Entity.Library;
import com.code.Repository.LibraryRepository;
import com.code.dto.BookDto;


@Service
public class LibraryServiceImpl implements LibraryService{
	
	@Autowired
	LibraryRepository libRepo;

	@Override
	public List<Library> getAllBooks() {
		// TODO Auto-generated method stub
		return libRepo.findAll().stream().collect(Collectors.toList());
	}

	@Override
	public List<Library> getBookByIsbn(Long isbn) {
		// TODO Auto-generated method stub
		return libRepo.findById(isbn).stream().collect(Collectors.toList());
	}

	@Override
	public boolean addBook(Library libra) {
		
		Library li = new Library();
		
		
		li.setAuthor(libra.getAuthor());
	
		li.setTitle(libra.getTitle());
		li.setYear(libra.getYear());
		
		
		libRepo.save(li);
		
		
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public String updateBook(Long isbn, BookDto bookDto) {
	    Optional<Library> optionalBook = libRepo.findById(isbn);

	    if (optionalBook.isPresent()) {
	        Library existingBook = optionalBook.get();

	        // Update only the fields that are provided
	        existingBook.setAuthor(bookDto.getAuthor() != null ? bookDto.getAuthor() : existingBook.getAuthor());
	        existingBook.setTitle(bookDto.getName() != null ? bookDto.getName() : existingBook.getTitle());
	        existingBook.setYear(bookDto.getYear() != null ? bookDto.getYear() : existingBook.getYear());

	        // Save the updated book details back to the repository
	        libRepo.save(existingBook);
	        return "Book updated successfully.";
	    }

	    return "Failed to update the book. Book with the given ISBN not found.";
	}

	@Override
	public boolean deleteBook(Long isbn) {
		  Optional<Library> optionalCar = libRepo.findById(isbn);

	        if (optionalCar.isPresent()) {
	            libRepo.deleteById(isbn);
	            return true; 
	        } else {
	            return false; 
	        }
	}


}
