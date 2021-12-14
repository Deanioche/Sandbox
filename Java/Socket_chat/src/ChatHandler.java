import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.List;

public class ChatHandler extends Thread {

	private Socket socket;
	private List<ChatHandler> list;

	private BufferedReader br;
	private PrintWriter pw;
	
	public ChatHandler(Socket socket, List<ChatHandler> list) {

		this.socket = socket;
		this.list = list;

		try {
			br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			pw = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));

		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public void run() {

		String line;
		
		// 닉네임 받는 쪽
		try {
			
			String nickName = br.readLine();

			// 모든 클라이언트에게 보내기
			broadCast(nickName + "님이 입장했습니다.");

			while(true) {
				
				line = br.readLine(); 

				// 종료
				if(line == null || line.toLowerCase().equals("quit")) {
					break;
				
				}

				// 별찍기
				if(line.toLowerCase().equals("star")) {
					
					for (int i = 1; i <= 5; i++) {

						String star = new String();

						//공백을 담당하는 j for 문
						for (int j = 5; j > i; j--) {

							star += " ";

						}

						//별을 담당하는 k for 문
						//5번의 별의 갯수는 2 * i - 1개 만큼의 별이 각 줄에 들어가게 된다.
						for (int k = 0; k < i * 2 - 1; k++) {

							star += "*";

						}

						broadCast(star);

					}
				
				}
				
				//메세지를 모든 클라이언트에게 보내기
				broadCast("[" + nickName + "]" + line);
				
			}//while
			
			// quit을 보낸 클라이언트에게 quit을 보내기
			pw.println("quit");
			pw.flush();
			
			// 남을 클라이언트에게 퇴장메세지 보내기
			list.remove(this); // 현재 handler를 list에서 지움
			broadCast(nickName + "님이 퇴장하였습니다.");
			
			br.close();
			pw.close();
			socket.close();
			

		} catch (IOException e) {
			e.printStackTrace();
		}

	}// run()

	public void broadCast(String msg) {

		for (ChatHandler handler : list) {
			
			handler.pw.println(msg); 
			handler.pw.flush();
			
		}
	}
}
