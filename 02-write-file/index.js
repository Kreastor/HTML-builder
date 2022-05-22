const path = require('path');
const fs = require('fs');
const textFile = fs.createWriteStream(path.join(__dirname, 'text.txt'));


// https://nodejsdev.ru/api/readline/#querystringescapestr
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

function writeInTextFile() {
    rl.question('Введите текст\n', (answer) => {
        if (answer === 'exit') {
            return rl.close(); 
        }
        textFile.write(`${answer}\n`);
        writeInTextFile(); 
    });
};

process.on('exit', () => {
    console.log('Выводится прощальная фраза и процесс завершается');
});


writeInTextFile();
