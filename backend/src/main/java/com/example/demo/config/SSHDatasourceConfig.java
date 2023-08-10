package com.example.demo.config;

import javax.sql.DataSource;

import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class SSHDatasourceConfig {
    private final SshTunnelingInitializer initializer;

    @Bean
    public DataSource dataSource(DataSourceProperties properties) {
        log.info("SSH tunneling started");
        Integer forwardedPort = initializer.buildSSHConnection();
        String url = properties.getUrl().replace("[forwardedPort]", Integer.toString(forwardedPort));
        log.info("SSH tunneling finished");

        return DataSourceBuilder.create()
        .url(url)
        .username(properties.getUsername())
        .password(properties.getPassword())
        .driverClassName(properties.getDriverClassName())
        .build();
    }

}
