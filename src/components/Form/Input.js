import createElement from '../../utils/createElement'

class Input {
    constructor(name, type, placeholder, label) {
        this.name = name
        this.type = type
        this.placeholder = placeholder
        this.label = label
    }

    _render(name, type, placeholder, label) {
        return createElement(`
        <div class="form__input input_container">
            <label>${label}</label>
            <input
            type=${type}
            name =${name} 
            placeholder=${placeholder}>
            <div class=form__error >error</div>
        </div>
        `)
    }

    get elem() {
        return this._render(this.name, this.type, this.placeholder, this.label)
    }
}

export default Input