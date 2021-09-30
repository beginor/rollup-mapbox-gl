import mapboxgl from 'mapbox-gl';
import { I3SLoader } from '@loaders.gl/i3s';
import { Tile3DLayer } from '@deck.gl/geo-layers';
import { MapboxLayer } from '@deck.gl/mapbox';

import { accessToken, defaultStyleUrl } from '../config';

import './app.scss';
import { Tile3DLayerProps } from '@deck.gl/geo-layers/tile-3d-layer/tile-3d-layer';

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
            this.addTerrain();
        });
    }

    private addTerrain(): void {
        this.map.addSource(
            'mapbox-terrain',
            {
                type: 'raster-dem',
                url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
                tileSize: 512,
                maxzoom: 14
            }
        );
        this.map.setTerrain({ source: 'mapbox-terrain', exaggeration: 1.5 });
        this.addTile3dLayer();
    }

    private addTile3dLayer(): void {
        const layer = new MapboxLayer<Tile3DLayer<string>>({
            id: 'tile3d',
            type: Tile3DLayer,
            data: 'https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0',
            loader: I3SLoader
        })
        this.map.addLayer(layer);
    }

}
