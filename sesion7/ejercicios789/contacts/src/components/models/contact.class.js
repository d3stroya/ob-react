export class Contact {
    name = '';
    lastname = '';
    mobile = '';
    email = '';
    connected = false
    image = ''

    constructor(name, lastname, mobile, email, connected, image) {
        this.name = name
        this.lastname = lastname
        this.mobile = mobile
        this.email = email
        this.connected = connected
        this.image = image
    }
}