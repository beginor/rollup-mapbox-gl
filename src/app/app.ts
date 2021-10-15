import mapboxgl from 'mapbox-gl';

import { accessToken, defaultStyleUrl, addMapboxTerrain } from '../mapbox-util';

import './app.scss';

export class App {

    /** app title */
    public title = 'Hello, MapboxGL !';

    private map!: mapboxgl.Map;

    constructor(private container: HTMLElement) { }

    /**
     * run the app.
     */
    public run(): void {
        const map = new mapboxgl.Map({
            accessToken: accessToken,
            container: this.container,
            style: defaultStyleUrl,
            center: [113.087100, 23.655254 ],
            zoom: 6.32,
            pitch: 0,
            bearing: 0,
            hash: true
        });
        const nav = new mapboxgl.NavigationControl({});
        map.addControl(nav, 'top-right');
        this.map = map;
        map.on('load', () => {
            addMapboxTerrain(map, 1.5);
        });
    }

}
