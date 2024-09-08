package com.hexa.loginexe.com.hexa.loginexe1;

import java.util.Scanner;

import Dao.dao;
import Dao.daoImpl;
import model.login;
import service.Service;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	
    	  Scanner sc = new Scanner(System.in);
          dao dao = new daoImpl();
          Service s = new Service();

          while (true) {
              System.out.println("1. SignUp");
              System.out.println("2. SignIn");
              System.out.println("3. Remove User");
              System.out.println("4. Update Password");
              

              System.out.println("0. exit");
              int ch = sc.nextInt();
              if (ch == 0) {
                  break;
              }
              switch (ch) {
                  case 1:
                	  System.out.println("Enter New User ID:");
                      int id = sc.nextInt();
                     
                      System.out.println("Enter New Password:");
                      String pass = sc.next();
                      System.out.println("Enter Email:");
                      String email = sc.next();

                     
                      login l = new login(id, pass, email);
                      s.signUp(l);
                      break;

                  case 2:
                      System.out.println("Enter ID:");
                      int id1 = sc.nextInt();
                      System.out.println("Enter Password:");
                      String pass1 = sc.next();
                    
                      s.signIn(id1, pass1);
                      break;
                      
                  case 3:
                	    System.out.println("Enter User ID:");
                	    int removeId = sc.nextInt();
                	    System.out.println("Enter Password:");
                	    String removePass = sc.next();
                	    s.removeUser(removeId, removePass);
                	    break;


					case 4:
					    System.out.println("Enter User ID:");
					    int updateId = sc.nextInt();
					    System.out.println("Enter Old Password:");
					    String oldPass = sc.next();
					    System.out.println("Enter New Password:");
					    String newPass = sc.next();
					    s.updatePassword(updateId, oldPass, newPass);
					    break;

              }
              
          }


    		}
}
    	
