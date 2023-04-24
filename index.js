// Cifra de Vigenère com mais proteção

class Descriptografar {
    constructor(message, key, keyNumber){
        this.message = message;
        this.key = key;
        this.keyNumber = keyNumber;
    }

    position(letter){
        const asc = letter.charCodeAt(0);
        return asc;
    }

    positionResult(number){
        let result = '';
        const firstLetter = "A";
        const position = number + firstLetter.charCodeAt(0);
        const letter = String.fromCharCode(position);
        return result = letter;
    }

    run(){
        this.message = this.message.toUpperCase();
        this.key = this.key.toUpperCase();
        let message = '';
        let j = 0;
        let m = 0;

        for(let k = 0; k < this.keyNumber; k++){
            for(let i = 0; i < this.message.length; i++, j++){
                if(j === this.key.length){
                    j = 0;
                }
                const resultKey = this.position(this.key[j]);
                const resultMessage = this.position(this.message[i]);

                let result = Math.abs(resultKey - resultMessage);

                if(resultKey > resultMessage){
                    result = 26 - result;
                }

                if(resultMessage === 32){
                    message += " ";
                } else {
                    message += this.positionResult(result);
                }
            }

            if(m === 24){
                const keyArray = this.key.split("");
                keyArray.push(keyArray[0])
                keyArray.shift();
                this.key = keyArray.join("");
                m = 0;
            }

            m++;
            this.message = message;
            message = '';
            j = 0;
        }

        message = this.message;

        return message;
    }
}

class Criptografar {
    constructor(message, key, keyNumber){
        this.message = message;
        this.key = key;
        this.keyNumber = keyNumber;
    }

    position(letter){
        const asc = letter.charCodeAt(0);
        return asc;
    }

    positionResult(number){
        let result = '';
        const firstLetter = "A";
        const position = number + firstLetter.charCodeAt(0);
        const letter = String.fromCharCode(position);
        return result = letter;
    }

    run(){
        this.message = this.message.toUpperCase();
        this.key = this.key.toUpperCase();
        const key = this.key;
        let message = '';
        let j = 0;
        let m = 0;

        for(let k = 0; k < this.keyNumber; k++){
            for(let i = 0; i < this.message.length; i++, j++){
                if(j === this.key.length){
                    j = 0;
                }

                const resultKey = this.position(this.key[j]);
                const resultMessage = this.position(this.message[i]);

                let result = resultMessage + resultKey;
                result = result - "A".charCodeAt(0);

                result > 90 ? result = result - 26 : null;

                result = result - "A".charCodeAt(0);

                if(resultMessage === 32){
                    message += " ";
                } else {
                    message += this.positionResult(result);
                }
            }

            
            
            if(m === 24){
                const keyArray = this.key.split("");
                keyArray.push(keyArray[0])
                keyArray.shift();
                this.key = keyArray.join("");
                m = 0;
            }

            m++;
            this.message = message;
            message = '';
            j = 0;
        }

        message = this.message;

        const descriptografarF = new Descriptografar(message, key, this.keyNumber);
        //console.log(descriptografarF.run());
        return message;
    }
}

const descriptografar = new Descriptografar("GGSFT HGGSRMGC C DDX CZFFQLHOC", "acerola", 1734183);
const criptografar = new Criptografar("estou testando o meu algoritmo", "acerola", 1734183);

//console.log(descriptografar.run());
console.log(criptografar.run());