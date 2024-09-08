package Dao;

import model.login;

public interface dao {
	void signIn(int id, String pass);
	 void signUp(login l);
	 void removeUser(int id, String pass) ;
	     void updatePassword(int id, String oldPass, String newPass) ;
	    
}
