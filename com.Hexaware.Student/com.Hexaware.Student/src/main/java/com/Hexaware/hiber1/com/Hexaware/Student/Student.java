/*
 * package com.Hexaware.hiber1.com.Hexaware.Student; import
 * javax.persistence.Entity; import javax.persistence.Id; import
 * javax.persistence.OneToOne; import javax.persistence.CascadeType; import
 * javax.persistence.JoinColumn; import javax.persistence.Table;
 * 
 * @Entity
 * 
 * @Table(name = "student") public class Student {
 * 
 * @Id private int roll;
 * 
 * private String name;
 * 
 * @OneToOne(cascade = CascadeType.ALL)
 * 
 * @JoinColumn(name = "certificate_id") private Certificate cer;
 * 
 * // Getters and Setters public int getRoll() { return roll; }
 * 
 * public void setRoll(int roll) { this.roll = roll; }
 * 
 * public String getName() { return name; }
 * 
 * public void setName(String name) { this.name = name; }
 * 
 * public Certificate getCer() { return cer; }
 * 
 * public void setCer(Certificate cer) { this.cer = cer; } }
 */











/*
 * package com.Hexaware.hiber1.com.Hexaware.Student;
 * 
 * import java.util.List; import javax.persistence.Entity; import
 * javax.persistence.Id; import javax.persistence.OneToMany; import
 * javax.persistence.CascadeType; import javax.persistence.Table;
 * 
 * @Entity
 * 
 * @Table(name = "student") public class Student {
 * 
 * @Id private int roll;
 * 
 * private String name;
 * 
 * @OneToMany(cascade = CascadeType.ALL, mappedBy = "student") private
 * List<Certificate> certificates;
 * 
 * // Getters and Setters public int getRoll() { return roll; }
 * 
 * public void setRoll(int roll) { this.roll = roll; }
 * 
 * public String getName() { return name; }
 * 
 * public void setName(String name) { this.name = name; }
 * 
 * public List<Certificate> getCertificates() { return certificates; }
 * 
 * public void setCertificates(List<Certificate> certificates) {
 * this.certificates = certificates; } }
 */

























package com.Hexaware.hiber1.com.Hexaware.Student;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "student")
public class Student {

    @Id
    private int roll;

    private String name;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Certificate> certificates;

    // Getters and Setters
    public int getRoll() {
        return roll;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Certificate> getCertificates() {
        return certificates;
    }

    public void setCertificates(List<Certificate> certificates) {
        this.certificates = certificates;
    }
}
