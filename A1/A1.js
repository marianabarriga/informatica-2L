let ancho;
let alto;
do {
  ancho = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho) || ancho < 1);

do {
  alto = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto) || alto < 1);

let nLinea = 0;
while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
      linea = linea + "*"
      nColumna = nColumna + 1
    }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if (nLinea < nColumna) {
      linea = linea + " ";
    } else {
      linea = linea + "*";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if (nLinea > nColumna) {
      linea = linea + " ";
    } else {
      linea = linea + "*";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
      if (nColumna > nLinea || nLinea > nColumna){
        linea = linea + "*"
      } else {
        linea = linea + " "
      }
      nColumna = nColumna + 1
    }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if(nLinea == nColumna || nLinea <= 0 || nColumna == alto-1){
      linea = linea + "*"
    } else {
      linea = linea + " "
    }
      nColumna = nColumna + 1
    }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if (nLinea == 0 || nLinea == ancho-1 || nColumna == 0 || nColumna == alto-1){
      linea = linea + "*"
    } else {
      linea = linea + " "
    }
      nColumna = nColumna + 1
    }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if (nLinea == nColumna || nColumna <= 0 || nLinea == ancho-1){
      linea = linea + "*"
    } else {
      linea = linea + " "
    }
      nColumna = nColumna + 1
    }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log ("");
nLinea = 0;

while (nLinea <= alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna <= ancho) {
    if (nLinea < nColumna) {
      linea = linea + "*";
    } else if (nColumna > nLinea) {
      linea = linea + "*";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}
console.log ("");
nLinea = 0;

while (nLinea < ancho){
  let linea = "";
  let nColumna = 0;
  while (nColumna < nLinea) {
    nColumna = nColumna = nColumna + 1
    linea = linea + " "
  }
  nColumna = 0
  while ( nColumna < ancho || nColumna < alto) {
    nColumna = nColumna + 1
    linea = linea + "*"
  }
  linea = linea + "*"
  console.log (linea)
  nLinea = nLinea + 1
}

console.log ("");
nLinea = 0;

while (nLinea <= alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna <= ancho) {
    if (nLinea < nColumna) {
      linea = linea + "*";
    } else if (nColumna > nLinea) {
      linea = linea + " ";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}