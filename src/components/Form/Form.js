import createElement from '../../utils/index'
import Input from "./Input";
import TextArea from "./TextArea";

class Form {
    _render() {
        const inputName = new Input('username', 'text', 'Enter:username', 'Username')
        const inputDate = new Input('date', 'date', '', 'Date')
        const textArea = new TextArea('message', 'Enter-message')
        return createElement(`
         <div class='form_container container'>
            <form class="form" name = 'comment'>
                ${inputName.elem}
                ${inputDate.elem}
                ${textArea.elem}
        `).outerHTML
    }

    get elem() {
        return this._render()
    }
}


export default Form