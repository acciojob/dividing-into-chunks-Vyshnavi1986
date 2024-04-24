const arr = [1, 2, 3, 4, 1, 0, 2, 2];
function currentSubarray(arr, n) {
    const result = [];
    let currentSubarray = [];

    for (let i = 0; i < arr.length; i++) {
        // Check if adding the current element to the current subarray exceeds the maximum sum
        if (currentSubarray.reduce((acc, val) => acc + val, 0) + arr[i] <= n) {
            currentSubarray.push(arr[i]);
        } else {
            // If adding the current element exceeds the maximum sum, push the current subarray to the result
            result.push(currentSubarray);
            currentSubarray = [arr[i]]; // Start a new subarray with the current element
        }
    }

    // Push the last subarray to the result
    result.push(currentSubarray);

    return result;
}

const n = prompt("Enter n: ");
alert(JSON.stringify(currentSubarray(arr, n)));
