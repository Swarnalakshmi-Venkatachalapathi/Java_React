package com.example.demo.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	int accNo;
	String Name;
	Double Bal;
	String Email;
	public int getAccNo() {
		return accNo;
	}
	public void setAccNo(int accNo) {
		this.accNo = accNo;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Double getBal() {
		return Bal;
	}
	public void setBal(Double bal) {
		Bal = bal;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	@Override
	public String toString() {
		return "User [accNo=" + accNo + ", Name=" + Name + ", Bal=" + Bal + ", Email=" + Email + "]";
	}
	public User(int accNo, String name, Double bal, String email) {
		super();
		this.accNo = accNo;
		Name = name;
		Bal = bal;
		Email = email;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
