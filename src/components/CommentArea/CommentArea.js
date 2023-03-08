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
            let comments = getComments().filter(el => el.id === id)
            localStorage.setItem('comments', JSON.stringify(comments))
            document.getElementById(id).remove()
        }
    }

    addEventListeners() {
        document.querySelector('.comment').addEventListener('click', this.delete)
    }
}

export default CommentArea


