const http = require('http');

/**
 * req -> lo que nos solicitan
 * res -> lo que responderemos al client
 */
http.createServer((req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); // Asignamos un nombre al archivo que se descargara cuando acceasmos a esa url
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hola mundo');
    // res.write('id, nombre\n');
    // res.write('1, will\n');
    // res.write('2, fernando\n');
    // res.write('3, json\n');
    res.end();
})
    .listen(5000);

console.log('Escuchando en el puerto 5000');



