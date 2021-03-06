

let arr = [1 ,2 ,4,6,9,10 , 12,36,78,89]
let findTargetSum = (target)=>{
    let outputArr = []
    for(let i =0;i< arr.length ; i++){ // iterate till last index of arr
        let isSum = 0;
        for(let j =i +1 ; j<arr.length ; j++){//iterate from i + 1 to last index
            if(target == (arr[i] + arr[j]))//if it matches
            {
                outputArr.push(i) 
                outputArr.push(j) 
                isSum = 1
                break
            }
            if(target < (arr[i] + arr[j])) // if target < arr[i] + arr[j] then break the loop
            break
        }
        if(isSum > 0) // found and break the loop
       {
        return outputArr
       } 
   
    }
    return `Invalid number!` // If not found
}

let target = 13;
let output =findTargetSum(target)
console.log(output)
