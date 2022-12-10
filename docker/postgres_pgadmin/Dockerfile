FROM postgres:14.6

ADD ./init /docker-entrypoint-initdb.d/

## dos line end -> linux line end
RUN chmod a+x /docker-entrypoint-initdb.d/init-db.sh

EXPOSE 5432