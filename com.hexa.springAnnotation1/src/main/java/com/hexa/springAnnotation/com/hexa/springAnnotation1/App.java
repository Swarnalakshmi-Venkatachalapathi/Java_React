package com.hexa.springAnnotation.com.hexa.springAnnotation1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class App 
{
    public static void main( String[] args )
    {

AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(StudentConfig.class);

    	
    	Student s = (Student)context.getBean("stud1");
    	Result r = s.getRes();
    	System.out.println( r.toString() );
        System.out.println( s.toString() );
        
        Student s1 = (Student)context.getBean("stud2");
        Result r2 = s1.getRes1();
        System.out.println( r2.toString() );
        System.out.println( s1.toString() );
        
        context.close();
    }
}
