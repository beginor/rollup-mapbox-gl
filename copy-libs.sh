#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
# tslib
mkdir dist/libs/tslib
cp -v node_modules/tslib/tslib.es6.js dist/libs/tslib/tslib.js
pnpm exec rollup -c rollup/rollup.tslib.js
# bootstrap-icons
cp -rv node_modules/bootstrap-icons/icons dist/libs/bootstrap-icons
# bootstrap
mkdir dist/libs/bootstrap
cp -v node_modules/bootstrap/dist/css/bootstrap.min.css dist/libs/bootstrap
cp -v node_modules/bootstrap/dist/js/bootstrap.esm.js dist/libs/bootstrap
cp -v node_modules/bootstrap/dist/js/bootstrap.esm.min.js dist/libs/bootstrap
# @popperjs/core
pnpm exec rollup -c rollup/rollup.popperjs.js
# mapbox-gl
pnpm exec rollup -c rollup/rollup.mapbox-gl.js
cp -v node_modules/mapbox-gl/dist/mapbox-gl.css dist/libs/mapbox-gl
# @turf/turf
pnpm exec rollup -c rollup/rollup.turf.js
rm -v dist/libs/@turf/turf/turf.tmp.js
