#!/bin/bash
# This is a temp upload. Will need to update later to either the offical bucket or wherever UW tells us to upload
env
aws s3 sync WakeWebsite/ s3://wakemirror
