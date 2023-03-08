import createElement from '../../utils/index'

class Input {
    constructor(name, type, placeholder, label) {
        this.name = name
        this.type = type
        this.placeholder = placeholder
        this.label = label
    }

    _render(name, type, placeholder, label) {
        return createElement(`
        <div class="form__input">
            <label>${label}</label>
            <input
            type=${type}
            name =${name} 
            placeholder=${placeholder}>
        </div>
        `).outerHTML
    }

    get elem() {
        return this._render(this.name, this.type, this.placeholder, this.label)
    }
}

export default Input