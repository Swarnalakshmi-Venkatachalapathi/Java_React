package com.hexa.springAnnotation.com.hexa.springAnnotation1;

public class Result {
	
	int Marks;
	String Remarks;
	public int getMarks() {
		return Marks;
	}
	public void setMarks(int marks) {
		Marks = marks;
	}
	public String getRemarks() {
		return Remarks;
	}
	public void setRemarks(String remarks) {
		Remarks = remarks;
	}
	/**
	 * @param marks
	 * @param remarks
	 */
	public Result(int marks, String remarks) {
		super();
		Marks = marks;
		Remarks = remarks;
	}
	/**
	 * 
	 */
	public Result() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Result [Marks=" + Marks + ", Remarks=" + Remarks + "]";
	}
	
	

}
