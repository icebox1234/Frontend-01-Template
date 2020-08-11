// var stdin = process.stdin;

// stdin.setRawMode(true);
// stdin.resume();
// stdin.setEncoding('utf8');

// stdin.on('data', function (key) {
//     if (key === '\u0003') {
//         process.exit();
//     }
//     process.stdout.write(key.toString().charCodeAt().toString());
// });

var tty = require('tty');
var ttys = require('ttys');
var rl = require('readline');

var stdin = ttys.stdin;
var stdout = ttys.stdout;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

function up(n = 1) {
    stdout.write('\033[' + n + 'A');
}

function down(n = 1) {
    stdout.write('\033[' + n + 'B');
}

function left(n = 1) {
    stdout.write('\033[' + n + 'D');
}

function right(n = 1) {
    stdout.write('\033[' + n + 'C');
}

async function getChar() {
    return new Promise(resolve => {
        stdin.once('data', function (key) {
            resolve(key);
        })
    })
}

void async function () {
    stdout.write('which frame?\n')
    let frame = await select(['vue', 'react', 'angular']);
    stdout.write(`${frame}`);
    process.exit();
}();

async function select(choices) {
    let selected = 0;
    for (let i = 0; i < choices.length; ++i) {
        if (i === selected) {
            stdout.write(`[x] ${choices[i]}\n`);
        } else {
            stdout.write(`[ ] ${choices[i]}\n`);
        }
    }
    up(choices.length);
    right(1);
    while (true) {
        let char = await getChar();
        if (char === '\u0003') {
            process.exit();
            break;
        }
        if (char === 'w' && selected > 0) {
            stdout.write(' ');
            left();
            selected--;
            up();
            stdout.write('x');
            left();
        }
        if (char === 's' && selected < choices.length - 1) {
            stdout.write(' ');
            left();
            selected++;
            down();
            stdout.write('x');
            left();
        }
        if (char === '\r') {
            down(choices.length - selected);
            left();
            return choices[selected];
        }
    }
}

