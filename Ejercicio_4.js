function extremos(arr = [3,2,1]){
    for(let i = 0; i<(arr.length / 2) ; i++){
        console.log(arr[i] + arr[(arr.length-1) - i]);
    }

}

extremos();