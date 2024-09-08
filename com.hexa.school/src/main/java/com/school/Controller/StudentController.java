package com.school.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.Entity.Student;
import com.school.Service.StudentService;

@RestController
public class StudentController {

	@Autowired
	StudentService studSer;
	
	    @PostMapping("/saveStudent")
	    public ResponseEntity <Student> saveStudent(@RequestBody Student s) {
		Student s2 = studSer.saveSt(s);
		if(s2==null) {
		return new ResponseEntity<>(s2, HttpStatus.NOT_FOUND );}
		else {
			return new ResponseEntity<>(s2, HttpStatus.CREATED );}
	}		
		@GetMapping("/getStudents")
		public ResponseEntity <List <Student>> getStudents(){
			List <Student> users = studSer.getStuds();
			if(users.size() <=0) {
				return new ResponseEntity<>( HttpStatus.NO_CONTENT );
			}
			return new ResponseEntity<>(users, HttpStatus.OK );
		}
		
		@DeleteMapping("/removeStud/{rno}")
		public Student removeStud(@PathVariable int rno) {
			Student s = studSer.removeSd(rno);
			return s;
		}
		
		@PutMapping("/updateName/{rn}/{nm}")
		public String updateName(@PathVariable String nm ,@PathVariable int rn) {
			String r = studSer.updateNm(nm , rn);
			return r;
			
		}
		@GetMapping("/getStud/{rno}")
		
		public ResponseEntity <Student> getStud(@PathVariable int rno) {
			try {
			Student s = studSer.getSd(rno);
			return new ResponseEntity<>(s, HttpStatus.OK );
		
		//public Student 
			}catch(RuntimeException e) {
				 
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

		}

	}
	

