/*
 * package com.Hexaware.hiber1.com.Hexaware.Student;
 * 
 * import java.util.Scanner; import org.hibernate.Session; import
 * org.hibernate.SessionFactory; import org.hibernate.Transaction; import
 * org.hibernate.cfg.Configuration;
 * 
 * public class App {
 * 
 * private SessionFactory fac; private Session ses; private Transaction tx;
 * private Scanner sc = new Scanner(System.in);
 * 
 * public App() { fac = new Configuration() .configure("hiber.cfg.xml")
 * .addAnnotatedClass(Student.class) .addAnnotatedClass(Certificate.class)
 * .buildSessionFactory(); ses = fac.openSession(); }
 * 
 * public void insertStudentWithCertificate() { tx = ses.beginTransaction();
 * 
 * // Create Certificate object Certificate cert = new Certificate();
 * System.out.println("Enter Certificate ID:"); cert.setId(sc.nextInt());
 * sc.nextLine(); // Consume newline System.out.println("Enter Course Name:");
 * cert.setCourseName(sc.nextLine());
 * 
 * // Create Student object Student student = new Student();
 * System.out.println("Enter Student Roll Number:");
 * student.setRoll(sc.nextInt()); sc.nextLine(); // Consume newline
 * System.out.println("Enter Student Name:"); student.setName(sc.nextLine());
 * student.setCer(cert); // Associate the certificate with the student
 * 
 * // Save the student object (this will also save the certificate object
 * because of CascadeType.ALL) ses.save(student);
 * 
 * tx.commit();
 * 
 * System.out.println("Student and Certificate saved successfully!"); }
 * 
 * public static void main(String[] args) { App app = new App();
 * app.insertStudentWithCertificate();
 * 
 * 
 * } }
 */



















/*
 * package com.Hexaware.hiber1.com.Hexaware.Student;
 * 
 * import java.util.ArrayList; import java.util.List; import
 * org.hibernate.Session; import org.hibernate.SessionFactory; import
 * org.hibernate.Transaction; import org.hibernate.cfg.Configuration;
 * 
 * public class App {
 * 
 * private SessionFactory fac; private Session ses; private Transaction tx;
 * 
 * public App() { fac = new Configuration() .configure("hiber.cfg.xml")
 * .addAnnotatedClass(Student.class) .addAnnotatedClass(Certificate.class)
 * .buildSessionFactory(); ses = fac.openSession(); }
 * 
 * public void insertStudentWithCertificates() { tx = ses.beginTransaction();
 * 
 * // Create Student object Student student = new Student();
 * student.setRoll(102); // Example roll number student.setName("Ajay");
 * 
 * // Create multiple Certificate objects List<Certificate> certificates = new
 * ArrayList<>();
 * 
 * Certificate cert1 = new Certificate(); cert1.setId(1); // Example certificate
 * ID cert1.setCourseName("Java Programming"); cert1.setStudent(student); //
 * Associate the certificate with the student certificates.add(cert1);
 * 
 * Certificate cert2 = new Certificate(); cert2.setId(2); // Example certificate
 * ID cert2.setCourseName("Web Development"); cert2.setStudent(student);
 * certificates.add(cert2);
 * 
 * Certificate cert3 = new Certificate(); cert3.setId(3); // Example certificate
 * ID cert3.setCourseName("Data Structures"); cert3.setStudent(student);
 * certificates.add(cert3);
 * 
 * student.setCertificates(certificates);
 * 
 * // Save the student object (this will also save the certificates because of
 * CascadeType.ALL) ses.save(student);
 * 
 * tx.commit();
 * 
 * System.out.println("Student and Certificates saved successfully!"); }
 * 
 * public static void main(String[] args) { App app = new App();
 * app.insertStudentWithCertificates(); } }
 */




























package com.Hexaware.hiber1.com.Hexaware.Student;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class App {

    private SessionFactory fac;
    private Session ses;
    private Transaction tx;

    public App() {
        fac = new Configuration()
                .configure("hiber.cfg.xml")
                .addAnnotatedClass(Student.class)
                .addAnnotatedClass(Certificate.class)
                .buildSessionFactory();
        ses = fac.openSession();
    }

    public void insertCertificatesForStudent() {
        tx = ses.beginTransaction();

        // Create Student object
        Student student = new Student();
        student.setRoll(104); // Example roll number
        student.setName("Ajay");

        // Create multiple Certificate objects associated with the same student
        Certificate cert1 = new Certificate();
        cert1.setId(11); // Example certificate ID
        cert1.setCourseName("Java Programming");
        cert1.setStudent(student); // Associate certificate with student

        Certificate cert2 = new Certificate();
        cert2.setId(12); // Example certificate ID
        cert2.setCourseName("Web Dev");
        cert2.setStudent(student);

        Certificate cert3 = new Certificate();
        cert3.setId(13); // Example certificate ID
        cert3.setCourseName("Data Structures");
        cert3.setStudent(student);

        // List of certificates
        List<Certificate> certificates = new ArrayList<>();
        certificates.add(cert1);
        certificates.add(cert2);
        certificates.add(cert3);

        student.setCertificates(certificates);

        // Save the student (this will also save the certificates because of CascadeType.ALL)
        ses.save(student);

        tx.commit();

        System.out.println("Student and Certificates saved successfully!");
    }

    public static void main(String[] args) {
        App app = new App();
        app.insertCertificatesForStudent();
    }
}
