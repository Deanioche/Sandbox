import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.ScrollPaneConstants;

public class ChatClient extends JFrame implements Runnable, ActionListener {
	private JTextField input;
	private JButton send;
	private JTextArea output;

	private Socket socket;
	private BufferedReader br;
	private PrintWriter pw;

	public ChatClient() {
		output = new JTextArea();
		JScrollPane scroll = new JScrollPane(output);
		scroll.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		output.setEditable(false);

		input = new JTextField();

		send = new JButton("보내기");

		JPanel p = new JPanel();
		p.setLayout(new BorderLayout());
		p.add("Center", input);
		p.add("East", send);

		Container con = this.getContentPane();
		con.add("Center", scroll);
		con.add("South", p);

		setBounds(700, 200, 300, 300);
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				pw.println("quit");
				pw.flush();
			}
		});

	}// ChatClient()

	public void service() throws IOException {
		// 서버IP
		// String serverIP = JOptionPane.showInputDialog(this,
		// "서버IP를 입력하세요",
		// "서버IP",
		// JOptionPane.INFORMATION_MESSAGE);
		String serverIP = JOptionPane.showInputDialog(this, "서버IP를 입력하세요", "192.168.43.193");
		if (serverIP == null || serverIP.length() == 0) {
			System.out.println("서버 IP가 입력되지 않았습니다.");
			System.exit(0);
		}

		// 닉네임
		String nickName = JOptionPane.showInputDialog(this, "닉네임을 입력하세요", "닉네임", JOptionPane.INFORMATION_MESSAGE);
		if (nickName == null || nickName.length() == 0) {
			nickName = "guest";
		}

		try {
			socket = new Socket(serverIP, 9500);
			br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			pw = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));

		} catch (UnknownHostException e) {
			e.printStackTrace();
			System.out.println("서버를 찾을 수 없습니다.");
			System.exit(0);

		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("서버와 연결이 되지 않았습니다.");
			System.exit(0);
		}
		// 서버로 닉네임 보내기
		pw.println(nickName);
		pw.flush();

		// 스레드 생성
		Thread t = new Thread(ChatClient.this); // 실행하려는 클래스 주소 입력
		t.start();

		// 이벤트
		send.addActionListener(this);
		input.addActionListener(this); // JTextField에서 엔터 단축키

	}// Service()

	public static void main(String[] args) throws IOException {
		new ChatClient().service();

	}

	@Override
	public void run() {
		// 서버로부터 받는 쪽
		String line;

		while (true) { // 내가 빠져나가지 않는 한, 데이터를 계속 받는다.

			try {

				line = br.readLine();

				if (line == null || line.toLowerCase().equals("quit")) {
					br.close();
					pw.close();
					socket.close();

					System.exit(0);
				}

				output.append(line + "\n");

				// int pos = output.getText().length();
				output.setCaretPosition(output.getText().length());

			} catch (IOException e) {
				e.getStackTrace();
			}

		}

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// 서버로 보내는 쪽

		String msg = input.getText();

		// PrintWriter 클래스는 Println으로 입력
		pw.println(msg);

		pw.flush();
		input.setText(""); // 텍스트필드 초기화

	}

}
