var persona = []

function usuario(n,a,dob,tel,email){
    let obj={
        nombre: n,
        apellido : a,
        fechaNac : dob,
        numeroTel: tel,
        correo: email
    }
    people.push(obj);
    return persona;
}

console.log(usuario('Lol','lmao','01/01/45',22577777,'123arroba'));