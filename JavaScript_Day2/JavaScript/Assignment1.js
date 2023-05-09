let arrMax = [5,41,66,45,33,92,1050,101,20,0,1]
let maxValue = arrMax[0]

arrMax.forEach((element, index, arrMax) => {
if(maxValue<element)
maxValue=element
});
console.log(maxValue)