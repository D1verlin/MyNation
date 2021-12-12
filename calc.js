Math.gcd = function() {
    if (arguments.length == 2) {
        if (arguments[1] == 0)
            return arguments[0];
        else
            return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
        var result = Math.gcd(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = Math.gcd(result, arguments[i]);
        return result;
    }
};

window.onload = function() { // don`t work with other window.onload
    delete localStorage.your_x;
    delete localStorage.your_z;
    delete localStorage.needed_x;
    delete localStorage.needed_z;
    localStorage.setItem('your_x', your_x.value);
    localStorage.setItem('your_z', your_z.value);
    localStorage.setItem('needed_x', needed_x.value);
    localStorage.setItem('needed_z', needed_z.value);
    Starter();
}


let your_x = document.querySelector('#your_x');
your_x.oninput = function() {
  localStorage.setItem('your_x', your_x.value);
}

let your_z = document.querySelector('#your_z');
your_z.oninput = function() {
  localStorage.setItem('your_z', your_z.value);
}

let needed_x = document.querySelector('#needed_x');
needed_x.oninput = function() {
  localStorage.setItem('needed_x', needed_x.value);
}

let needed_z = document.querySelector('#needed_z');
needed_z.oninput = function() {
  localStorage.setItem('needed_z', needed_z.value);
}




function Starter() {
let your_x = parseInt(localStorage.your_x || 0);
let your_z = parseInt(localStorage.your_z || 0);
let needed_x = parseInt(localStorage.needed_x || 0);
let needed_z = parseInt(localStorage.needed_z || 0);

let gcd = Math.gcd(needed_x, needed_z);
let numerator = needed_x / gcd;
let denominator = needed_z / gcd;
let ven = (needed_x * needed_z - (your_x * your_z)) * 5;
let hryvni = ven / 10;

document.querySelector('#ven').innerHTML = ven + ' вен';
document.querySelector('#hryvni').innerHTML = hryvni + ' ₴';
document.querySelector('#ST').innerHTML = numerator + ':' + denominator;

}

