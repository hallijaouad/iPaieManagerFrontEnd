public class Student{
	private String name = null;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	private int num = 0;
	
	public Student() {
		
	}
	// construct
	public Student(String n, int nu){
		this.name = n;
		this.num = nu;
	}
	
	
}

