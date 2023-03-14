import createElement from '../../utils/createElement'
import Input from "./Input";
import TextArea from "./TextArea";
import CommentEl from "../CommentArea/Comment";
import getComments from "../../utils/getComments";

class Form {
    _render() {
        const inputName =
            new Input(
                'username',
                'text',
                'Enter:username',
                'Username')
        const inputDate = new Input('date', 'date', '', 'Date')
        const textArea = new TextArea('text', 'Enter-comment')

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
            if (form.username.value.length < 3 || form.username.value.length > 10) {
                this.setError('username', 'block', `Must be greater than 3 and less than 10`)
            } else {
                let comments = getComments()
                const minutes = String(new Date().getMinutes()).length === 1
                    ? '0' + new Date().getMinutes()
                    : new Date().getMinutes()
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
                localStorage.setItem('comments', JSON.stringify(comments))
                document.querySelector('.comment').append(new CommentEl(comment).elem)
                form.username.value = ''
                form.date.value = ''
                form.text.value = ''
                form.username.blur()
                form.text.blur()
            }

        } else {
            const arr = ['text', 'username']
            for (let el of arr) {
                if (!form[el].value) {
                    this.setError(el, 'block', `Enter your ${el}`)
                }
            }

        }

    }

    handleKeyDown(e) {
        if (e.code === 'Enter') {
            e.preventDefault()
            this.handleSubmit(e)
        }
        if (e.target.closest('#username')) {
            this.setError('username', 'none', '')
        }
        if (e.target.closest('#text')) {
            this.setError('text', 'none', '')
        }
    }

    handleBlur(e) {
        if (e.target.closest('#username')) {
            if (!e.target.value) {
                this.setError('username', 'block', 'Enter your username')
            }
        }

        if (e.target.closest('#text')) {
            if (!e.target.value) {
                this.setError('text', 'block', 'Enter your text')
            }
        }
    }

    setError(el, display, text) {
        document.getElementById(`${el}_error`).style.display = display
        document.getElementById(`${el}_error`).innerHTML = text
    }

    addEventListeners() {
        const formDoc = document.querySelector('.form')
        formDoc.addEventListener('submit', (e) => {
            this.handleSubmit(e)
        })
        formDoc.addEventListener('keydown', (e) => {
            this.handleKeyDown(e)
        })
        formDoc.addEventListener('focusout', (e) => {
            this.handleBlur(e)
        })
    }


}


export default Form