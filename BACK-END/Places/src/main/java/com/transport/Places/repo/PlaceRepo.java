package com.transport.Places.repo;

import java.util.List;




import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.transport.Places.model.Place;

@Repository
public interface PlaceRepo extends MongoRepository<Place, String> {

	Place findByNameAndUserName(String name,String username);

	List<Place> findAllByUserName(String username);

	
	
	
}
