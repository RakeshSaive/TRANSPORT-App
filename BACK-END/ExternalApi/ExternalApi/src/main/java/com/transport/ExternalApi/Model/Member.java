package com.transport.ExternalApi.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {
	@JsonProperty("description")
	private  String description;
	@JsonProperty("name")
	private String name;
	@JsonProperty("type")
	private String type;
	@JsonProperty("atcocode")
	private String atcocode;
	@JsonProperty("station_code")
	private String station_code;
	@JsonProperty("node")
	private String node;
	@JsonProperty("longitude")
	private String longitude;
	@JsonProperty("latitude")
	private String latitude;
	
}
