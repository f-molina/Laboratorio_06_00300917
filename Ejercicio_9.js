function arrrand(num=9){
    let arreg =[];
    for(let i=0; i<20; i++){
        arreg.push(Math.floor((Math.random() * 100) + 1));
    }
    if(arreg.includes(num)){
        console.log(`Gano`);
    }
    else{
        console.log(`Game Over`);
    } 
}

arrand();