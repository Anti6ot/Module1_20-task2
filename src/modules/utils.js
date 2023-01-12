
export function clickButton (){
    const btn = document.querySelector('.cookie-consent__button')
    const divCookie = document.querySelector('.cookie-consent')

    btn.addEventListener('click', (event) => {

    if( event.target ){
        localStorage.setItem('hide', 'hide' )
        divCookie.classList.add('hide')
    }

    })
    if(localStorage.getItem('hide')){
        divCookie.classList.add('hide')
    }
}

