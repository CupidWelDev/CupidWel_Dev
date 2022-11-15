## Prerequisite
1. docker desktop 설치

<hr>

## After install docker desktop

1. docker volume 생성
```
$ docker volume create cupidwel-postgres-volume
```

2. docker network 생성

```
$ docker network create cupidwel-bridge
```

3. docker container 실행
```
$ cd {docker-compose file이 있는 경로}
$ docker-compose up -d
```

4. table 초기화
```
< postgreSQL docker container에 attach >

$ docker exec -it cupidwel_postgres sh


<container 내부에서 관리자 계정으로 로그인>

$ su -

<초기화시키는 shell script 실행>

$ cd /docker-entrypoint-initdb.d/
$ ./init.sh
```

## Docker container check

1. docker ps 명령어로 container가 정상적으로 떴나 확인
```
$ docker ps 
```

2. localhost:8090 (pgadmin) 페이지에 접속되는 것 확인
  - 접속 정보
    - pgadmin
      - id: cupidwel@gmail.com
      - pw: cupidwel123!
    - postgre
      - id: cupidwel
      - pw: cupidwel123!