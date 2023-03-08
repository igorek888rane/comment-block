import createElement from '../../utils/createElement'
import CommentEl from "./Comment";

class CommentArea {
    constructor(comments) {
        this.comments = comments
    }

    _render() {
        let commentArea = createElement(`<div class='comment'></div>`)
        for (let comment of this.comments) {
            commentArea.append(new CommentEl(comment).elem)
        }
        return commentArea
    }

    get elem() {
        return this._render()
    }
}

export default CommentArea


