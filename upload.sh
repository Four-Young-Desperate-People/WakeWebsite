#!/bin/bash
# This is a temp upload. Will need to update later to either the offical bucket or wherever UW tells us to upload
cd WakeWebsite
npm install
ng build
aws s3 sync dist/WakeWebsite/ s3://wakemirror --delete
cd ..