import createElement from '../../utils/index'
import Input from "./Input";
import TextArea from "./TextArea";
import CommentEl from "../CommentArea/Comment";

class Form {
    _render() {
        const inputName = new Input('username', 'text', 'Enter:username', 'Username')
        const inputDate = new Input('date', 'date', '', 'Date')
        const textArea = new TextArea('message', 'Enter-message')

        return createElement(`
            <form  class="form" name = 'comment'>
                ${inputName.elem.outerHTML}
                ${inputDate.elem.outerHTML}
                ${textArea.elem.outerHTML}
        `)
    }

    get elem() {
        return this._render()
    }

    handleSubmit(e) {
        e.preventDefault()
        const form = document.forms.comment
        if (form.username.value && form.message.value) {
            console.log(form.username.value);
            console.log(form.date.value);
            console.log(form.message.value);
            document.querySelector('.comment').append(new CommentEl({
                id: Date.now(),
                username: form.username.value,
                text: form.message.value,
                date: form.date.value
            }).elem)
            form.username.value = ''
            form.date.value = ''
            form.message.value = ''
        }

    }

    handleKeyDown(e, form) {
        if (e.code !== 'Enter') {
            return;
        }
        e.preventDefault()
        form.handleSubmit(e)

    }

    addEventListeners(form) {
        document.querySelector('.form').addEventListener('submit', this.handleSubmit)
        document.querySelector('textarea').addEventListener('keydown', (e) => {
            this.handleKeyDown(e, form)
        })
    }


}


export default Form