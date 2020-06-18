// 1º Exercício
class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.admin = false;
    }
    isAdmin() {
        if (this.admin === true) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true



// 2º Exercício
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// 2.1
const newUsers2 = usuarios.map(item => item.idade);
console.log(newUsers2);

// 2.2
const newUsers3 = usuarios.filter(item => {
    if (item.idade > 18) {
        return item;
    }
});
console.log(newUsers3);


// 2.3
const newUsers4 = usuarios.find(item => {
    if (item.empresa === 'Google') {
        return item;
    }
});
console.log(newUsers4);

// 2.4
const newUsers5 = usuarios.map(item => {
    var temp = Object.assign({}, item);
    temp.idade*=2;
    return temp;
}).filter(item => {
    if (item.idade <= 50) {
        return item;
    }
});
    
console.log(newUsers5);

//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item =>item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome3 = "Diego";
const idade = 23;
const mostraUsuario = (nome3 = 'Diego', idade = 18) => ({ nome3, idade });
console.log(mostraUsuario(nome3, idade));
console.log(mostraUsuario(nome3));

// 3.4
const promise = () => {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   };

//4.1
const objEmpresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
    }
   };

const { nome, endereco: { cidade, estado } } = objEmpresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
   
