#!/usr/bin/env bash

# Stress dynamic route

for i in {1..500}; do 
  http "http://localhost:3000/thing/51$i/" & 
  http "http://localhost:3000/thing/51$i/" &
  http "http://localhost:3000/thing/59$i/"
done

