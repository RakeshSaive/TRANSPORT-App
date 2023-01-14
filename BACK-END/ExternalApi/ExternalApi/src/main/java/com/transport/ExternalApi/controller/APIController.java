package com.transport.ExternalApi.controller;

import java.net.URISyntaxException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transport.ExternalApi.Model.Bus;
import com.transport.ExternalApi.Model.Place;
import com.transport.ExternalApi.Model.Station;
import com.transport.ExternalApi.Service.ApiService;


@RestController
@RequestMapping("/transport/external_api")
@CrossOrigin(origins = "*") 
public class APIController {
	
	private ApiService ps;



	public  APIController(ApiService ps) {
	    this.ps = ps;
	}
	
	
	
	
@GetMapping("/areas/{val}")



	
	public ResponseEntity<Place> getPlaceByVal(@PathVariable String val) throws URISyntaxException {
		Place result=ps.getAreaByVal(val);
	    return  ResponseEntity.ok(result);
	    
    }
	
   @GetMapping("/stations/{val}")
	
	
	public ResponseEntity<Station> getStationByVal(@PathVariable String val) throws URISyntaxException {
		Station result=ps.getStationByCode(val);
	    return  ResponseEntity.ok(result);
	    
    }
	
   @GetMapping("/buses/{val}")
	
	
  	public ResponseEntity<Bus> getBusByVal(@PathVariable String val) throws URISyntaxException {
  		Bus result=ps.getBusesByCode(val);
  	    return  ResponseEntity.ok(result);
  	    
      }

}
