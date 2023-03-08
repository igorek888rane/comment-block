import './index.html';
import './index.scss';
import Form from "./components/Form/Form";
import CommentArea from "./components/CommentArea/CommentArea";


let comments = localStorage.getItem('comments')
    ? JSON.parse(localStorage.getItem('comments'))
    : [
        {id: 1, username: 'Andre', text: 'Hi'},
        {id: 2, username: 'Vito', text: 'Hello'},
        {id: 3, username: 'Vito', text: 'Hello'},
        {id: 4, username: 'Vito', text: 'Hello'}
    ]
const commentArea = new CommentArea(comments)
const form = new Form()

document.querySelector('#app').innerHTML = `
       <div class="container">
            <div class="form_container ">
                 ${form.elem.outerHTML}
             </div>
            <div class="comment_container" >
                  ${commentArea.elem.outerHTML}
            </div>
        </div>
`


form.addEventListeners(form)


