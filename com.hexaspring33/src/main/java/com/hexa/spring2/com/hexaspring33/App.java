package com.hexa.spring2.com.hexaspring33;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
        Cart c = (Cart) context.getBean("cart1");
        
        double price = c.getQty() * c.getPro().getPrice();
        System.out.println("Product Name: " + c.getPro().getPname());
        System.out.println("Quantity: " + c.getQty());
        System.out.println("Total Bill: " + price);

    }
}
