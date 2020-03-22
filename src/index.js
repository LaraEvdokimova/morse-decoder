const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let num;
    let test;
    let dot = '.';
    let dash = '-';
    let final = '';
    for (let i = 0; i < expr.length; i += 10) {
        let array = [];
        num = expr.slice(i, i + 10)
        if (num === '**********') {
            final = final + ' ';
            continue;
        }
        for (let j = 0; j < num.length; j += 2) {
            test = num.slice(j, j + 2)
            if (test === '10') {
                array.push(dot)
            }
            if (test === '11') {
                array.push(dash)
            }
        }
        final = final + MORSE_TABLE[array.join('')]

    }

    return final;
}

module.exports = {
    decode
}
