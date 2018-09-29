function batman(cad='lol0'){
    cad=cad.toLowerCase();
    for(let i=0; i<cad.length; i++){
        if(cad.charAt(i)=='0'){
            cad= cad.replace('0','m');
        }
        if(cad.charAt(i)=='1'){
            cad= cad.replace('1','u');
        }
        if(cad.charAt(i)=='2'){
            cad= cad.replace('2','r');
        }
        if(cad.charAt(i)=='3'){
            cad= cad.replace('3','c');
        }
        if(cad.charAt(i)=='4'){
            cad= cad.replace('4','i');
        }
        if(cad.charAt(i)=='5'){
            cad= cad.replace('5','e');
        }
        if(cad.charAt(i)=='6'){
            cad= cad.replace('6','l');
        }
        if(cad.charAt(i)=='7'){
            cad= cad.replace('7','a');
        }
        if(cad.charAt(i)=='8'){
            cad= cad.replace('8','g');
        }
        if(cad.charAt(i)=='9'){
            cad= cad.replace('9','o');
        }
        if(cad.charAt(i)=='m'){
            cad= cad.replace('m','0');
        }
        if(cad.charAt(i)=='u'){
            cad= cad.replace('u','1');
        }
        if(cad.charAt(i)=='r'){
            cad= cad.replace('r','2');
        }
        if(cad.charAt(i)=='c'){
            cad= cad.replace('c','3');
        }
        if(cad.charAt(i)=='i'){
            cad= cad.replace('i','4');
        }
        if(cad.charAt(i)=='e'){
            cad= cad.replace('e','5');
        }
        if(cad.charAt(i)=='l'){
            cad= cad.replace('l','6');
        }
        if(cad.charAt(i)=='a'){
            cad= cad.replace('a','7');
        }
        if(cad.charAt(i)=='g'){
            cad= cad.replace('g','8');
        }
        if(cad.charAt(i)=='o'){
            cad= cad.replace('o','9');
        }
    }
    return cad;
}

console.log(batman());