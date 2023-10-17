#!/usr/bin/env bash

source "./config.sh"

if [ ! -d "$TO" ]
  then mkdir "$TO"
fi

cat "$INC/version.txt" "$FROM/script.js" > "$TO/$OUTPUT"
