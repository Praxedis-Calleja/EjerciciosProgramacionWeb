import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
{
 
    name: 'url',
    message: 'Escribe tu correo de github:',
},
  ])
  .then((answers) => {
    console.log(answers);
    const enlace = answers.url;
  var qr_png = qr.image(enlace);
  qr_png.pipe(fs.createWriteStream('qr-image.png'));

  fs.writeFileSync('enlace.txt', enlace, (err) => {

    if (err) throw err;
      console.log("El el enlace se guardo en el archivo correctamente");
      
    

  }
  );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
  

//qr.image('  ', { type: 'png' }).pipe(require('fs').createWriteStream('qr.png'));    // Save QR code to a file