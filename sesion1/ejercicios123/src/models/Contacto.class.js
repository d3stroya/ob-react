/**
 * TODO: Componente A: Este componente va a tener un Contacto(crea una clase para ello), que va a contar con las siguientes características:Nombre: que será un String. Apellido: también un String. Email: de nuevo un String. Conectado: será un booleano que nos indicará si la persona está conectada o no.
 */

export class Contact {
    name = '';
    lastname = '';
    email = '';
    connected = false;

    constructor(name, lastname, email, connected) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.connected = connected;
    }
}