import mapboxgl from 'mapbox-gl';

const accessToken = 'pk.eyJ1IjoiYmVnaW5vciIsImEiOiJja2pmMWNkbXg4azcyMzVwZHFraGc1cjYzIn0.xo0073v7zQfAicAPsr0CHQ'; // eslint-disable-line max-len

const styles = [
    {
        'name': 'light-cn',
        'title': '浅色',
        'url': 'mapbox://styles/beginor/ckkf3glod0g1m17my2wh0s74q'
    },
    {
        'name': 'dark-cn',
        'title': '深色',
        'url': 'mapbox://styles/beginor/ckkf3qurz1veh17oaezhz1dyq'
    },
    {
        'name': 'streets-cn',
        'title': '道路',
        'url': 'mapbox://styles/beginor/ckjf66khq41mi1ald80z665wh'
    },
    {
        'name': 'satellite-streets-cn',
        'title': '卫星',
        'url': 'mapbox://styles/beginor/ckjf6mvge0hhk19p75nt647p5'
    },
    {
        'name': 'outdoors-cn',
        'title': '户外',
        'url': 'mapbox://styles/beginor/ckjf6ghja1lzt19qrsanpww3i'
    },
    {
        'name': 'blue-cn',
        'title': '深蓝',
        'url': 'mapbox://styles/beginor/ckkf3wflr1vbj17qhvajzimcs'
    }
];

const defaultStyleUrl = styles[3].url;

function addTerrain(map: mapboxgl.Map, exaggeration = 1.5): void {
    map.addSource(
        'mapbox-terrain',
        {
            type: 'raster-dem',
            url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
            tileSize: 512,
            maxzoom: 14
        }
    );
    map.setTerrain({ source: 'mapbox-terrain', exaggeration });
}

export { accessToken, styles, defaultStyleUrl, addTerrain as addMapboxTerrain };
