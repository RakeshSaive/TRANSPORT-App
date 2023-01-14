package com.transport.Places.service;

import java.util.List;

import com.transport.Places.model.Place;

public interface PlaceService {
	
	public Place addWishlist(Place place);
	public Place checkItem(String name, String username);
	public List<Place> getPlaces(String username);
	public void deleteList(String placeId);
	
	

}
