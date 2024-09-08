package com.hexa.spring1.com.hexa.spring11;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.List;
import java.util.Scanner;
import com.hexa.spring1.com.hexa.spring11.Result;
import com.hexa.spring1.com.hexa.spring11.Student;



public class App {
    private static SessionFactory fac;
    private static Session ses;
    private static Transaction tx;
    private static Scanner scanner = new Scanner(System.in);

    App() {
        fac = new Configuration().configure("hiber.cfg.xml").addAnnotatedClass(Book.class).buildSessionFactory();
        ses = fac.openSession();
    }

   /* public static void main(String[] args) {
        new App();
        try {
            tx = ses.beginTransaction();
            Student s1 = new Student();
            Result r = new Result();
            r.setMarks(101);
            r.setSub("dsa");
            s1.setRoll(101);
            s1.setName("asha");
            s1.setResult(r);
            ses.save(s1);
            tx.commit();
            System.out.println("welcome");
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        }
    }
}
*/



    void insertBook() {
        tx = ses.beginTransaction();
        Book b = new Book();
       
        b.getBno();
        System.out.print("Enter book name: ");
        b.setName(scanner.next());
        System.out.print("Enter book price: ");
        b.setPrice(scanner.nextDouble());
        
        b.getReg();
        
        ses.save(b);
        tx.commit();
    }

    void RemoveByBNo() {
        int bn;
        System.out.print("Enter book number to delete: ");
        bn = scanner.nextInt();
        tx = ses.beginTransaction();
        Book b = ses.find(Book.class, bn);
        if (b != null) {
            ses.delete(b);
            tx.commit();
        } else {
            System.out.println("Not Found");
        }
    }
    
    void updatePrice() {
    	int bn;
    	  System.out.print("Enter book number to Update : ");
    	  bn = scanner.nextInt();
          tx = ses.beginTransaction();
          Book b1 = ses.find(Book.class, bn);
          if (b1 != null) {
        	  System.out.println("Enter Price to Update : ");
        	  b1.setPrice(scanner.nextFloat());
              ses.update(b1);
              tx.commit();
          } else {
              System.out.println("Not Found");
          }
    }
    
    void searchBook() {
    	int bn;
    	System.out.println("Enter Book no to Search : ");
    	bn = scanner.nextInt();
    	tx = ses.beginTransaction();
        Book b2 = ses.find(Book.class, bn);
        if (b2 != null) {
        	System.out.println("Book Name : "+b2.getName());
        	tx.commit();
        }
        else {
        	System.out.println("No Book");
        	tx.commit();
        }
    }

    void showAll()
    {
    	
    	 tx=ses.beginTransaction();
    	
    	 Query q=ses.createQuery("from Book ");
    	 List <Book>books= q.list();
    	
    	 for(Book b : books)
    	 {
    		 System.out.println(b.toString());
    		
    	 }
    
    }
    
    void showData()
    {
    	 tx=ses.beginTransaction();
    	 String hql="from Book B where B.price>:p ";
    	 Query q =ses.createQuery(hql,Book.class);
    	 System.out.println("Enter price to sort : ");
    	 double a  = scanner.nextInt();
    	 q.setParameter("p", a);
    	 List <Book> books=q.list();
    	
    	 System.out.println(books);
    	
    	

    	
    }
    public static void main(String[] args) {
        App app = new App();
        while (true) {
            System.out.println("1. Insert Book");
            System.out.println("2. Remove Book");
            System.out.println("3. Update Price");
            System.out.println("4. Search Book");
            System.out.println("5. Show All ");
            System.out.println("6. Sort By price(Greater than) : ");
            System.out.println("7. Exit");
            System.out.print("Enter your choice: ");
            int choice = app.scanner.nextInt();
            switch (choice) {
                case 1:
                    app.insertBook();
                    break;
                case 2:
                    app.RemoveByBNo();
                    break;
                case 3:
                	app.updatePrice();
                	break;
                case 4:
                	app.searchBook();
                	break;
                case 5:
                	app.showAll();
                	break;
                case 6:
                	app.showData();
                case 7:	
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice");
            }
            
        }
    }}

