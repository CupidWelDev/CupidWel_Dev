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

## 2022년 12월 02일 금요일 수정사항
- DB 테이블 스키마 및 샘플 데이터가 변경되었기 때문에 아래 명령어 실행 이후 docker로 DB container를 띄우길 권장함


```
$ docker-compose down

$ docker image ls --> 이 과정에서 postgreSQL image와 관련된 image찾아 아래 명령어로 다 지우기

$ docker image rm postgres_pgadmin_postgre

$ docker-compose build --no-cache

% docker-compose up
```