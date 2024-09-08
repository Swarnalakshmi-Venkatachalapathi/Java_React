package com.hexaware.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
 
 
@RestController
public class MainController {
	
	List <String> users= new ArrayList();
	
	
	MainController()
	{
		users.add("ajay");
		users.add("kavita");
 
		users.add("deepa");
		users.add("deepika");
		users.add("pooja");
		users.add("pooja");

	}

	@GetMapping("/getData")
	public List<String>  getData()
	{
		return (users);
	}
	@PostMapping("/saveData")
	public String saveData(@RequestParam String name )
	{
		users.add(name);
		return "save data";
	}
	@DeleteMapping("/removeData/{name}")
	public String removeData( @PathVariable String name)
	{
		users.remove(name);
		return "Removed";
	}
	 
	@PutMapping("/updateName/{pos}")
	public String updateName(@PathVariable int pos ,@RequestParam  String nNm)
	{
		users.set(pos,nNm);
		return "Updated ";
	}
	}
	 
	 
	

 
 
 
 
 
/*
@Controller
public class MainController {

	@GetMapping("/sales")
	public String sales() {
		return "sales";
	}
	@GetMapping("/marketing")
	public String marketing() {
		return "marketing";
	}
	@GetMapping("/laptop")
	public String laptop() {
		return "laptop";
	}
	@GetMapping("/tvSales")
	public String tvSales() {
		return "tvSales";
	}
}*/