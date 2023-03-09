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
            const minutes = String(new Date().getMinutes()).length === 1 ? '0' + new Date().getMinutes() : new Date().getMinutes()
            const comment = {
                id: Date.now(),
                username: form.username.value,
                text: form.text.value,
                dateTime: {
                    date: form.date.value ? new Date(form.date.value).getTime() : Date.now(),
                    time: ` ${new Date().getHours()} : ${minutes}`
                }
            }
            comments.push(comment)
            console.log(String(new Date().getMinutes()).length === 1 ? '0' + new Date().getMinutes() : new Date().getMinutes());
            localStorage.setItem('comments', JSON.stringify(comments))
            document.querySelector('.comment').append(new CommentEl(comment).elem)
            form.username.value = ''
            form.date.value = ''
            form.text.value = ''
        }

    }

    // dateTimeReturn(dateInput) {
    //     const date = dateInput ? new Date(dateInput).getTime() : Date.now()
    //     const minutes = String(new Date().getMinutes()).length === 1 ? '0' + new Date().getMinutes() : new Date().getMinutes()
    //     return {
    //         date,
    //         time: `${new Date().getHours()} : ${minutes}`
    //     }

    // }

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