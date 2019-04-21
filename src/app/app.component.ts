import { Component , OnInit} from '@angular/core';
import BingMaps from 'ol/source/BingMaps';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'location-ol-bing';

  ngOnInit() {
    var map = new Map({
      layers: [
        new TileLayer({
           source: new BingMaps({
             key: 'AgyvMMKQk90YPNDUJlYSseRYr47UzVcAff2osP6iUDi2XYgskkjxJsy0eUOLZ1t_',
             // imagerySet: 'Road'
             // imagerySet: 'RoadOnDemand'
             // imagerySet: 'Aerial'
             // imagerySet: 'AerialWithLabels'
             // imagerySet: 'collinsBart'
             imagerySet: 'ordnanceSurvey'
             })
          //source: new OSM()
          //source: new BingMaps()
        })
      ],
      target: 'map',
      view: new View({
        center: [-6655.5402445057125, 6709968.258934638],
        zoom: 13
      })
    });
   }
}
