function iniciaModal (modalID){
    if(sessionStorage.fecharModal !== modalID){
        const modal = document.getElementById(modalID)
        if(modal){
            modal.classList.add('show')
            modal.addEventListener('click', (e) => {
                if(e.target.id == 'shadow' || e.target.id == 'close'){
                    modal.classList.remove('show')
                    sessionStorage.fecharModal = modalID
                }
            })
        }
    }
}


document.addEventListener('mousemove', logKey)

function logKey(e){
    if(e.screenY < 90){
        setTimeout(() => {iniciaModal('modal')}, 300)
    }
}






