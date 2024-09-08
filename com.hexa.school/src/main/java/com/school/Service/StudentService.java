package com.school.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.Dao.RepStudent;
import com.school.Entity.Student;

@Service
public class StudentService {

	@Autowired
	RepStudent Repst;
	
	public Student saveSt(Student s) {
		
		Student s2 = Repst.save(s);
		return s2;
	}

	public List<Student> getStuds() {
		
		List l =(List) Repst.findAll();
		// TODO Auto-generated method stub
		return l;
	}

	public Student removeSd(int rno) {
		
		Student s = Repst.findById(rno).orElse(null);
		if(s==null) {
			return null;
		}
		else {
		Repst.delete(s);
	
		}
		return s;
	}

	public String updateNm(String nm, int rn) {
		
		Student s = Repst.findById(rn).orElse(null);
		if(s==null) {
			return "Not Found";
		}
		else {
			s.setName(nm);
		Repst.save(s);
	
		}

		return "Name Updated";
	}

	public Student getSd(int rno) {
		
		return Repst.findById(rno).orElseThrow(() -> new RuntimeException("Student with ID " + rno + " not found"));

	}
}
