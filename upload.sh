#!/bin/bash
set -e
cd WakeWebsite
aws s3 sync dist/WakeWebsite/ s3://pi --delete
cd ..
