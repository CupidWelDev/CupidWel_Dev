## Purpose: 공공 데이터 포털에 있는 장학금 데이터 크롤링

### 폴더구조
```
├── README.md
├── data_crawling_openAPI.xml ===> 자동화를 위한 nifi template
├── selenium
│   ├── archieve ===> 공공데이터 포털에서 받은 파일들을 저장하기 위한 폴더
│   │   └── 한국장학재단_학자금지원정보_20221014.csv 
│   ├── chromedriver ===> selenium을 사용하기 위한 chromedriver
│   ├── requirement.txt ===> 아래 python script를 돌리기 위한 pip list
│   ├── selenium_scholarship_data.py ===> data crawling script 개인환경에 맞게 수정 필요
│   └── start_crawling.sh ===> crawling을 실행시키는 script
└
```
