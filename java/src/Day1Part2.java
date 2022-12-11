import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Day1Part2 {
	public static void main(String[] args) throws FileNotFoundException {

		Path path = Paths.get("resources/day_1_input.txt");
		File file = new File(path.toAbsolutePath().toString());
		Scanner scan = new Scanner(file);

		int maxCals = 0;
		int sum = 0;
		ArrayList<Integer> calories = new ArrayList<Integer>();
		String input;

		while(scan.hasNextLine()){
			input = scan.nextLine();
			if(input.isEmpty()){
				calories.add(sum);
				sum = 0;
			}else{
				sum += Integer.parseInt(input);
			}
		}
		Collections.sort(calories);
//		System.out.printf("Most calories: %d\n", calories.get(calories.size()-1));
//		System.out.printf("2nd most calories: %d\n", calories.get(calories.size()-2));
//		System.out.printf("3rd most calories: %d\n", calories.get(calories.size()-3));
		int max3Cals = calories.get(calories.size()-1) + calories.get(calories.size()-2) + calories.get(calories.size()-3);
		System.out.printf("Calories carried amongst the top 3 elves: %d\n", max3Cals); // 206152
	}
}
