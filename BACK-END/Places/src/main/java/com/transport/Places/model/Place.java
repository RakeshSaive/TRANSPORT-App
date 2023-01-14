package com.transport.Places.model;


import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "places")
public class Place {
	@Id
	private String placeId;
	private String Id;
	
	private String name;
	private String type;
	private String description;
	
	private String userName;
	
	private String longitude;
	private String latitude;
	private String station_code;
	private String node;
	private String atcocode;
	
	
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public String getStation_code() {
		return station_code;
	}
	public void setStation_code(String station_code) {
		this.station_code = station_code;
	}
	public String getNode() {
		return node;
	}
	public void setNode(String node) {
		this.node = node;
	}
	public String getAtcocode() {
		return atcocode;
	}
	public void setAtcocode(String atcocode) {
		this.atcocode = atcocode;
	}
	public String getPlaceId() {
		return placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	

	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Place(String placeId, String id, String name, String type, String description, String userName,
			String longitude, String latitude, String station_code, String node, String atcocode) {
		super();
		this.placeId = placeId;
		this.Id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.userName = userName;
		this.longitude = longitude;
		this.latitude = latitude;
		this.station_code = station_code;
		this.node = node;
		this.atcocode = atcocode;
	}
	public Place(String id, String name, String type, String description, String userName, String longitude,
			String latitude, String station_code, String node, String atcocode) {
		super();
		this.Id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.userName = userName;
		this.longitude = longitude;
		this.latitude = latitude;
		this.station_code = station_code;
		this.node = node;
		this.atcocode = atcocode;
	}
	public Place() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
