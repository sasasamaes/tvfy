//window.onload = function () {alert('loaded'};

$(document).ready(function() {


  //CUANDO QUIERO SER MUY ESPECIFICO
  //PRIMERO HAY QUE PONER EN EL HTML data-title="tvify"
  //$('header[data-title="tvify"]');

  //$('#app-header').find('h1');
  //$('#app-header').has('.title');
  //$('#app-header').not('.title');
  //filtra todas las p que tenga la clase p
  //<p class="text"></p>
  //$('p').filter('.text');
  //$('p').eq(1);

  //Esto es un objeto :)
  /*var a = $('<a>', {
    href: 'http://platzi.com',
    target: '_blank',
    html: 'Ir a platzi'
  }*/
  //agrega atributos al html
//  $('#app-body').append(a);
  //getter solo se pasa un atributo el que uno quiera ver
  //setter se pasan dos parametros, el atributo y el contenido
  //a.attr('href','http://google.com')
  //Agregar una clase
  //$('h1').addClass('danger');
  //Quita una clase
  //$('h1').removeClass('danger');

  //funcion para apartir de un tiempo agrege cosas
/*  setTimeout(function(){
    $('h1').addClass('danger');
  },1500)*/

//Modifica el css principal
  /*$('h1').css({
    'font-size':'70px'
  })*/


/**
*Submit search-form
*/
$('#app-body').find('form').submit(function(ev) {
  ev.preventDefault();
  var busqueda = $(this).find('input[type="text"]').val();
  alert('Se a buscado: ' + busqueda);
});

var template = '<article class="tv-show">' +
          '<div class="left img-container">' +
            '<img src=":img:" alt=":img alt:">' +
          '</div>' +
          '<div class="right info">' +
            '<h1>:name:</h1>' +
            '<p>:summary:</p>' +
          '</div>' +
        '</article>';

$.ajax({
  url: 'http://api.tvmaze.com/shows',
  success: function (shows,textStatus,xhr) {
    var $tvShowsContainer = $('#app-body').find('.tv-shows');
    shows.forEach(function(show){
      var article = template.replace(':name:',show.name).replace(':img:',show.image.medium).replace(':summary:',show.summary).replace(':img alt:',show.name + " Logo")

      $tvShowsContainer.append($(article));
    })
  }
});





})
