const inputs = document.querySelectorAll('.input');

function funcionFocus(){
    let parent = this.parentNode.parentNode; // desde el mismo input. apunta al nodo padre el cual tambien apunta al nodo padre, es decir .input-div
    parent.classList.add('focus');
}

function funcionBlur(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){           //*este if es vital para que funcione, ya que solo hara la animacion si el campo input esta vacio, de esta forma al hacer focus en cualquier input hace que los h5 no tapen a menos que este vacio
        parent.classList.remove('focus');
    }
}

//bucle for each para añadir un eventlistener a cada uno de los campos input

inputs.forEach(input => {
    input.addEventListener('focus', funcionFocus);
    input.addEventListener('blur', funcionBlur);
});
