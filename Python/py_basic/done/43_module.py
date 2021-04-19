# 모듈
# 코드를 부품처럼 나누어 유지보수 수월하게

import module_for_43

module_for_43.price(3)

import module_for_43 as mv # 별명 지정

mv.price_morning(4)

from module_for_43 import * # 해당 모듈의 모든 함수 사용

price_soldier(10)

from module_for_43 import price, price_morning # 해당 함수만 사용 soldier는 사용 불가

price(15)

from module_for_43 import price_soldier as ps # soldier 함수만 import 해 ps로 사용
ps(50000)