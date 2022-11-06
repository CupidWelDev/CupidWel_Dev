#!/bin/bash
set -o errexit

main() {
  init_cupidwel_db
}

init_cupidwel_db() {
  psql -U cupidwel -d cupidwel -a -f /docker-entrypoint-initdb.d/init.sql<<-EOSQL
EOSQL
}

main "$@"