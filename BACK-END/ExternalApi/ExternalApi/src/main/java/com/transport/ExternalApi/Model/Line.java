package com.transport.ExternalApi.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Line {
	
	@JsonProperty("line_name")
	private String line_name;
	
	@JsonProperty("operator")
	private String operator;
	
	@JsonProperty("direction")
	private String direction;
	
	@JsonProperty("dir")
	private String dir;
	
	@JsonProperty("aimed_departure_time")
	private String aimed_departure_time;
}
