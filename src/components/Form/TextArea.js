import createElement from '../../utils/index'
import send from '../../img/form/send_icon.svg'

class TextArea {
    constructor(name,placeholder) {
        this.name = name
        this.placeholder = placeholder
    }

    _render(name,placeholder) {
        return createElement(`
        <div class="form__textarea">
            <textarea name = ${name} placeholder=${placeholder}></textarea>
            <button type="submit">
                <img src=${send} alt="send message"/>
            </button>
        </div>
        `)
    }

    get elem() {
        return this._render(this.name,this.placeholder)
    }
}

export default TextArea