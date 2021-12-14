import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

public class ChatServer {

	private ServerSocket svSocket;
	private List<ChatHandler> clist;

	public ChatServer() {

		try {
			svSocket = new ServerSocket(9500); // 포트
			System.out.println("# 서버 준비 완료");
			
			clist = new ArrayList<ChatHandler>();

			while (true) {
				System.out.println("소켓 생성");
				
				Socket socket = svSocket.accept();
				
				ChatHandler handler = new ChatHandler(socket, clist);
				handler.start();
				
				clist.add(handler);
				System.out.println("생성된 리스트 개수 : " + clist.size());
				
				// handler 객체 안에서 스레드를 돌린다.
			
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		new ChatServer();
	}

}
