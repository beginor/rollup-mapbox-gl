import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'node_modules/mapbox-gl/dist/mapbox-gl-unminified.js',
    output: {
      format: 'esm',
      // exports: 'named',
      sourcemap: false,
      file: 'dist/libs/mapbox-gl/mapbox-gl.esm.js'
    },
    plugins: [
      commonjs({})
    ]
  },
  {
    input: 'node_modules/mapbox-gl/dist/mapbox-gl.js',
    output: {
      format: 'esm',
      exports: 'named',
      // sourcemap: false,
      file: 'dist/libs/mapbox-gl/mapbox-gl.esm.min.js'
    },
    plugins: [
      commonjs({})
    ]
  },
  // {
  //   input: 'node_modules/@turf/turf/dist/es/index.js',
  //   output: {
  //     format: 'esm',
  //     sourcemap: false,
  //     file: 'dist/libs/@turf/turf.js'
  //   },
  //   external: ['object-assign'],
  //   plugins: [
  //     nodeResolve(),
  //     commonjs(),
  //     // replace({
  //     //   preventAssignment: false,
  //     //   values: {

  //     //   }
  //     // }),
  //     terser({ format: { comments: false }})
  //   ]
  // }
]
