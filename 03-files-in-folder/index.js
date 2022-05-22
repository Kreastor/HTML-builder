const path = require('path');
const fs = require('fs');
const way = path.join(__dirname, 'secret-folder');

fs.readdir(way, (err, files) => {
    if (err) {
        console.log(err);
    };
    for (let file of files) {
        fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
        if (err) {
            console.log(err);
        };
        if (!stats.isDirectory()) {
            const name = path.basename(file, path.extname(file));
            console.log( `${name} - ${path.extname(file).slice(1)} - ${stats.size}b`);
        };
        });
    }
});


/* 
    fs.readdir - fs.readdir(path[, options], callback)-  Читает содержимое каталога. Обратный вызов получает два аргумента (err, files) куда files представляет собой массив имен файлов в каталоге, исключая '.' а также '..'. 
    https://nodejsdev.ru/api/fs/#fsreaddirpath-options-callback
*/

/* 
    fs.stat - fs.stat(path[, options], callback) - Асинхронная статистика (2). Обратный вызов получает два аргумента (err, stats) куда stats является объектом {fs.Stats}.
    https://nodejsdev.ru/api/fs/#fsstatpath-options-callback

    Используется для возврата информации о данном файле или каталоге. Он возвращает fs.Объект Stat, который имеет несколько свойств и методов для получения подробной информации о файле или каталоге.
    https://www.geeksforgeeks.org/node-js-fs-stat-method/
*/

/* 
    stats.isDirectory() - метод представляет собой встроенный интерфейс прикладного программирования класса fs.Stats, который используется для проверки того, описывает ли объект fs.Stats каталог файловой системы или нет
    https://www.geeksforgeeks.org/node-js-stats-isdirectory-method-from-fs-stats-class/

    Возврат true если объект {fs.Stats} описывает каталог файловой системы.
    https://nodejsdev.ru/api/fs/#_1
*/

/*
    path.basename - path.basename(path[, ext]) - метод возвращает последнюю часть path. Конечные разделители каталогов игнорируются.
    Примеры:
    path.basename('/foo/bar/baz/asdf/quux.html');
    // Returns: 'quux.html'

    path.basename('/foo/bar/baz/asdf/quux.html', '.html');
    // Returns: 'quux'
    https://nodejsdev.ru/api/path/
*/


/*
    path.extname - метод возвращает расширение пути, начиная с последнего вхождения "." символ до конца строки в последней части пути. Если нет "." в последней части пути, или если нет . символов отличных от первого символа базового имени пути - возвращается пустая строка.

    Примеры 
    path.extname('index.html');
    // Returns: '.html'

    path.extname('index.coffee.md');
    // Returns: '.md'

    path.extname('index.');
    // Returns: '.'

    path.extname('index');
    // Returns: ''

    path.extname('.index');
    // Returns: ''

    path.extname('.index.md');
    // Returns: '.md'
    
    https://nodejs.org/api/path.html#path_path_extname_path
    */


