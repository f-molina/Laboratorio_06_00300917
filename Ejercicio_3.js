function tipo(arreg = ['uno', 1, true,'dos','tres']){
    let tipos = [];
    let canti = [];
    arreg.forEach((ele,index)=>{
        
        if(!tipos.includes(typeof(ele))){
            tipos.push(typeof(ele));
            canti[index] = 0;        
        }
    }); 
    for(let i = 0; i<arreg.length;i++){
        let element = typeof(arreg[i]);
        for(let j = 0; j<arreg.length;j++){
            if(element == tipos[j]) canti[j]+=1;
        }
    }
    return [tipos,canti];
}

console.log(tipo());