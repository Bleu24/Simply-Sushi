import { createElement } from 'lucide';

export default function (icons, types, names, labels) {


    const [ icon1, icon2 ] = icons;
    const [ type1, type2 ] = types;
    const [ name1, name2 ] = names;
    const [ label1, label2 ] = labels;

    const row = document.createElement('div');
    const field1 = document.createElement('div');
    const field2 = document.createElement('div');
    const textField1 = document.createElement('div');
    const textField2 = document.createElement('div');
    const i1 = createElement(icon1);
    const l1 = document.createElement('label');
    const inp1 = document.createElement('input');
    const i2 =  createElement(icon2);
    const l2 = document.createElement('label');
    const inp2 = document.createElement('input');
    const labelContainer1 = document.createElement('div');
    const labelContainer2 = document.createElement('div');

    const allInputs = document.querySelectorAll('input');

    row.classList.add('form__row');
    field1.classList.add('form__field', name1);
    field2.classList.add('form__field', name2);
    textField1.classList.add('form__inpFields');
    textField2.classList.add('form__inpFields');
    l1.setAttribute('for', name1);
    l2.setAttribute('for', name2);
    inp1.id = name1;
    inp2.id = name2;
    inp1.type = type1;
    inp2.type = type2;
    inp1.name = name1;
    inp2.name = name2;
    l1.innerHTML = label1;
    l2.innerHTML = label2;

    labelContainer1.append(i1, l1);
    labelContainer2.append(i2, l2);
    textField1.append(labelContainer1,inp1);
    textField2.append(labelContainer2,inp2);

    field1.append(textField1);
    field2.append(textField2);

    row.append(field1, field2);
    return row;
}