import './index.html';
import './index.scss';
import Form from "./components/Form/Form";
import CommentArea from "./components/CommentArea/CommentArea";


let comments = localStorage.getItem('comments')
    ? JSON.parse(localStorage.getItem('comments'))
    : []
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


