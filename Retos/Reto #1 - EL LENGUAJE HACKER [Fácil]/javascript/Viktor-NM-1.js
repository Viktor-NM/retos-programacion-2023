const letters = {
    a: '4',
    b: '8',
    c: '[',
    d: '|)',
    e: '£',
    f: 'ƒ',
    g: '6',
    h: '/-/',
    i: '1',
    j: '_|',
    k: '|<',
    l: '|',
    m: '^^',
    n: '^/',
    o: '0',
    p: '|*',
    q: '9',
    r: 'I2',
    s: '5',
    t: '7',
    u: '(_)',
    v: '|/',
    w: 'vv',
    x: '><',
    y: 'j',
    z: '2'
}
const numbers = {
    1: 'l',
    2: 'Z',
    3: 'E',
    4: 'A',
    5: 'S',
    6: 'b',
    7: 'T',
    8: 'B',
    9: 'g',
    0: 'o',
}

const replaceLetter = (character) => {
    if (character in letters) return letters[character]
    if (character in numbers) return numbers[character]
    return character
}

const args = process.argv[2];
const messageHacked = args.split('').map(character => replaceLetter(character)).join('')

console.log(messageHacked)