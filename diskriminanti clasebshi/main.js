class dsc {
    constructor(a = 1, b = 0, c = 0) {
        this.put(a, b, c);
    }
    put(a, b, c) {
        this.putA(a);
        this.putB(b);
        this.putC(c);
    }
    scan(x) {
        return (Number.isFinite(x)) ? true : false;
    }
    putA(a = 1) {
        if (this.scan(a)) {
            if (a != 0) {
                this.a = a;
            } else {
                this.a = 1;
            }
        } else {
            this.a = 1;
        }
    }
    putB(b = 0) {
        if (this.scan(b)) {
            this.b = b;
        } else {
            this.b = 0;
        }
    }
    putC(c = 0) {
        if (this.scan(c)) {
            this.c = c;
        } else {
            this.c = 0;
        }
    }

    Displayroot() {
        let d = this.b * this.b - 4 * this.a * this.c;
        let x, x2;
        console.log(`d = ${d}`);
        if (d < 0) {
            console.log(`არ აქვს ამონახსნი`)
        } else if (d > 0) {
            x = (-this.b + Math.sqrt(d)) / (2 * this.a);
            x2 = (-this.b - Math.sqrt(d)) / (2 * this.a);
            console.log(`x = ${x}, x2 = ${x2}`);
        } else {
            let x = -this.b / (2 * this.a);
            console.log(`როდესაც დისკრიმინანტი უდრის 0ს, ორი ერთნაირი ამონახსნი აქვს. x1 = x2 = ${x}`);
        }
    }
}

function put(a, b, c) {
    let discriminant = new dsc(a, b, c);
    discriminant.Displayroot();
}

let a = Number(prompt("შეიყვანეთ a :"));
let b = Number(prompt("შეიყვანეთ b :"));
let c = Number(prompt("შეიყვანეთ c :"));
put(a, b, c);