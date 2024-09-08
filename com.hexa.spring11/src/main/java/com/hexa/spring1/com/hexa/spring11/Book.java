package com.hexa.spring1.com.hexa.spring11;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "ITBook")
public class Book {
	@Id
	@GeneratedValue
	int Bno;
	
	@GeneratedValue
	int reg;
	
	@Column(name = "bkname")
	String Name;
	@Column 
	double price;
	
	@Transient
	String Genre;
	
	
	
	public int getReg() {
		return reg;
	}
	public void setReg(int reg) {
		this.reg = reg;
	}
	public int getBno() {
		return Bno;
	}
	public void setBno(int bno) {
		Bno = bno;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public Book(int bno, String name, double price) {
		super();
		Bno = bno;
		Name = name;
		this.price = price;
	}

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Book [Bno=" + Bno + ", Name=" + Name + ", price=" + price + "]";
	}
	
	

}
