package com.Hexaware.hiber1.com.Hexaware.hiber1Product;

import java.util.List;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;


public class App 
{
	SessionFactory fac;
	Session ses;
	Transaction tx;
	Scanner sc=new Scanner(System.in);

	App()
	{
        fac=new Configuration().configure("hiber.cfg.xml").addAnnotatedClass(Product.class).buildSessionFactory();
   	 	ses=fac.openSession();
		
	}	
	
	public void addNewItem() {
	    tx = ses.beginTransaction();
	    
	    System.out.println("Enter Product Name:");
	    String name = sc.nextLine();
	    
	    System.out.println("Enter Product Price:");
	    Double price = sc.nextDouble();
	    
	    System.out.println("Enter Product Quantity:");
	    int quantity = sc.nextInt();
	    sc.nextLine();
	    
	    Product product = new Product();
	    product.setName(name);
	    product.setPrice(price);
	    product.setQuantity(quantity);
	    
	    ses.save(product);
	    
	    tx.commit();
	    
	    System.out.println("Product added successfully: ");
	}
	public void showAll() {
		tx=ses.beginTransaction();
		Query q=ses.createQuery("from Product");
   	 	List <Product> products= q.list();
   	
   	 	for(Product p : products)
   	 	{
   	 		System.out.println(p.toString());
   	 	}
        tx.commit();
	}
	
	
	void removeHQL() {
        tx = ses.beginTransaction();
        
        String hql = "delete from Product P where P.ProductId = :pId";
        Query q = ses.createQuery(hql);
        System.out.println("Enter ProductId to delete:");
	     int ProductId   = sc.nextInt();
        q.setParameter("pId", ProductId);
        
        int a = q.executeUpdate(); 
        
        if (a == 0) {
            System.out.println("Not Removed");
        } else {
            System.out.println("Removed");
        }
        
        tx.commit(); 
    }
	
	
	void updatePrice()
    {
    	 tx=ses.beginTransaction();
    	
    	 String hql="UPDATE Product P set P.Price=:p where P.ProductId=:pId ";
    	
    	 Query q =ses.createQuery(hql);
    	 System.out.println("Enter ProductId to update price:");
 	     int ProductId   = sc.nextInt();
    	 
    	System.out.println("Enter Product Price to Update:");
 	    Double price = sc.nextDouble();
    	 q.setParameter("p", price);
    	 q.setParameter("pId", ProductId);

    	 int a = q.executeUpdate(); // Capture the number of affected rows
         
         if (a == 0) {
             System.out.println("price not updated");
         } else {
             System.out.println("price updated");
         }
         tx.commit();

    }
	
	public void calculateTotalBill() {
	    tx = ses.beginTransaction();
	    
	    System.out.println("Enter Product Code:");
	    int productCode = sc.nextInt();
	    
	    String hql = "from Product P where P.ProductId = :productCode";
	    Query<Product> query = ses.createQuery(hql, Product.class);
	    query.setParameter("productCode", productCode);
	    
	    Product product = query.uniqueResult();
	    
	    if (product != null) {
	        System.out.println("Enter Quantity:");
	        int quantity = sc.nextInt();
	        
	        double totalBill = product.getPrice() * quantity;
	        System.out.println("Total Bill: " + totalBill);
	    } else {
	        System.out.println("Invalid Product Code.");
	    }
	    
	    tx.commit();
	}

	
	

	
    public static void main( String[] args )
    {
    	
    	Scanner sc = new Scanner(System.in);
    	App app = new App();
    	while(true) {
    		System.out.println("1. To Add New Item");
    		System.out.println("2. To Show ALL Items");
    		System.out.println("3. To Remove Item");
    		System.out.println("4. To To Update Item");
    		System.out.println("5. To CalculateTotalBill");
    		System.out.println("0. To Exit");
    		int ch = sc.nextInt();
    		if(ch==1) {
    			app.addNewItem();
    		}
    		else if(ch==2) {
    			app.showAll();
    		}
    		else if(ch==3) {
    			app.removeHQL();
    		}
    		else if(ch==4) {
    			app.updatePrice();
    		}
    		else if(ch==5) {
    			app.calculateTotalBill();
    		}
    		else if(ch==0){
    			break;
    		}
        System.out.println( "Welcome" );
    }
}
}
