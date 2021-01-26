#!/bin/bash

build() {
    echo 'Building your extension created with ReactJs...'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-app-rewired build

    mkdir -p dist
    cp -r build/* dist

    cp -f src/background.js dist
}

build
