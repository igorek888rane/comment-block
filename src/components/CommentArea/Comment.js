import createElement from "../../utils/createElement";
import basket from '../../img/comment/basket_icon.svg'
import like from '../../img/comment/like_icon.svg'


class CommentEl {
    constructor(comment) {
        this.comment = comment
    }

    _render() {
        return createElement(`
            <div class='comment__item' id=${this.comment.id}>
                    <div class="comment__avatar">
                        ${this.comment.username.slice(0, 2).toUpperCase()}
                    </div>
                <div class="comment__info">
                    <div class="comment__header">
                           <span class="comment__name">${this.comment.username}</span>
                           <span class="comment__date">${this.comment.date ? this.comment.date : new Date().getFullYear()}</span>
                    </div>
                    <p class="comment__text">${this.comment.text}</p>
                    <div class="comment__action">
                    <img  class="comment__like" src=${like} alt="">
                    <img data-id=${this.comment.id} class="comment__delete" src=${basket} alt="">
                    </div>
                </div>
            </div>
        `)
    }

    get elem() {
        return this._render()
    }
}

export default CommentEl