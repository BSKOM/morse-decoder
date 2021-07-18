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

    const arr = expr.split('')
    const okey = Object.keys(MORSE_TABLE)
    const oval = Object.values(MORSE_TABLE)
    let acc = ''
    let sarr = []
    let marr = []
 
    for (let i = 0; i < arr.length; i++) {
      acc += arr[i]
      if (((i + 1) % 10) === 0) {

        sarr[sarr.length] = acc.substring(acc.indexOf('1')).
          replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ')
        acc = ''
      }
    }
    for (let i = 0; i < sarr.length; i++) {
      let n = okey.indexOf(sarr[i])
      if (n >= 0) {
        marr[i] = oval[n]
      } else {
        marr[i] = sarr[i]
      }
    }
    return marr.join('')
 
}

module.exports = {
    decode
}