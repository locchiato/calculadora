const { limpiar, resetear, resolver, init } = require('../funcionalidad');

const id = 'resultado'
const el = document.createElement('span')
el.setAttribute('id', id)
document.body.appendChild(el)

describe('Probando el metodo limpiar', function() {



    test('Limpiar', () => {
        const elToValidate = document.getElementById(id);
        elToValidate.innerHTML = '10';
        expect(elToValidate.innerHTML).toBe('10');
        limpiar();
        expect(elToValidate.innerHTML).toBe('');
    });


    test('Resetear', () => {
        const elToValidate = document.getElementById(id);
        elToValidate.innerHTML = '10';
        expect(elToValidate.innerHTML).toBe('10');
        resetear();
        expect(elToValidate.innerHTML).toBe('');
    });

});