function promedio(arr = [1,2,3,4]){
    let sumat = 0;
    let prom = 0;
    arr.forEach((elemento)=>{
        sumat+=elemento;
    });
    prom = sumato / arr.length;
    return [sumat,prom];
}
console.log(promedio());