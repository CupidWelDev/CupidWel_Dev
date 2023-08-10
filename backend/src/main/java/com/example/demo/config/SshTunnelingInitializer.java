package com.example.demo.config;

import java.util.Properties;

import javax.annotation.PreDestroy;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import com.google.firebase.database.annotations.NotNull;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

// @Profile("dev")
@Slf4j
@Component
@ConfigurationProperties(prefix = "ssh")
@Validated
@Setter
public class SshTunnelingInitializer {
    private Session session;
    
    @NotNull
    private String remoteIp;

    @NotNull
    private String user;

    @NotNull
    private int sshPort;

    @NotNull
    private String privateKey;

    @NotNull
    private int remotePort;


    @PreDestroy
    public void closeSSH(){
        if (session.isConnected()) {
            session.disconnect();
            log.info("SSH session closed");
        }
    }

    public Integer buildSSHConnection(){
        Integer forwardedPort = null;

        try{
            log.info("{}@{}:{}:{} with privateKey",user, remoteIp, sshPort, remotePort);
            JSch jsch = new JSch();

            log.info("Starting SSH tunneling");

            jsch.addIdentity(privateKey);
            log.info("Successfully added private key");

            session = jsch.getSession(user, remoteIp, sshPort);

            Properties config = new Properties();

            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);

            log.info("Successfully set session with customized config");

            log.info("Connecting to SSH");
            session.connect();
            log.info("Successfully connected to SSH");

            forwardedPort = session.setPortForwardingL(0, "localhost", remotePort);

            log.info("Successfully forwarded port {}", forwardedPort);

        } catch (Exception e) {
            log.error("Error while connecting to SSH", e);
            this.closeSSH();
            e.printStackTrace();
        }

        return forwardedPort;
    }
}
