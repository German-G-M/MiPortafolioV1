// realizamos nuestro propio "smoth-scroll"
$(document).ready(function () {
    $("a").click(function () {
        var gato = this.hash //con esto obtenemos la dirección del hiperenlace (el valor del "href")
        //alert(gato) //con esto verificamos que al ghacer click a los enlaces tenemos "#xxxxxx"
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top -70 //le restamos los pixeles del "navbar" para que no tape la sección
            },
            800 //esto es la velocidad del scroll (mientras más alto, más lento)
        )

    })
})

/*******para manejar tooltips ****************/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*********************************** */