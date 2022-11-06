from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import shutil
import os
import glob
import codecs

driver = webdriver.Chrome(ChromeDriverManager().install())
url = "https://www.data.go.kr/index.do"
driver.get(url)

element = driver.find_element(By.CLASS_NAME, 'input-text')
element.send_keys('학자금지원정보')
element.send_keys(Keys.ENTER)

file = driver.find_element(By.CLASS_NAME, "result-list").find_element(By.CSS_SELECTOR, "ul > li > div.bottom-area > a")
file.click()

time.sleep(10)

# 크롬에서 download한 파일이 떨어지는 경로 (개인마다 다를 것)
dest_dir = '/Users/gimminjae/Desktop/김민재/창업/python/selenium/archieve'

# glob.glob(r'[파일경로]') 에서의 파일경로 또한 본인 로컬에 archiving할 경로이기 때문에 입맛대로 설정해주면 됨
for file in glob.glob(r'/Users/gimminjae/Downloads/한국장학재단*'):
    if os.path.exists('/Users/gimminjae/Desktop/김민재/창업/python/selenium/archieve/' + os.path.basename(file)):
        print('File name ['  + os.path.basename(file) + '] is already existing, so delete recently downloaded file.')
        os.remove(file)
    else:
        print('File name [' + os.path.basename(file) + '] is archieved.')
        shutil.move(file, dest_dir)
        
        # BLOCKSIZE = 1048576 # or some other, desired size in bytes
        # with codecs.open('/Users/gimminjae/Desktop/김민재/창업/python/selenium/archieve/' + os.path.basename(file), "r", "CP949") as sourceFile:
        #     with codecs.open('/Users/gimminjae/Desktop/김민재/창업/python/selenium/archieve/test.csv', "w", "utf-8") as targetFile:
        #         while True:
        #             contents = sourceFile.read(BLOCKSIZE)
        #             if not contents:
        #                 break
        #             targetFile.write(contents)
