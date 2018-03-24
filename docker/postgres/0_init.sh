#!/bin/bash
set -e

createdb --username "$POSTGRES_USER" tweetch_development
