export default function getComments (){
    return localStorage.getItem('comments')
        ? JSON.parse(localStorage.getItem('comments'))
        : []
}


