
/************************************************************************************* */
// Clase padre recibe url (atributo src que necesita iframe para mostrar)
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    get url() {
        return this.getUrl();
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video”."
    }
};

// Sub clase Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = id;
        this.getId = () => _id;
    };
    get id(){
        return this.getId();
    }
    playMultimedia() {
        paraIframe(this.url, this.id);//llama a la función(IIEF)
    };
    setInicio(inicio) { //ingresamos tiempo y este está en segundos. añadimos a nuestra url el segundo de inicio
        document.querySelector(`#${this.id}`).setAttribute('src', `${this.url}?start=${inicio}`);
    }
}

// Patrón Módulo mediante IIFE
const paraIframe = (() => {
    // Función privada que con los parametros puede mostrar los videos en HTML
    const cargador = (url, id) => {
        document.querySelector(`#${id}`).setAttribute('src', url);//modificamos el "src"
    }
    return (url, id) => cargador(url, id);
})();

// Instanciado los objetos (mandamos la url del video y el "id" del iframe)
let v12_skatepark = new Reproductor("https://www.youtube.com/embed/MVaSKu6iVvw", "v12");
let v11_mercadoWeb = new Reproductor("https://www.youtube.com/embed/2CSGo45JAyA", "v11")
let v10_eleccionesPresidenciales = new Reproductor("https://www.youtube.com/embed/AZG-dyaQSpc", "v10");
let v9_miRepertorio = new Reproductor("https://www.youtube.com/embed/hYBLbq1aYIU", "v9")
let v8_quienGanara = new Reproductor("https://www.youtube.com/embed/JdziF_QjSUQ", "v8")
let v7_clubDeportivo = new Reproductor("https://www.youtube.com/embed/2APn80xz7HI", "v7")
let v6_roomMates = new Reproductor("https://www.youtube.com/embed/t398CeVn_eM", "v6")
let v5_covidHito1 = new Reproductor("https://www.youtube.com/embed/66uNAVu0G8I", "v5")
let v4_animalesSalvajes = new Reproductor("https://www.youtube.com/embed/wIo0JL0lhHs", "v4")
let v3_realidadAumentada = new Reproductor("https://www.youtube.com/embed/KVS4tZWgS6I", "v3")
let v2_cortoQuirun= new Reproductor("https://www.youtube.com/embed/nyGD6UE46wU", "v2")
//let v1 = new Reproductor("https://www.youtube.com/embed/wIo0JL0lhHs", "v1")


// Método playMultimedia para cada sub clase
v12_skatepark.playMultimedia();
v11_mercadoWeb.playMultimedia();
v10_eleccionesPresidenciales.playMultimedia();
v9_miRepertorio.playMultimedia();
v8_quienGanara.playMultimedia();
v7_clubDeportivo.playMultimedia();
v6_roomMates.playMultimedia();
v5_covidHito1.playMultimedia();
v4_animalesSalvajes.playMultimedia();
v3_realidadAumentada.playMultimedia();
v2_cortoQuirun.playMultimedia();
//v1.playMultimedia();


//Método para establecer el segundo de incicio del video
v12_skatepark.setInicio(13);//
v11_mercadoWeb.setInicio(7);//
v10_eleccionesPresidenciales.setInicio(22);//
v9_miRepertorio.setInicio(7);//
v8_quienGanara.setInicio(8);//
v7_clubDeportivo.setInicio(811);//
v6_roomMates.setInicio(35);//
v5_covidHito1.setInicio(600);//
v4_animalesSalvajes.setInicio(309);//
v3_realidadAumentada.setInicio(145);//
v2_cortoQuirun.setInicio(0);//


