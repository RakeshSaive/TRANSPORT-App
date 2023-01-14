package org.app.EurekaServiceApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServiceAppApplication.class, args);
		System.out.print("Eureka Server Started");
	}

}
