package com.code.services;

import java.util.List;

import com.code.Entity.Library;
import com.code.dto.BookDto;

public interface LibraryService {

	List<Library> getAllBooks();

	List<Library> getBookByIsbn(Long isbn);

	boolean addBook(Library libra);



	String updateBook(Long isbn, BookDto bookDto);

	boolean deleteBook(Long isbn);

}
