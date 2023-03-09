import createElement from '../../utils/createElement'
import send from '../../img/form/send_icon.svg'

class TextArea {
    constructor(name, placeholder) {
        this.name = name
        this.placeholder = placeholder
    }

    _render(name, placeholder) {
        return createElement(`
        <div class="form__textarea input_container">
           <div class="textarea">
            <textarea  id=${name} name = ${name} placeholder=${placeholder}></textarea>
            <button type="submit">
                <img src=${send} alt="send message"/>
            </button>
             </div>
            <div id = ${name +'_error'} class='form__error error_text'></div>
        </div>
        `)
    }

    get elem() {
        return this._render(this.name, this.placeholder)
    }
}

export default TextArea