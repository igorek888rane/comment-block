import createElement from '../../utils/createElement'
import Input from "./Input";
import TextArea from "./TextArea";
import CommentEl from "../CommentArea/Comment";
import getComments from "../../utils/getComments";

class Form {
    _render() {
        const inputName = new Input('username', 'text', 'Enter:username', 'Username')
        const inputDate = new Input('date', 'date', '', 'Date')
        const textArea = new TextArea('text', 'Enter-message')

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
        if (form.username.value && form.text.value) {
            let comments = getComments()
            const comment = {
                id: Date.now(),
                username: form.username.value,
                text: form.text.value,
                date: form.date.value
            }
            comments.push(comment)
            localStorage.setItem('comments', JSON.stringify(comments))
            document.querySelector('.comment').append(new CommentEl(comment).elem)
            form.username.value = ''
            form.date.value = ''
            form.text.value = ''
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