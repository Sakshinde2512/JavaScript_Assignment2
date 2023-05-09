arr=[4,4,4,7,3]
 
let sum=0
function sumEvens(a){

    arr.forEach(
        (element,index, arr) => {
            if(element%2==0){
                sum=sum+element
                return sum
            }
        
    });
}

let sum1 = sumEvens(arr);
console.log(sum)
