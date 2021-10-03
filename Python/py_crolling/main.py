#from indeed import extract_indeed_pages, extract_indeed_jobs
from indeed_kr import extract_indeed_pages, extract_indeed_jobs

last_indeed_page = extract_indeed_pages()
#생략된 결과를 포함하여 재검색을 클릭하면 20페이지 출력
print(last_indeed_page)

indeed_jobs = extract_indeed_jobs(last_indeed_page)
#print(indeed_jobs)