let numbers = [6, -6, 10, 223, 77, 22];

let a = numbers.reduce((i,j)=>{
    if(i<j)
    return i
    else 
    return j
})

console.log(a)


