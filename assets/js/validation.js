$('.main-form').on('submit', (event) =>{
  event.preventDefault();

  const nome = $('#nome').val();
  const email = $('#email').val();
  const mensagem = $('#mensagem').val();

  if(nome.trim().length <= 0){
    $('.error').html("<p class='red'>Todos os campos são obrigatório!</p>");
    $('.sucesso').html('');
  }else if(email.trim().length <= 0){
    $('.error').html("<p class='red'>Todos os campos são obrigatório!</p>");
    $('.sucesso').html('');
  }else if(mensagem.trim().length <= 0){
    $('.error').html("<p class='red'>Todos os campos são obrigatório!</p>");
    $('.sucesso').html('');
  }else {
    $('.error').html('');
    $('.sucesso').html('<p class="green">Mensagem enviada com sucesso, retornaremos o contato logo em breve!</p>');
  }

});
