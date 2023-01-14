package com.SpringCloudGateway.config;

import com.SpringCloudGateway.filter.JwtFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public RouteLocator myRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(p -> p
                      .path("/transport/api/**")
                        .uri("lb://transport-app"))
                .route(p->p
                .path("/trans/api/places/add")
                        .uri("lb://places"))
                .build();
    }
    
}

