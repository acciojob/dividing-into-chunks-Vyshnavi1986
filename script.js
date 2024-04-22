const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	// Pick a starting point
	let n=5;
    for (let i = 0; i < n; i++)
	{
        let currentSum = arr[i];
 
        if (currentSum == sum) 
		{
            console.log("Sum found at indexes " +i);
            return;
        }
        else {
            // Try all subarrays starting with 'i'
            for (let j = i + 1; j < n; j++) {
                currentSum =currentSum+" "+ arr[j];
 
                if (currentSum == sum) {
                    console.log("Sum found between indexes "
                         + i + " and " +j);
                    return;
                }
            }
        }
    }
    console.log("No subarray found");
    return;
};

/const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
