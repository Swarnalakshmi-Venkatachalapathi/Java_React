package com.hexa.springAnnotation.com.hexa.springAnnotation1;

import org.springframework.context.annotation.Bean;

public class StudentConfig {
	@Bean(name = "stud1" , initMethod="init" , destroyMethod="destroy")
	public Student getStudent() {
		Student s1 = new Student();
		s1.setRoll(101);
		s1.setName("Swarna");
		s1.setFee(200.8);
		return s1;
	}
	
	@Bean(name = "stud2")
	public Student getStudent1() {
		Student s1 = new Student();
		s1.setRoll(102);
		s1.setName("varna");
		s1.setFee(2002.8);
		return s1;
	}

	@Bean(name = "res")
	public Result getResult() {
		Result r = new Result();
		r.setMarks(99);
		r.setRemarks("Very Good");
		return r;
		
	}
	@Bean(name = "res1" )
	public Result getResult1() {
		Result r2 = new Result();
		r2.setMarks(28);
		r2.setRemarks("Very Poor");
		return r2;
		
	}
}
