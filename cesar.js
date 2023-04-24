// Cifra de César

class Criptografar {
    constructor(text, key){
        this.message = text;
        this.key = key;
    }

    positionAsc(letter){
        const result = letter.charCodeAt(0);
        return result;
    }

    positionLetter(number){
        let result = '';
        if(number > 90){
            number = number - 26;
        }
        number - this.key === 32 ? result = " " : result = String.fromCharCode(number);
        return result;
    }

    run(){
        this.message = this.message.toUpperCase();
        let message = '';
        for(let i = 0; i < this.message.length; i++){
            const result = this.positionAsc(this.message[i]) + this.key;
            const resultLetter = this.positionLetter(result);
            message += resultLetter;
        }

        console.log(message);
        const descriptografarF = new Descriptografar(message, 1);
        //descriptografarF.run();
    }
}

class Descriptografar {
    constructor(text, key){
        this.message = text;
        this.key = key;
    }

    positionAsc(letter){
        const result = letter.charCodeAt(0);
        return result;
    }

    positionLetter(number){
        let result = "";
        if(number < 65 && number + this.key !== 32){
            number = number + 26;
        }
        number + this.key === 32 ? result = " " : result = String.fromCharCode(number);
        return result;
    }

    run(){
        let message = '';
        for(let j = 0; j < 26; j++){
            for(let i = 0; i < this.message.length; i++){
                const result = this.positionAsc(this.message[i]) - this.key;
                const resultLetter = this.positionLetter(result);
                message += resultLetter;
            }
            console.log(message, j+1)
            message = '';
            this.key++;
        }

        //console.log(message);
    }
}

const criptografar = new Criptografar("Testando a cifra de cesar", 5);
const descriptografar = new Descriptografar("ACCAG EAEET KXAAX RNNXS GDGNL SEXXP XMOEX LTKHS UAATE BEGXE OZTGC KEDMW XLZXE OXXXA HCVLS EM", 0);

//criptografar.run();
descriptografar.run();