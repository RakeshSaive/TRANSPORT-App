package com.transport.Places.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transport.Places.model.Place;
import com.transport.Places.repo.PlaceRepo;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired 
	PlaceRepo pr;
	@Override
	public Place addWishlist(Place place) {
		// TODO Auto-generated method stub
		return pr.save(place);
		
	}
	@Override
	public Place checkItem(String name,String username) {
		// TODO Auto-generated method stub
		
		return pr.findByNameAndUserName(name,username);
		
	}
	@Override
	public List<Place> getPlaces(String username) {
		System.out.println("This is "+username);
		return pr.findAllByUserName(username);
		
		
	}
	@Override
	public void deleteList(String placeId) {
		// TODO Auto-generated method stub
		pr.deleteById(placeId);
	
		
		
	}

}
