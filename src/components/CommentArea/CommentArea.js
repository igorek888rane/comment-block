import createElement from '../../utils/createElement'
import CommentEl from "./Comment";
import getComments from "../../utils/getComments";
import like from '../../img/comment/like_icon.svg'
import likeAdd from '../../img/comment/like_icon_add.svg'


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
            const comments = getComments().filter(com => com.id !== +id)
            document.getElementById(id).remove()
            localStorage.setItem('comments', JSON.stringify(comments))
        }
    }

    like(e) {
        if (e.target.closest('.comment__like')) {
            const id = e.target.dataset.id
            const comment = document.getElementById(id)
            comment.classList.toggle('like')
            comment
                .querySelector('.comment__like')
                .src = comment.classList.value === 'comment__item like'
                ? likeAdd
                : like
        }

    }

    addEventListeners() {
        document.querySelector('.comment').addEventListener('click', this.delete)
        document.querySelector('.comment').addEventListener('click', this.like)
    }
}

export default CommentArea


