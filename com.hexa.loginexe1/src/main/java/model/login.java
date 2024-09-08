package model;

import javax.persistence.Entity;
import javax.persistence.Id;

//Entity class
@Entity
public class login {
 @Id
 private int id;
 private String password;
 private String email;

 // Getters and Setters
 public int getId() {
     return id;
 }

 public void setId(int id) {
     this.id = id;
 }

 public String getPassword() {
     return password;
 }

 public void setPassword(String password) {
     this.password = password;
 }

 public String getEmail() {
     return email;
 }

 public void setEmail(String email) {
     this.email = email;
 }

/**
 * @param id
 * @param password
 * @param email
 */
public login(int id, String password, String email) {
	super();
	this.id = id;
	this.password = password;
	this.email = email;
}

/**
 * 
 */
public login() {
	super();
	// TODO Auto-generated constructor stub
}

@Override
public String toString() {
	return "login [id=" + id + ", password=" + password + ", email=" + email + "]";
}
 
 
}

