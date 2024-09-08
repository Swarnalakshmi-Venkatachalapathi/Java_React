package com.hexa.spring2.com.hexaspring33;

public class Product {
	
	int id;
	String Pname;
	double price;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPname() {
		return Pname;
	}
	public void setPname(String pname) {
		Pname = pname;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	/**
	 * @param id
	 * @param pname
	 * @param price
	 */
	public Product(int id, String pname, double price) {
		super();
		this.id = id;
		Pname = pname;
		this.price = price;
	}
	/**
	 * 
	 */
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", Pname=" + Pname + ", price=" + price + "]";
	}
	
	

}
