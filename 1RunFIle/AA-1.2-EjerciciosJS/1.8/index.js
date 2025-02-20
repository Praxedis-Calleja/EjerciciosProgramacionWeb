const objeto = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

//objeto.saludar();

objeto.descripcion = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Profesión: ${this.profesion}`);
};

objeto.descripcion();