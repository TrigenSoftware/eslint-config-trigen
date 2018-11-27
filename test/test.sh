#!/bin/bash

output=$(eslint valid.js)

if [[ $? -ne 0 ]]; then
	echo "valid.js doesn't passed checking."
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi

output=$(eslint invalid.js)

if [[ $? -ne 1 ]]; then
	echo 'invalid.js passed checking.'
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi
