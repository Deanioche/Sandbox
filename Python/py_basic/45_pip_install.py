# pip 패키지 설치

# pip list 현재 설치된 패키지 리스트 출력
# pip show beautifulsoup4 beautifulsoup4의 정보 출력
# pip install --upgrade beautifulsoup4 버전 업그레이드
# pip uninstall beautifulsoup4 삭제

# 터미널에 pip install beautifulsoup4 
# 액세스 거부시  pip install --user beautifulsoup4 

from bs4 import BeautifulSoup
soup = BeautifulSoup("<p>Some<b>bad<i>HTML")
print(soup.prettify())