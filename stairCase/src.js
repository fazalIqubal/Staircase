function numOfWays( n, arr)
{
    let i, sum=0;
	if (n < 0)
		return 0;
	if (n == 0)
		return 1;
		
	for( i=0; i< arr.length; i++)
	{
	    sum = sum + numOfWays(n-arr[i], arr);
	}
	return sum;
}

function stepCount()
{
	let ways;
	let arr = [1, 3, 5];
    let len, i , n
    n =parseInt(prompt("Enter the length of stair"));
    let arrayString = prompt("Enter the number of steps. eg(1,3,5)")
    arr = arrayString.split(',');
	ways = numOfWays(n, arr);
	document.body.innerHTML = "Total number of ways to climb up the stair is: " + ways;
	console.log("Total number of ways %d", ways);
	return 0;
}

stepCount();