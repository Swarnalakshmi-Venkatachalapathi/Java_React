package com.code.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Library {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long isbn;
	
	private String title;
	private String author;
	private int year;
	
	public Long getIsbn() {
		return isbn;
	}
	public void setIsbn(Long isbn) {
		this.isbn = isbn;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	@Override
	public String toString() {
		return "Library [isbn=" + isbn + ", title=" + title + ", author=" + author + ", year=" + year + "]";
	}
	public Library(Long isbn, String title, String author, int year) {
		super();
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.year = year;
		
	}
	public Library() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
