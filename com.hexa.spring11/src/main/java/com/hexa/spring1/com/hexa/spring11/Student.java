package com.hexa.spring1.com.hexa.spring11;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Stud")
public class Student {
	    @Id
	    private int roll;
	    private String name;
	    private double fee;
	    @Embedded
	    private Result result;

	    // getters and setters
	    public int getRoll() {
	        return roll;
	    }

	    public void setRoll(int roll) {
	        this.roll = roll;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public double getFee() {
	        return fee;
	    }

	    public void setFee(double fee) {
	        this.fee = fee;
	    }

	    public Result getResult() {
	        return result;
	    }

	    public void setResult(Result result) {
	        this.result = result;
	    }


}
