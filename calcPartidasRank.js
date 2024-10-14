function calcularRank(vit, der){
    let saldovit = vit - der
    let nivel = " "
    

if (vit < 10){
    nivel = "Ferro"
}
    else if (vit >= 11 && vit <= 20){
        nivel = "Bronze"
    }
    else if (vit >= 21 && vit <= 50){
        nivel = "Prata"
    }
    else if (vit >= 51 && vit <= 80){
        nivel = "Ouro"
    }
    else if (vit >= 81 && vit <= 90){
        nivel = "Diamante"
    }
    else if (vit >= 91 && vit <= 100){
        nivel = "Lendário"
    }
    else 
        nivel = "Imortal"

    return `O héroi tem um saldo de ${saldovit} está no nível de ${nivel}`;
}

const resultado = calcularRank(85, 23);
console.log(resultado)