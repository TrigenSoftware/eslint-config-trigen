#!/bin/bash

check_validity() {

	if [[ $? -ne 0 ]]; then
		echo "$2"
		echo "$1"
		exit 1
	fi

	if [[ $output == *'deprecat'* ]]; then
		echo 'Contains deprecated rule.'
		echo "$1"
		exit 1
	fi
}

check_invalidity() {

	if [[ $? -eq 0 ]]; then
		echo "$2"
		echo "$1"
		exit 1
	fi

	if [[ $output == *'deprecat'* ]]; then
		echo 'Contains deprecated rule.'
		echo "$1"
		exit 1
	fi
}

check_validity "$(eslint valid.js)" "valid.js doesn't passed checking."

check_invalidity "$(eslint invalid.js)" "valid.js doesn't passed checking."

check_validity "$(eslint commonjs/valid.js)" "commonjs/valid.js doesn't passed checking."
