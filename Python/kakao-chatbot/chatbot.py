import time, win32con, win32api, win32gui

# # 카톡창 이름 (열려있는 상태, 최소화 X, 창뒤에 숨어있는 비활성화 상태 가능)
kakao_opentalk_name = '톡방 이름'


def kakao_sendtext(text):
    win32api.SendMessage(hwndEdit, win32con.WM_SETTEXT, 0, text)
    SendReturn(hwndEdit)


# 엔터
def SendReturn(hwnd):
    win32api.PostMessage(hwnd, win32con.WM_KEYDOWN, win32con.VK_RETURN, 0)
    time.sleep(0.01)
    win32api.PostMessage(hwnd, win32con.WM_KEYUP, win32con.VK_RETURN, 0)

'''
def timer(sec, command):
    kakao_sendtext(command)
    for i in range(sec):
        print("남은시간 : ", (sec - i))
        time.sleep(1)
'''

# 핸들
hwndMain = win32gui.FindWindow(None, kakao_opentalk_name)
hwndEdit = win32gui.FindWindowEx(hwndMain, None, "RICHEDIT50W", None)
hwndListControl = win32gui.FindWindowEx(hwndMain, None, "EVA_VH_ListControl_Dblclk", None)

# 보낼 메세지
text = 'ㅗ'

while(1):
    kakao_sendtext(text)
    time.sleep(0.3)