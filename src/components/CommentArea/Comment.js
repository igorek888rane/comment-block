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
                           <span class="comment__date">
                                ${this.relativeTimeCount(this.comment.dateTime.date)}
                                ${this.comment.dateTime.time}
                           </span>
                    </div>
                    <p class="comment__text">${this.comment.text}</p>
                    <div class="comment__action">
                    <img data-id=${this.comment.id} class="comment__like" src=${like} alt="">
                    <img data-id=${this.comment.id} class="comment__delete" src=${basket} alt="">
                    </div>
                </div>
            </div>
        `)
    }

    get elem() {
        return this._render()
    }

    relativeTimeCount(date) {

        const rtf = new Intl.RelativeTimeFormat('en', {
            numeric: 'auto',
            style: 'long',
            localeMatcher: 'best fit'
        })
        return rtf
            .format(new Date(date).getDate() - new Date(Date.now()).getDate(), 'day')
    }

}

export default CommentEl