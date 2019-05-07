#!/bin/bash

# Disable host checking #
if [ ! -d $HOME/.ssh ]
then
    mkdir -p $HOME/.ssh
fi

touch $HOME/.ssh/config
echo "StrictHostKeyChecking no" >> $HOME/.ssh/config