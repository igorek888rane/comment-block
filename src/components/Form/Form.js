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
                document.getElementById(`username_error`).style.display = 'block'
                document.getElementById(`username_error`).innerHTML = 'Must be greater than 3 and less than 10  '
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
                    console.log(form[el].value);
                    document.getElementById(`${el}_error`).style.display = 'block'
                    document.getElementById(`${el}_error`).innerHTML = 'Enter your ' + el
                }
            }

        }

    }

    handleKeyDown(e, form) {
        if (e.code === 'Enter') {
            e.preventDefault()
            form.handleSubmit(e)
        }
        if (e.target.closest('#username')) {
            const username = document.getElementById('username_error')
            username.innerHTML = ''
            username.style.display = 'none'

        }
        if (e.target.closest('#text')) {
            const text = document.getElementById('text_error')
            text.innerHTML = ''
            text.style.display = 'none'
        }
    }

    handleValidate(e) {
        if (e.target.closest('#username')) {
            const username = document.getElementById('username_error')
            if (!e.target.value) {
                username.innerHTML = 'Enter your username'
                username.style.display = 'block'
            }


        }

        if (e.target.closest('#text')) {
            const text = document.getElementById('text_error')
            if (!e.target.value) {
                text.innerHTML = 'Enter your text'
                text.style.display = 'block'

            }
        }
    }

    addEventListeners(form) {
        const formDoc = document.querySelector('.form')
        formDoc.addEventListener('submit', this.handleSubmit)
        formDoc.addEventListener('keydown', (e) => {
            this.handleKeyDown(e, form)
        })
        formDoc.addEventListener('focusout', this.handleValidate)
    }


}


export default Form