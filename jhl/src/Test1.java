public class Test1{
	public static void main(String args[]) {		
		for(int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }
		
		// test && 
		int a = 1;
		int b = 5;	
		
		if(a >= 1 & a <= 5) {
			System.out.println("ok");
		}else {
			System.out.println("ko");
		}
		
		if(a >= 1 || a < 1) {
			System.out.println("ok");
		}else {
			System.out.println("ko");
		}
		
		String str = "Hello";
		
		if(str.equals("hello")) {
			System.out.println("ok str equal");
		}else {
			System.out.println("ko EQUAL");
		}
		
		// TEST WHILE 
		System.out.println("###############Test while#############");
		int nb = 2;
		int i=0;
		while(i  < nb) {
			System.out.println("Item while = " + i);
			i++;
		}
		
		// TEST WHILE 
		System.out.println("###############Test boucle for#############");
		for(int item = 0; item< 3; item++) {
			System.out.println("Item for = " + item);
		}
		
	}
}