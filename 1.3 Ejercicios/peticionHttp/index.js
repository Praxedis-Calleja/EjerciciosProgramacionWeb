import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/registro', (req, res) => {
  res.sendStatus(201);

});

app.put('/usuario/actualizar', (req, res) => {
  res.sendStatus(200);

  res.send('Usuario actualizado');
});

app.patch('/usuario/modificar', (req, res) => {
  res.sendStatus(200);
  res.send('Usuario ELIMINADO');
}   );
app.delete('/usuario/eliminar', (req, res) => {
  res.sendStatus(200);
  res.send('Usuario eliminado');
});


app.listen(port, () => {
    console.log(`Ejecutantose el servidor http://localhost:${port}`);
});
