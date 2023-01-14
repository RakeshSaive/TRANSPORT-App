package com.transport.ExternalApi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.transport.ExternalApi.Model.Bus;
import com.transport.ExternalApi.Model.Place;
import com.transport.ExternalApi.Model.Station;

@Service
public class ApiServiceImpl implements ApiService
{
	@Autowired 
    RestTemplate restTemplate;

	@Override
	public Place getAreaByVal(String val) {
		// TODO Auto-generated method stub
		String  id="463bd58d";
		String key="14e15d73198713e29ca589d411592b19";
		
		 Place res= restTemplate.getForObject("https://transportapi.com/v3/uk/places.json?query={val}&app_id={id}&app_key={key}", Place.class,val,id,key);
		return res;
	}

	@Override
	public Station getStationByCode(String val) {
		String  id="463bd58d";
		String key="14e15d73198713e29ca589d411592b19";
		
		Station res= restTemplate.getForObject("https://transportapi.com/v3/uk/train/station/{val}/timetable.json?app_id={id}&app_key={key}&train_status=passenger", Station.class,val,id,key);
		return res;
	}

	@Override
	public Bus getBusesByCode(String val) {
		// TODO Auto-generated method stub
		String  id="463bd58d";
		String key="14e15d73198713e29ca589d411592b19";
		
		Bus res= restTemplate.getForObject("https://transportapi.com/v3/uk/bus/stop/{val}/timetable.json?app_id={id}&app_key={key}", Bus.class,val,id,key);
		return res;
	}

}
