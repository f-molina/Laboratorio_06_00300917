function ocurrencias(arreg,num){
    let cont=0;
    for(let i=0; i<arreg.length; i++){
        if(arreg[i]==num){
            cont+=1;
        }
    }
    return cont;
}

console.log(ocurrencias([1,2,3,3,3,1,3],2));