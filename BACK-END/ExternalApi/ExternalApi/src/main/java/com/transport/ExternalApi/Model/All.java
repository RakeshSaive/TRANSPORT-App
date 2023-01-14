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
public class All {
	
	@JsonProperty("aimed_departure_time")
	private String aimed_departure_time;
	
	@JsonProperty("destination_name")
	private String destination_name;
	
	@JsonProperty("origin_name")
	private String origin_name;
	
	@JsonProperty("platform")
	private int platform;
	
	@JsonProperty("train_uid")
	private String train_uid;
}
