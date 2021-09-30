// import { I3SLoader } from '@loaders.gl/i3s';
// import { Tile3DLayer } from '@deck.gl/geo-layers';
// import { MapboxLayer } from '@deck.gl/mapbox';

import mapboxgl from 'mapbox-gl';

import { accessToken, defaultStyleUrl } from '../config';

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
            bearing: 0
        });
        this.map = map;
    }

}
