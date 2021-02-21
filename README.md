Header 1 {#header1}
========

## Header 2 ##      {#header2}
[To 20210201](#-20210201)

# <hr>


# # 20210203

### # 메인페이지 fullpage 플러그인 작업
        전체 페이지에 div id="fullpage" 걸고
        페이지마다 class="section" 입력한다.

### # 메인페이지 템플릿 CSS / JS 정리작업
        여러 템플릿과 플러그인 사용으로 리소스가 겹쳐 문제가 발생해 해결중

### # 메인페이지 로고 삽입

### # 페이지 배경 동영상 제작

### # TODO
        회원가입에 마스크 검색 태그 js 작업
        마스크 목록 페이지
        로딩화면

    # 디자인 Todo
        로그인 ,회원가입 이미지 수정

# <hr>

# # 20210202
## # 오류

## # TODO
        네비 바 회원가입, 로그인 선택시 폰트 색상 화이트로 고치기
        회원가입에 마스크 검색 태그 넣기
        페이지 스크롤 넣기
        마스크 목록 페이지
        로딩화면

### # 디자인 Todo
        로고 고치기
        배경 고르기
        로그인 ,회원가입 이미지 수정

####
    # Flat UI
        https://designmodo.github.io/Flat-UI/

    # css 선택자와 placeholder-shown을 이용한 검색버튼 표시 기능
        https://codepen.io/soksurim/pen/ExNjpbr

# <hr>

# # 20210201
## # 오류
####
        Q. include 시킨 jsp파일의 한글이 깨짐
        A. web.xml에 추가
            <jsp-config>
                <jsp-property-group>
                    <url-pattern>*.jsp</url-pattern>
                    <page-encoding>UTF-8</page-encoding>
                </jsp-property-group>
            </jsp-config>
####    
        A.div에 name태그는 달리지 않는다.
## # TODO
        네비 바 회원가입, 로그인 선택시 폰트 색상 화이트로 고치기
        회원가입에 마스크 검색 태그 넣기
        페이지 스크롤 넣기
        마스크 리스트 페이지

    # 디자인 Todo
        로고 고치기
        배경 고르기
        로그인 ,회원가입 이미지 수정

####
    # 섀도우 DOM
        - shadow DOM을 이용하면 style이 글로벌이 아닌 원하는 부분만 적용되게 할 수 있다.

        document.body.appendChild(document.createElement('div')).innerHTML
        = '<style>div { background-color: #82b74b; }</style><div>Make me green!</div>';

        // 위와 같은 코드
        document.body.appendChild(document.createElement('div'))
        .attachShadow({mode: 'open'})
        .innerHTML = '<style>div { background-color: #82b74b; }</style><div>Make me green!</div>';

        첫번째 코드는 <style> 태그 안의 속성이 html 페이지 전역에 적용되지만
        두번째 .attachShadow와 함께 작성된 코드는 #shadow-root (open)안의 엘레먼트에만 적용된다.
        즉, 섀도우 루트를 기준으로 안팎의 id 또는 class가 중복되어도 각각 다른 역할을 수행한다.
        https://kyu.io/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B83%E2%80%8A-%E2%80%8A%EC%89%90%EB%8F%84%EC%9A%B0-%EB%8F%94shadow-dom/

# <hr>
