import './index.html';
import './index.scss';
import Form from "./components/Form/Form";


let form = new Form()

document.querySelector('#app').innerHTML = `
${form.elem}
`