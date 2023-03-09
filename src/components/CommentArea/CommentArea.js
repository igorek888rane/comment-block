import createElement from '../../utils/createElement'
import CommentEl from "./Comment";
import getComments from "../../utils/getComments";

class CommentArea {
    constructor(comments) {
        this.comments = comments

    }

    _render() {
        let commentArea = createElement(`<div class='comment'></div>`)

        commentArea.innerHTML = ''
        for (let comment of this.comments) {
            commentArea.append(new CommentEl(comment).elem)
        }

        return commentArea
    }

    get elem() {
        return this._render()
    }

    delete(e) {
        if (e.target.closest('.comment__delete')) {
            const id = e.target.dataset.id
            console.log(id);
            let comments = getComments().filter(com => com.id !== +id)
            console.log(comments);

            document.getElementById(id).remove()
            localStorage.setItem('comments', JSON.stringify(comments))
        }
    }

    like(e) {

    }

    addEventListeners() {
        document.querySelector('.comment').addEventListener('click', this.delete)
        document.querySelector('.comment').addEventListener('click', this.like)
    }
}

export default CommentArea


