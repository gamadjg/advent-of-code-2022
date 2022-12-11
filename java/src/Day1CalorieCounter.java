import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.Scanner;

public class Day1CalorieCounter {
	public static void main(String[] args) throws FileNotFoundException {

		Path path = Paths.get("resources/day_1_input.txt");
		File file = new File(path.toAbsolutePath().toString());
		Scanner scan = new Scanner(file);

		int maxCals = 0;
		int sum = 0;
		String input;

		while(scan.hasNextLine()){
			input = scan.nextLine();
			if(input.isEmpty()){
				System.out.println(sum);
				sum = 0;
			}else{
				sum += Integer.parseInt(input);

				if(maxCals < sum){
					maxCals = sum;
				}
			}
		}
		System.out.println(maxCals);
	}
}
