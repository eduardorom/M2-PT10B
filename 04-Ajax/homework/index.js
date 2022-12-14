//lista de amigos
var getAmigos = ()=> {
    var listaAmigos = $('#lista');
    listaAmigos.empty();
    $.get('http://localhost:5000/amigos',data =>{
        for (let i = 0; i < data.length; i++) {
         listaAmigos.append(`<li>${data[i].name}<li>`)
            
        }
    })
}
$('#boton').click(getAmigos);

//busqueda por id

$('#search').click(()=>{
    var id = $('#input').val();
    var array = [1,2,3,4,5,6,7];
    if(id in array){
        $.get(`http://localhost:5000/amigos/${id}`,data => {
            $('#amigo').text(data.name);
        })
    }else{
        $('#amigo').text('El amigo no existe');
    }
});

// eliminacion de amigos

$('#delete').click(()=>{
    var id = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: ()=>{
            $('#success').text('El amigo fue borrado');
            getAmigos();
        }
    })
});