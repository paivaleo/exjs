// for loop
// for loop array


let estudos = ['inglês', 'Javascript', 'Banco de dados','php'];

let html = '<ul>';

for (let i in estudos) {
    html += '<li>'+ estudos[i] +'</li>';
}

html += '</ul>';

document.getElementById("demo").innerHTML = html;



/*


let texto = '';


for (let i = 0; i <= 10; i++) {
    texto = texto + i + '<br/>';
}

document.getElementById("demo").innerHTML = texto;
*/