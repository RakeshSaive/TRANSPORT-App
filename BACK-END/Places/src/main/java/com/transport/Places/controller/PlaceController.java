package com.transport.Places.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transport.Places.model.Place;
import com.transport.Places.service.PlaceService;

@RestController
@RequestMapping("/trans/api/places")
@CrossOrigin(origins = "*")

public class PlaceController {
	
	@Autowired
	private PlaceService ps;
	
	@PostMapping("/add")
	public Place saveWishList(@RequestBody Place place) throws Exception {
		
		Place pl=ps.checkItem(place.getName(),place.getUserName());
		
		if(pl==null) {
			return ps.addWishlist(place);
		}
		
		throw new Exception("Already Exists");
		
		
	}
	
	@GetMapping("/wishlist/{username}")
	public List<Place> getDataWishList(@PathVariable String username) throws Exception {
		List<Place> res=ps.getPlaces(username);
		if(res==null) {
			throw new Exception("Your wishlist is Empty!!");
		}
		return res;
		
	}
	
	
	@DeleteMapping("/delete/{username}/{placeId}")
	public List<Place> deleteWish(@PathVariable String username,@PathVariable String placeId) throws Exception {
		
			
		    ps.deleteList(placeId);
		    List<Place> res= ps.getPlaces(username);
		    if(res==null) {
				throw new Exception("Your wishlist is Empty!!");
			}
			return res;
	}
		    
		  
		
		

}
