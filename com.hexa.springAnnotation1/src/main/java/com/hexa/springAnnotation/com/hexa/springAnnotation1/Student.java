package com.hexa.springAnnotation.com.hexa.springAnnotation1;

import org.springframework.beans.factory.annotation.Autowired;

public class Student {
	int Roll;
	String Name;
	Double Fee;
	@Autowired
	public Result res;
	
	@Autowired
	public Result res1;
	
	public Result getRes1() {
		return res1;
	}
	public void setRes1(Result res1) {
		this.res1 = res1;
	}
	public Result getRes() {
		return res;
	}
	public void setRes(Result res) {
		this.res = res;
	}
	
	
	public int getRoll() {
		return Roll;
	}
	public void setRoll(int roll) {
		Roll = roll;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Double getFee() {
		return Fee;
	}
	public void setFee(Double fee) {
		Fee = fee;
	}
	/**
	 * @param roll
	 * @param name
	 * @param fee
	 */
	public Student(int roll, String name, Double fee) {
		super();
		Roll = roll;
		Name = name;
		Fee = fee;
	}
	/**
	 * 
	 */
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	void  init()
		{
			System.out.println("before create object");
		}
		void destroy()
	 
		{
			System.out.println("after finishing work");
	 
		}
	@Override
	public String toString() {
		return "Student [Roll=" + Roll + ", Name=" + Name + ", Fee=" + Fee + "]";
	}
	
	

}
