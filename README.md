# Rust WebAssembly React Template
![Template Test & Build](https://github.com/Fallenstedt/wasm-react-webpack-template/workflows/Template%20Test%20&%20Build/badge.svg)

A slightly opinionated webpack build to start your next wasm project. 

## Setup

A simple 'yarn' and 'yarn start' should do the trick. File an issue if it doesn't!

`src` is where your rust code can go. `js` is where you can find your react :) 

## Optimizations

As of now wasm-pack can't compile on certain machines (like mac m1) if you don't disable optimizations. You can, however, perform the optimizations manually on the file using wasm-opt (which you'll need to install with brew on mac using the following command: `brew install binaryen`) like so:

- Optimize for size.
`wasm-opt -Os -o output.wasm input.wasm`

- Optimize aggressively for size.
`wasm-opt -Oz -o output.wasm input.wasm`

- Optimize for speed.
`wasm-opt -O -o output.wasm input.wasm`

- Optimize aggressively for speed.
`wasm-opt -O3 -o output.wasm input.wasm`

Note the output filename can and should be the same as the input filename (otherwise you're in for a headache renaming everything).