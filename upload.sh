#!/bin/bash
# This is a temp upload. Will need to update later to either the offical bucket or wherever UW tells us to upload
cd WakeWebsite
aws s3 sync dist/WakeWebsite/ s3://${WEBSITE} --delete
cd ..
