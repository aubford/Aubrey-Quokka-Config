#!/usr/bin/env bash

QUOKKAPS=$(lsof -i :9229 -t)

if [[ ${QUOKKAPS} ]]; then
    echo ${QUOKKAPS} > /Users/aubreyford/.quokka/output.txt
    kill -9 ${QUOKKAPS}
fi;



