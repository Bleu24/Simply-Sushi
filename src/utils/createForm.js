import createRow from "./createRow";
import { createElement, MessageSquareText, IdCard, Mail, NotebookTabs, Send } from 'lucide';



export default function () {
    const form = document.createElement('form');
    const formTitle = document.createElement('h1');
    const row1 = createRow([IdCard, IdCard], ['text', 'text'], ['first-name', 'last-name'], ['First name:', 'Surname:']);
    const row2 = createRow([Mail, NotebookTabs], ['email', 'tel'], ['e-mail', 'contactNo'], ['E-mail Address:', 'Contact no.:']);
    const row3 = document.createElement('div');
    const messageIcon = createElement(MessageSquareText);
    const messageField = document.createElement('div');
    const fieldInps = document.createElement('div');
    const messageLabel = document.createElement('label');
    const messageArea = document.createElement('textarea');
    const labelContainer = document.createElement('div');
    const submit = document.createElement('button');
    const submitIcon = createElement(Send);
    


    fieldInps.classList.add('form__inpFields')
    formTitle.textContent = 'Contact Us';
    formTitle.classList.add('form__heading');
    messageLabel.textContent = "Message:"
    messageField.classList.add('form__field', 'message');
    row3.classList.add('form__row');
    messageArea.classList.add('form__msgArea');
    messageLabel.setAttribute('for', 'message');
    messageArea.id = 'message';
    messageArea.placeholder = 'Enter your message...';
    submit.classList.add('form__submit');
    submit.append(submitIcon);
    
    


    labelContainer.append(messageIcon, messageLabel);
    fieldInps.append(labelContainer, messageArea);
    messageField.append(fieldInps);
    row3.append(messageField);
    form.append(formTitle, row1, row2, row3, submit);


    return form;
}