package com.transport.ExternalApi.Service;

import com.transport.ExternalApi.Model.Bus;
import com.transport.ExternalApi.Model.Place;
import com.transport.ExternalApi.Model.Station;

public interface ApiService {
Place getAreaByVal(String val);
	
	Station getStationByCode(String val);
	
	Bus getBusesByCode(String val);


}
