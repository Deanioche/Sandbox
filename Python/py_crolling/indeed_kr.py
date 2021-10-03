import requests
from bs4 import BeautifulSoup

LIMIT = 50
URL = f"https://kr.indeed.com/jobs?q=java&limit={LIMIT}"

def extract_indeed_pages():
  result = requests.get(URL)
  soup = BeautifulSoup(result.text, "html.parser")
  next_button = soup.find("a",{"aria-label":"다음"})


#페이지가 5페이지까지만 있고 next버튼이 생겨버리면서 귀찮아짐>> next를 찾고 끝까지 가봄

  start = 0 
  #URL에 표시될 게시글수, 1페이지는 start가 URL상에 없으므로 '0'으로 문제 없음
  start_int_list = [0] 
  count = 0

  while next_button:
    URL_last=f"https://kr.indeed.com/jobs?q=java&limit={LIMIT}&start={str(start)}"
    result_last = requests.get(URL_last)
    soup_last = BeautifulSoup(result_last.text, "html.parser")
    next_button = soup_last.find("a",{"aria-label":"다음"})
    count = count + 1

    #마지막 count로 페이지 숫자 계산(과거에는 한 페이지에서 마지막페이지를 알 수 있었는데 지금은 '다음'을 눌러봐야 마지막페이지를 알 수 있음. 따라서 '다음'이 안나올 때까지 출력하여 확인 )
    if next_button == None:
      break

#다음 버튼이 없을때까지 반복
    start = int(start) + 50 # 0 50 100 150...
    start_int_list.append(int(start/50)) 
    # 0(초기화시 생성, 이후 숫자는 상기 코드에서 추가) 1 2 3...

    #print(count) #0, 1, 2, 3....
    #last_pages = start_int_list[-1]
  return count
  #return start_int_list[-1]
    
  

def extract_indeed_jobs(last_page) :
  #page = 0
  jobs = [] #0, 1, 2, 3, 4....

  # while page < last_page:
  #   jobs.append(page)
  #   page = page + 1

  #for page in range(last_page):
  result = requests.get(f"{URL}&start={0*LIMIT}")
  print(result.status_code)
  soup = BeautifulSoup(result.text, "html.parser")
  results = soup.find_all("h2",{"class": "jobTitle"})
  # print(results)

  for result in results : 
    jobtitle = result.find("span")['title'].string
    # real_jobtitle = jobtitle.find("span",{'title'})
    print(jobtitle)
      
  return jobs