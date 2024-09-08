package com.example.demo;

import java.util.Optional;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.Entities.User;
import com.example.demo.UserRepo.UserRepository;

@SpringBootApplication
public class Application {

	public static void main(String[] args) throws Exception {
		System.out.println("Welcome Swarna!");
		Scanner sc = new Scanner(System.in);
		ApplicationContext context = SpringApplication.run(Application.class, args);
		UserRepository rep =context.getBean(UserRepository.class);
	while(true) {
		System.out.println("----Welcome to My bank----");
		System.out.println("1. Open Account");
		System.out.println("2. Deposit money in my account");
		System.out.println("3. Withdraw Money from my account");
		System.out.println("4. Search By Account Number");
		System.out.println("5. Transfer Money from one account to another");
		System.out.println("6. Close Account Permanently");
		System.out.println("0 . ----Exit----");
		int ch = sc.nextInt();
		sc.nextLine();
		if(ch==0 ) {
			   System.out.println("Exiting...");
	            break;
		}
        switch (ch) {
        
        case 1:
        	 User user = new User();
        	    System.out.println("Enter Account Number : ");
        	    user.setAccNo(sc.nextInt());
        	    sc.nextLine(); 
        	    System.out.println("Enter Your Name : ");
        	    user.setName(sc.nextLine());
        	    System.out.println("Enter amount : ");
        	    double a = sc.nextDouble();
        	    sc.nextLine(); 
        	    if(a > 1000) {
        	        user.setBal(a);
        	    } else {
        	        System.out.println("Your initial amount should be more than 1000");
        	        break;
        	    }
        	    System.out.println("Enter Your Email");
        	    user.setEmail(sc.nextLine());
        	    rep.save(user);
        	    System.out.println("Your Account id opened");
        	    break;

        case 2:
            
        	System.out.println("Enter Your Account Number : ");
        	int num = sc.nextInt();
        	
        	Optional<User> u = rep.findById(num);
        	if(u.isPresent()) {
				        	    System.out.println("Enter Amount To be Deposited : ");
				        		double amt  = sc.nextDouble();
				        		 double balen = u.get().getBal() + amt;
				        	        u.get().setBal(balen);
				        	        rep.save(u.get());
				        	        System.out.println("Deposit Successful. New Balance: " + balen);
        	    } else {
        	              System.out.println("Not Found");
        	    }

        
            break;
            
            
        case 3:
           
        	
        	System.out.println("Enter Your Account Number : ");
        	int num1 = sc.nextInt();
        	
        	Optional<User> u1 = rep.findById(num1);
        	if(u1.isPresent()) {
        	    System.out.println("Enter Amount To be WithDrawn : ");
        		double amt  = sc.nextDouble();
        		 double balen = u1.get().getBal() - amt;
        		 			if(balen>0) {
        		 						u1.get().setBal(balen);
        		 						rep.save(u1.get());
        		 						System.out.println("Withdrawn Successful. New Balance: " + balen);
        		 						}
        		 			else {
        		 				System.out.println("You Cant Withdraw more that what you have");
        		 			}
        		 
        	    } else {
        	        System.out.println("Not Found");
        	    }

            break;
            
            
        case 4:
        	System.out.println("Enter Your Account Number");
        	int num11 = sc.nextInt();
        	
        	
        	try {
        	Optional<User> u11 = Optional.ofNullable(rep.findById(num11).orElseThrow(()->new Exception("Not Found " + num11)));}
        	catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }

        	//if(u11.isPresent()) {
        	   
        	  //  System.out.println(u11);
        	//} else {
        	  //  System.out.println("Not Found");
        	//}
            break;
            
            
        case 5:
            System.out.println("Enter Account Number Of the Sender : ");
            int num2 = sc.nextInt();

        	Optional<User> u111 = rep.findById(num2);
        	if(u111.isPresent()) {
					        	    System.out.println("Enter Amount To be Transfered : ");
					        		double amt  = sc.nextDouble();
					        		double balen = u111.get().getBal() - amt;
					        		if(balen>0) {
					        		 				
								        		System.out.println("Enter Receiver Account Number : ");
								        		int num22 = sc.nextInt();
								        		 	        	
								        		Optional<User> u1111 = rep.findById(num22);
								        		if(u1111.isPresent()) {
								        		 	        	   
								        		 	        		 	double balen1 = u1111.get().getBal() + amt;
								        		 	        		 	u1111.get().setBal(balen1);
								        		 	        		 	rep.save(u1111.get());
								        		 	        		 	System.out.println("Transfer Successful. Receiver Account number : "+ u1111.get().getAccNo()+" New Balance: " + balen1);
								        		 	        	    	} else {
								        		 	        	    			System.out.println("Not Found");
								        		 	        	    	}
										
								        		u111.get().setBal(balen);
								        		rep.save(u111.get());
								        		System.out.println("Transfer Successful. Sender Account Number : "+ u111.get().getAccNo()+" New Balance: " + balen);
								        		}
								        		 else {
								        		 System.out.println("You Cant Transfer more that what you have");
								        		 }
					        		 
					        	    } else {
					        	        System.out.println("Not Found");
					        	    }
     
            break;
            
            
            
        case 6:
        	System.out.println("Enter Account Number To be Closed : ");
        	int num3 = sc.nextInt();
        	
        	Optional<User> u2 = rep.findById(num3);
        	if(u2.isPresent()) {
        	    rep.deleteById(num3);
        	    System.out.println("Account deleted successfully");
        	} else {
        	    System.out.println("Not Found");
        	}
        	
          
            break;
        default:
            System.out.println("Invalid choice. Please choose a valid option.");
    }
	}
		sc.close();

	}

}
