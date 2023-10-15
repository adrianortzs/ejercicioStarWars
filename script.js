let datosPelis;
let titulos = [];
let fechas = [];
function getPelis (){
    return fetch('https://swapi.dev/api/films')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)                
                datosPelis = data.results
                for (let i = 0; i < datosPelis.length; i++) {
                  titulos.push(datosPelis[i].title);
                  fechas.push(datosPelis[i].release_date.slice(0,4));
                };
                fechas = fechas.map(fecha => parseInt(fecha));
                console.log(titulos);
                console.log(fechas);

                new Chartist.Line('#chart1', {
                  // A labels array that can contain any sort of values
                  labels: [...titulos],
                  // Our series array that contains series objects or in this case series data arrays
                  series: [
                    fechas
                  ]
                });
                               
                return data.results
            });
}

getPelis ();

let datosPersonajes;
let nombrePersonaje = [];
let numeroPelisPersonaje = [];
function getPersonajes (){
  return fetch('https://swapi.dev/api/people')
          .then(response => response.json())
          .then(data => {
              console.log(data.results)
              let datosPersonajes = data.results; 
              for (let i = 0; i < datosPersonajes.length; i++) {
                nombrePersonaje.push(datosPersonajes[i].name);
                numeroPelisPersonaje.push(datosPersonajes[i].films.length);
              }
              console.log(nombrePersonaje)
              console.log(numeroPelisPersonaje)

              new Chartist.Bar('#chart2',  {
                // A labels array that can contain any sort of values
                labels: [...nombrePersonaje],
                // Our series array that contains series objects or in this case series data arrays
                series: [
                  numeroPelisPersonaje
                ]
              });

          });

}


getPersonajes ();