package service;

import Dao.dao;
import Dao.daoImpl;
import model.login;

public class Service {

	dao d = new daoImpl();
	
    public void signIn(int id, String pass) {
        d.signIn(id, pass);
    }

	public void signUp(login l) {
		// TODO Auto-generated method stub
		d.signUp(l);
	}
	


	public void removeUser(int removeId, String removePass) {
		// TODO Auto-generated method stub
		d.removeUser(removeId, removePass);
	}


	public void updatePassword(int updateId, String oldPass, String newPass) {
		// TODO Auto-generated method stub
		d.updatePassword(updateId, oldPass, newPass);
	}


}
