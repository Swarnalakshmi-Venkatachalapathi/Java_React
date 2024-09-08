package Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import Conne.Connt;
import model.login;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import model.login;

public class daoImpl implements dao {
    private SessionFactory f;
    Transaction t;

    public daoImpl() {
        f = Connt.getSessionFact();
    }

    @Override
    public void signIn(int id, String pass) {
        Session ses = f.openSession();
         t = ses.beginTransaction();
        login Login = ses.find(login.class, id);
        if (Login != null && Login.getPassword().equals(pass)) {
            System.out.println("Login successful");
        } else {
            System.out.println("Invalid credentials");
        }
        t.commit();
        ses.close();
		
    }


	@Override
	public void signUp(login l) {
		// TODO Auto-generated method stub
		 Session ses = f.openSession();
	       t = ses.beginTransaction();
	        ses.save(l);
	        t.commit();
	        ses.close();
	        System.out.println("SignUp successful");
			
	}
	
	@Override
	public void removeUser(int id, String password) {
	    Session ses = f.openSession();
	    Transaction t = ses.beginTransaction();
	    login l = ses.find(login.class, id);
	    if (l != null && l.getPassword().equals(password)) {
	        ses.remove(l);
	        t.commit();
	        System.out.println("User removed successfully");
	    } else {
	        System.out.println("Invalid credentials");
	    }
	    ses.close();
	}


	@Override
	public void updatePassword(int id, String oldPass, String newPass) {
	    Session ses = f.openSession();
	    Transaction t = ses.beginTransaction();
	    login l = ses.find(login.class, id);
	    if (l != null && l.getPassword().equals(oldPass)) {
	        l.setPassword(newPass);
	        ses.saveOrUpdate(l);
	        t.commit();
	        System.out.println("Password updated successfully");
	    } else {
	        System.out.println("Invalid credentials");
	    }
	    ses.close();
	}

	

}


