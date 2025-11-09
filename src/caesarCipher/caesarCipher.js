
export default function caesarCipher(string, shift) {
    let stringArray = string.split('');
    let encryptedArray = [];
    
    stringArray.forEach(letter => {
        const charCode = letter.charCodeAt(0);
        let baseCode;
        
        if (charCode >=  65 && charCode <= 90) { //uppercase
            baseCode = 65;
        } else if (charCode >= 97 && charCode <= 122) { //lowercase
            baseCode = 97;
        } else {
            encryptedArray.push(letter);
            return;
        }

        const shiftedPosition = (((charCode - baseCode) + shift) % 26 + 26) % 26;
        const newLetter = String.fromCharCode(baseCode + shiftedPosition);
        encryptedArray.push(newLetter);
    });

    return encryptedArray.join('');
}