#!/usr/bin/env bash


# Download swagger-codegen
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.34/swagger-codegen-cli-3.0.34.jar  -O swagger-codegen.jar

# Generate client
java -jar ./swagger-codegen.jar generate -l typescript-fetch -o gen-client -i ./openapi.yaml

# Generate server
java -jar ./swagger-codegen.jar generate -l nodejs-server -o gen-server -i ./openapi.yaml
