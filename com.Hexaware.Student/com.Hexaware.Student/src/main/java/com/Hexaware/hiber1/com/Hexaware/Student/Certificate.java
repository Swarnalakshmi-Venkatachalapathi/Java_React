/*
 * package com.Hexaware.hiber1.com.Hexaware.Student;
 * 
 * import javax.persistence.Entity; import javax.persistence.Id; import
 * javax.persistence.Table;
 * 
 * @Entity
 * 
 * @Table(name = "certificate") public class Certificate {
 * 
 * @Id private int id;
 * 
 * private String courseName;
 * 
 * // Getters and Setters public int getId() { return id; }
 * 
 * public void setId(int id) { this.id = id; }
 * 
 * public String getCourseName() { return courseName; }
 * 
 * public void setCourseName(String courseName) { this.courseName = courseName;
 * } }
 */












/*
 * package com.Hexaware.hiber1.com.Hexaware.Student;
 * 
 * import javax.persistence.Entity; import javax.persistence.Id; import
 * javax.persistence.ManyToOne; import javax.persistence.Table;
 * 
 * @Entity
 * 
 * @Table(name = "certificate") public class Certificate {
 * 
 * @Id private int id;
 * 
 * private String courseName;
 * 
 * @ManyToOne private Student student;
 * 
 * // Getters and Setters public int getId() { return id; }
 * 
 * public void setId(int id) { this.id = id; }
 * 
 * public String getCourseName() { return courseName; }
 * 
 * public void setCourseName(String courseName) { this.courseName = courseName;
 * }
 * 
 * public Student getStudent() { return student; }
 * 
 * public void setStudent(Student student) { this.student = student; } }
 */





















package com.Hexaware.hiber1.com.Hexaware.Student;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "certificate")
public class Certificate {

    @Id
    private int id;

    private String courseName;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
