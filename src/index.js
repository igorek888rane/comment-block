import './index.html';
import './index.scss';
import Form from "./components/Form/Form";
import CommentArea from "./components/CommentArea/CommentArea";
import getComments from "./utils/getComments";


let comments = getComments()
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


commentArea.addEventListeners()
form.addEventListeners(form)



