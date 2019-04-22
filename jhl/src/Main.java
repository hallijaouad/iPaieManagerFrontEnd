
public class Main{
	public static void main(String args[]) {
		
		for(int i=0;i<=99;i++) {
			System.out.println("Nombre d : " + i);
		}
		
		Student st = new Student("HALLI JAOUAD", 1);
		
		System.out.println("Student : " + st.getName());
	}
}