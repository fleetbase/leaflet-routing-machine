// rollup.config.js
import { terser } from 'rollup-plugin-terser';
// import { eslint } from 'rollup-plugin-eslint';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const input = ['src/index.js'];
const globals = {
    leaflet: 'L',
    '@mapbox/corslite': 'corslite',
    '@mapbox/polyline': 'polyline',
    'osrm-text-instructions': 'getOsrmTextInstructions'
};

export default [
    {
        // umd
        input,
        plugins: [
            nodeResolve({
                browser: true,
                modulesOnly: true,
            }),
            babel({
                babelHelpers: 'bundled',
            }),
            terser(),
        ],
        output: [
            {
                file: `dist/${pkg.name}.min.js`,
                format: 'umd',
                name: 'leaflet-routing-machine',
                esModule: false,
                exports: 'named',
                sourcemap: true,
                globals,
            },
        ],
        watch: {
            exclude: ['node_modules/**'],
            include: ['lib/**'],
        },
        external: ['@mapbox/corslite', '@mapbox/polyline', 'osrm-text-instructions', 'leaflet'],
    },
    {
        // esm and cjs
        input,
        plugins: [
            nodeResolve({
                browser: true,
                modulesOnly: true,
            }),
            babel({
                babelHelpers: 'bundled',
            }),
            terser(),
        ],
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                exports: 'named',
                sourcemap: true,
                globals,
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                exports: 'named',
                sourcemap: true,
                globals,
            },
        ],
        external: ['@mapbox/corslite', '@mapbox/polyline', 'osrm-text-instructions', 'leaflet'],
    },
];
