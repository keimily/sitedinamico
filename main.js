   function tocaSom (idELementoAudio){
       document.QuerySelector(idElementoAudio).play();
   }

   const listaDeTeclas = document.querySelectorALI(`.tecla`);

//para
for(let contador=0; contador < listaDeTeclas.length; contador++) {}

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classiList[1];
    const idAudio = `#som_${instrumento};//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}