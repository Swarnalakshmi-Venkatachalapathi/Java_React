package com.hexa.spring2.com.hexaspring33;

public class Cart {
       int qty;
       double total;
       private Product pro;
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public Product getPro() {
		return pro;
	}
	public void setPro(Product pro) {
		this.pro = pro;
	}
	/**
	 * @param qty
	 * @param total
	 * @param pro
	 */
	public Cart(int qty, double total, Product pro) {
		super();
		this.qty = qty;
		this.total = total;
		this.pro = pro;
	}
	/**
	 * 
	 */
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Cart [qty=" + qty + ", total=" + total + ", pro=" + pro + "]";
	}
       
       
}
