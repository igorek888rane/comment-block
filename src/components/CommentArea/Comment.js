import createElement from "../../utils";

class CommentEl {
    constructor(comment) {
        this.comment = comment

    }

    _render() {
        return createElement(`
            <div class='comment__item'>
                <div class="comment__name">${this.comment.username}</div>
                <div class="comment__text">${this.comment.text}</div>
                <div class="comment__date">${this.comment.date?this.comment.date:new Date().getFullYear()}</div>
            </div>
        `)
    }

    get elem() {
        return this._render()
    }
}

export default CommentEl