const numbers = [99,44,6,2,1,5,63,87,283,4,0]
console.log(`original: ${numbers} `)

function InsertionSort(arr: number[] ) {
   for (let i = 1; i < arr.length; i++) {
        if (arr [i] < arr[0]){
            const holding = arr .splice(i,1)
            arr.unshift(...holding)
        } else {
            if (arr[i] < arr[i-1]){
                for(let j = 1; j < i; j++) {
                    if(arr[1] >= arr[j-1] && arr[i] < arr[j]){
                        arr.splice(j,0,...arr.splice(i,1))
                    }
                }
            }
        }
   }
}
 
InsertionSort(numbers)
console.log(`InsertionSort: ${numbers} `)