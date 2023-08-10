package com.example.demo.config;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class SSHContextListener implements ServletContextListener {
	private SshTunnelingInitializer initializer;

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.out.println("시작!");
		try {
			initializer = new SshTunnelingInitializer();
			System.out.println("끝!");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("끝!");
		initializer.closeSSH();
	}
}