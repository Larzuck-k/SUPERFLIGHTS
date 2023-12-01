let destino = document.getElementById("destino");
let cantidadPasajeros = document.getElementById("pasajeros");
let pesoMaletas = document.getElementById("pesomaletas");
let tiposilla = document.getElementById("tiposilla");
let liquidar = document.getElementById("liquidar");
let liquidacion = document.getElementById("liquidacion");
let valorpeso;
liquidar.addEventListener("click", liquidartique);

function liquidartique() {
  if (
    destino.value != "Seleccione su destino" &&
    cantidadPasajeros.value != "" &&
    pesoMaletas.value != "" &&
    tiposilla.value != "Seleccione su tipo de silla"
  ) {
    let valordestino = [90000, 120000, 85000, 150000, 135000];
    let valorsilla = [0, 20000, 40000];
    let nombresilla = ["Normal", "Ejecutiva", "VIP"];
    let nombredestino = ["Cali", "Cartago", "Cartagena", "Bogota", "Medellín"];

    if (pesoMaletas.value > 50) {
      valorpeso = 15000 * (pesoMaletas.value - 50);
    } else {
      valorpeso = 0;
    }

    let valorpasajero =
      valordestino[parseInt(destino.value)] * cantidadPasajeros.value;

    let totalsilla =
      valorsilla[parseInt(tiposilla.value)] * cantidadPasajeros.value;

    let tique = {
      Cantidad: cantidadPasajeros.value,
      Pasajeros: valorpasajero,
      Peso: valorpeso,
      Silla: totalsilla,
      Total: valorpasajero + valorpeso + totalsilla,
      TipoSilla: nombresilla[parseInt(tiposilla.value)],
      pesokg: pesoMaletas.value,
      nombredes: nombredestino[parseInt(destino.value)],
    };

    liquidacion.innerHTML = `<div class="display-4">Valor total</div>
    <p></p>
    
    <div  class="text-start">
      Cantidad de pasajeros
    
      <input
      readonly 
      value ="${tique.Pasajeros}$ = ${tique.Cantidad} Pasajeros"
      type="text"
        class="form-control"
        name=""
        id="totalpasajero"
      />
      <p></p>
      Peso de maletas
    
      <input type="text" value ="${tique.Peso}$ = ${tique.pesokg}kg" readonly class="form-control" name="" id="totalpeso" />
    
      <p></p>
    
      Sillas
      <input type="text" value ="${tique.Silla}$ = ${tique.TipoSilla}"  readonly class="form-control" name="" id="totalsilla" />
    
      <p></p>
      Total
      <input type="text" value ="${tique.Total}$"  class="form-control" readonly name="" id="totaltotal" />
    </div>`;
  } else {
    alert("Faltan llenar datos");
  }
}
