"use strict"

let phrase = 'La programación web es fundamental para el progres';
let words = phrase.split(' ');
alert(words.map(item => item.length));
let goku = words.filter(item => item.length > 3);
alert(goku);