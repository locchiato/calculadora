const { limpiar, resolver, init } = require('../funcionalidad');


const id = 'resultado'
const el = document.createElement('span')
el.setAttribute('id', id)
el.innerHTML = '10'
document.body.appendChild(el)

test('Probando el metodo limpiar', () => {
    // const resultado = document.getElementById(id);
    //expect(resultado.innerHTML).toBe('10');
    limpiar();
    // expect(resultado.innerHTML).toBe('');
});