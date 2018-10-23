#!/bin/sh

PROTOC_GEN_TS_PATH='./node_modules/.bin/protoc-gen-ts'

INPUT_DIR=$1

OUTPUT_DIR=$2

protoc \
    --plugin="protoc-gen-ts=$PROTOC_GEN_TS_PATH" \
    --js_out="import_style=commonjs,binary:$OUTPUT_DIR" \
    --ts_out="service=true:$OUTPUT_DIR" ${INPUT_DIR}/*.proto