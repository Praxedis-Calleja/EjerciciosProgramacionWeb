let cadena = "12345";

try {
    // Intenta convertir la cadena a un número
    let numero = parseInt(cadena);
    if (isNaN(numero)) {
        throw new Error("La cadena no se puede convertir a un número");
    }
    console.log("El número es:", numero);
} catch (error) {
    console.error("Se produjo un error:", error.message);
}


