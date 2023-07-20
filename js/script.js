class Medicamento {
    constructor(SN, principioActivo, nombreComercial, dosis, presentacion, categoria) {
        this.sn = SN,
            this.pactivo = principioActivo,
            this.nombre = nombreComercial,
            this.dosis = dosis,
            this.presentacion = presentacion
        this.categoria = categoria
    }
}

let medicamentos = document.getElementById("medicamentos")
let verVademecum = document.getElementById("verVademecum")
let ocultarVademecum = document.getElementById("ocultarVademecum")
let selectOrden = document.getElementById("selectOrden")
let agregarMedicamentoBTN = document.getElementById("agregarMedicamentoBTN")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")

//Instanciación de objetos: 
const farmaco1 = new Medicamento(7752419, "Paracetamol", "Zolben", "500mg", "12 comprimidos", "Analgésico")
const farmaco2 = new Medicamento(7797462, "Dipirona", "Novemina", "500mg", "8 comprimidos", "Antipirético")
const farmaco3 = new Medicamento(7792033, "Diazepam", "Valium", "10mg", "30 comprimidos", "Anticombulsivo")
const farmaco4 = new Medicamento(7456512, "Clorfeniramina", "Kalitron", "4mg", "10 comprimidos", "antialrgico")
const farmaco5 = new Medicamento(7789510, "Ácido Acetílsalicilico", "Aspirina", "500mg", "10 compromidos", "Analgésico")
const farmaco6 = new Medicamento(7794519, "Esomeprazol ", "Esoprazol", "40mg", "30 comprimidos", "Antiácido")

//VADEMECUM
let vademecum = []
if (localStorage.getItem("vademecum")) {
    vademecum = JSON.parse(localStorage.getItem("vademecum"))
} else {
    vademecum.push(farmaco1, farmaco2, farmaco3, farmaco4, farmaco5, farmaco6)
    localStorage.setItem("vademecum", JSON.stringify(vademecum))
}


//AGREGAR FARMACOS AL VADEMECUM
function agregarMedicamento(array) {
    let SNIng = document.getElementById("snInput")
    let pactivoIng = document.getElementById("pactivoInput")
    let nombreIngr = document.getElementById("nombreInput")
    let dosisIng = document.getElementById("dosisInput")
    let presentacionIng = document.getElementById("presentacionInput")
    let categoriaIng = document.getElementById("categoriaInput")

    const medicamentoNuevo = new Medicamento(SNIng.value, pactivoIng.value, nombreIngr.value, dosisIng.value, presentacionIng.value, categoriaIng.value)
    array.push(medicamentoNuevo)
    localStorage.setItem("vademecum", JSON.stringify(array))
    mostrarVademecum(array)
    SNIng.value = ""
    pactivoIng.value = ""
    nombreIngr.value = ""
    dosisIng.value = ""
    presentacionIng.value = ""
    categoriaIng.value = ""
}
//MOSTRAR VADEMECUM


function mostrarVademecum(array) {
    medicamentos.innerHTML = ``
    for (let medicamento of array) {
        let nuevoMedicamentoDiv = document.createElement("div")
        nuevoMedicamentoDiv.className = "col-12 col-md-6 col-lg-4 my-2"
        nuevoMedicamentoDiv.innerHTML = `<div id="${medicamento.sn}" class="card" style="width: 18rem;">
                                  <div class="card-body">
                                     <h4 class="card-title">${medicamento.nombre}</h4>
                                     <p>Principio activo: ${medicamento.pactivo}</p>
                                     <p>Dosis: ${medicamento.dosis}</p>
                                  </div>
                               </div>`
        medicamentos.appendChild(nuevoMedicamentoDiv)
    }
}


//EVENTOS
agregarMedicamentoBTN.addEventListener("click", function (event) {
    event.preventDefault()
    agregarMedicamento(vademecum)
})

verVademecum.addEventListener("click", () => {
    mostrarVademecum(vademecum)
})

ocultarVademecum.ondblclick = () => {
    medicamentos.innerHTML = ``
}

