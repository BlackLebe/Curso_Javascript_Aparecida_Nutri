let tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function(event){

    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)

    
})


//    paciente.forEach(function(paciente){
//        paciente.addEventListener('dblclick', function(){
//            console.log('fui clicado com duplo click')
//            this.remove() 
//        })
//    })

