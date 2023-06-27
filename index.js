$(document).ready(function(){
    $(".icono-cruz").click(function(){
        $(".box-aside").hide();
        $("#btn-imagen").click(function(){
            $(".box-aside").show();
            $("#solapa-imagen").show();
            $("#solapa-texto").hide();
        });
        $(document).ready(function(){
            $("#btn-texto").click(function(){
                $(".box-aside").show();
                $("#solapa-texto").show();
                $("#solapa-imagen").hide();
            });
        });
    });
});


$(document).ready(function(){
    $("#btn-imagen").click(function(){
        $("#solapa-imagen").show();
        $("#solapa-texto").hide();
    });
});

$(document).ready(function(){
    $("#btn-texto").click(function(){
        $("#solapa-texto").show();
        $("#solapa-imagen").hide();
    });
});

// MODO NOCTURNO/CLARO
const body = document.querySelector('body');
const buttonTheme = document.querySelector('.button-theme');
const icono = document.querySelector(".icono-theme");
const textIconoTheme = document.querySelector('.text-icono-theme')


buttonTheme.addEventListener('click', () => {
    
    if (body.className === 'light') {
    body.className ='dark';
    textIconoTheme.textContent = 'Modo claro';
    icono.className = "far fa-sun blanco";
    
} else if (body.className === 'dark') {
    body.className = 'light';
    textIconoTheme.textContent = 'Modo oscuro';
    icono.className = "far fa-moon negro";

    }

});

//SOLAPA IMAGEN

//URL-img (input) DIV - img-meme

const urlImagen = document.getElementById('url-img-input'); 
const divUrl = document.getElementById('imagenMeme');

urlImagen.addEventListener('input',() =>{
    const url = urlImagen.value;
    divUrl.style.backgroundImage = `url('${url}')`; 
});

//COLOR DE FONDO DEL DIVURL (background del div imagenMeme)
const colorFondo = document.getElementById('colorFondo');
const nombreColorFondoImg = document.getElementById('nombreColorFondoImg');

colorFondo.addEventListener('input',() =>{
    let inputColor = colorFondo.value;
    divUrl.style.backgroundColor = inputColor; 
    nombreColorFondoImg.textContent = `${inputColor}`;
});

//BACKGROUND BLENDER MODE (del div imagenMeme)
const blenderMode = document.getElementById('blMode');
blenderMode.addEventListener('input', ()=> {
    divUrl.style.backgroundBlendMode = blenderMode.value;
});

//FILTROS
//CREANDO LOS FILTROS EN EL HTML

const filtersContainer = document.getElementById('boxFilters');

const properties = [
    { name: "brightness"    , default: 1    , min: 0    , max: 10   , step: 0.1 , convertValue: (val) => `${val}`   },
    { name: "opacity"       , default: 1    , min: 0    , max: 1    , step: 0.1 , convertValue: (val) => `${val}`   },
    { name: "contrast"      , default: 100  , min: 100  , max: 1000 , step: 1   , convertValue: (val) => `${val}%`  },
    { name: "blur"          , default: 0    , min: 0    , max: 10   , step: 0.1 , convertValue: (val) => `${val}px` },
    { name: "grayscale"     , default: 0    , min: 0    , max: 100  , step: 1   , convertValue: (val) => `${val}%`  },
    { name: "sepia"         , default: 0    , min: 0    , max: 100  , step: 1   , convertValue: (val) => `${val}%`  },
    { name: "hue-rotate"    , default: 0    , min: 0    , max: 360  , step: 1   , convertValue: (val) => `${val}deg`},
    { name: "saturate"      , default: 100  , min: 100  , max: 1000 , step: 10  , convertValue: (val) => `${val}%`  },
    { name: "invert"        , default: 1    , min: 0    , max: 100  , step: 0.1 , convertValue: (val) => `${val}%`  }
]

console.log(properties); 
const createSlider = (property) => {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.id = property.name + "Slider";
    slider.min = property.min;
    slider.max = property.max;
    slider.step = property.step;
    slider.value = property.default;

    const label = document.createElement("label");
    label.innerText = property.name;
    label.htmlFor = slider.id;
    
    [label, slider].forEach(el => filtersContainer.appendChild(el))
}

properties.forEach(createSlider)

const propertiesElements = properties.map(property => ({
    ...property, 
    element: document.getElementById(property.name + "Slider") //llamo a todos los slider.id
}));

console.log(propertiesElements); 

//CAMBIAR LOS VALORES DE LOS FILTROS
const updateFilter = () => {
    const filter = propertiesElements.map(el => `${el.name}(${el.convertValue(el.element.value)})`).join(" ");
    divUrl.style.filter = filter;
    
};


propertiesElements.forEach(property => property.element.addEventListener("change", updateFilter));


//REGRESAR A LOS VALORES DE LOS FILTROS POR DEFAULT
const resetFilter = () => { 
    propertiesElements.forEach(property => {
        property.element.value = property.default 
    })
    updateFilter()
}

document.getElementById("btn-filtro").addEventListener("click", resetFilter);

//SOLAPA TEXTO

//TEXTO SUP/INF
const inTxSuperior = document.getElementById('text-superior');
const inTxInferior = document.getElementById('text-inferior');
const textSup = document.getElementById('textSup');
const textInf = document.getElementById('textInf');

inTxSuperior.addEventListener('input',() =>{
    textSup.innerHTML = inTxSuperior.value; 
});
inTxInferior.addEventListener('input',() =>{
    textInf.innerHTML = inTxInferior.value; 
});

// SELECCIÓN DE FUENTES
const selectFuente = document.getElementById('selectFuente');
selectFuente.addEventListener('input', ()=> {  //'change', (event)
    textSup.style.fontFamily = selectFuente.value;  //event.target.value
    textInf.style.fontFamily = selectFuente.value; //event.target.value
});

//TAMAÑO DE FUENTE
const fontSize = document.getElementById('fontSize');
fontSize.addEventListener('input', ()=>{
    textSup.style.fontSize = `${fontSize.value}px`;
    textInf.style.fontSize = `${fontSize.value}px`;
});

//SELECCIÓN DE ALINEACIÓN DE TEXTO

const textLeftBt = document.getElementById('boton-txLeft');
const textCenterBt = document.getElementById('boton-txCenter');
const textRightBt = document.getElementById('boton-txRight');

textLeftBt.addEventListener('click', ()=>{
    textSup.style.textAlign = "left";
    textInf.style.textAlign = "left";

});
textCenterBt.addEventListener('click', ()=>{
    textSup.style.textAlign = "center";
    textInf.style.textAlign = "center";

});
textRightBt.addEventListener('click', ()=>{
    textSup.style.textAlign = "right";
    textInf.style.textAlign = "right";

});

//COLOR y FONDO TEXTO
const colorTexto = document.getElementById('colorTexto');
const colorTxFondo = document.getElementById('colorTxFondo');
const nombreFondoClTx = document.getElementById('nombreFondoClTx');
const nombreColorTx = document.getElementById('nombreColorTx');

colorTxFondo.addEventListener('input',() =>{
    let pafoColor = colorTxFondo.value;
    textSup.style.backgroundColor = pafoColor; 
    textInf.style.backgroundColor = pafoColor;
    nombreFondoClTx.textContent = `${pafoColor}`;
});

colorTexto.addEventListener('input',() =>{
    let pafoLetraColor = colorTexto.value;
    textSup.style.color = pafoLetraColor; 
    textInf.style.color = pafoLetraColor;
    nombreColorTx.textContent = `${pafoLetraColor}`;
});

//CHECKBOX de TEXTO SUP/INF
const inputSCheck = document.getElementById('checkbox-superior');
const inputICheck = document.getElementById('checkbox-inferior');

inputSCheck.addEventListener('input', () => {
    if (inputSCheck.checked) {
      console.log('checkeado');
      inTxSuperior.disabled = true; 
      textSup.style.display = "none";
    } else {
      console.log('sin checkear');
      inTxSuperior.disabled = false;
      textSup.style.display = "block";
      textSup.style.color = `${colorTexto.value}`;
    }
});

inputICheck.addEventListener('input', () => {
    if (inputICheck.checked) {
      console.log('checkeado');
      inTxInferior.disabled = true; 
      textInf.style.display = "none";
    } else {
      console.log('sin checkear');
      inTxInferior.disabled = false;
      textInf.style.display = "block";
      textInf.style.color = `${colorTexto.value}`;
    }
});

//FONDO de texto TRANSPARENTE
 const fondoTransparente = document.getElementById('fondo-transparente');
 const divMeme = document.getElementById('divMeme')
 
 fondoTransparente.addEventListener('input', () => {
     if (fondoTransparente.checked) {
       console.log('checkeado');
       colorTexto.disabled = true; 
       colorTxFondo.disabled = true; 
       textSup.style.backgroundColor = "transparent";
       textInf.style.backgroundColor = "transparent";
       textSup.style.position = "absolute";
       textInf.style.position = "absolute";
     } else {
       console.log('sin checkear');
       colorTexto.disabled = false; 
       colorTxFondo.disabled = false; 
       textSup.style.position = "static";
       textInf.style.position = "static";
       textSup.style.backgroundColor = `${colorTxFondo.value}`;
       textInf.style.backgroundColor = `${colorTxFondo.value}`;
 
       //colorTxFondo.dispatchEvent(new Event('input'))
     }
 });

//CONTORNO (Text shadow)
const sinContorno = document.getElementById('sinCont');
const contClaro = document.getElementById('contClaro');
const contOscuro = document.getElementById('contOscuro');

sinContorno.addEventListener('click', ()=>{
    textSup.style.textShadow = "none";
    textInf.style.textShadow = "none";
});

contClaro.addEventListener('click', ()=>{
    textSup.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
    textInf.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
});

contOscuro.addEventListener('click', ()=>{
    textSup.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
    textInf.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
});

//ESPACIADO
const inEspaciado = document.getElementById('paddingTB');
inEspaciado.addEventListener('input', ()=>{
    textSup.style.padding = `${inEspaciado.value}px 50px`;
    textInf.style.padding = `${inEspaciado.value}px 50px`;
});

//INTERLINEADO 
const selectInterlineado = document.getElementById('interlineado');
selectInterlineado.addEventListener('input', ()=>{
    textSup.style.lineHeight = selectInterlineado.value;
    textInf.style.lineHeight = selectInterlineado.value;
});
//BOTÓN DE DESCARGA
const descargarBtn = document.getElementById('descargarImg');

descargarBtn.addEventListener('click', ()=>{
    
  
    domtoimage.toBlob(divMeme)
    .then(function (blob) {
    window.saveAs(blob, 'my-node.png');
   
    })
});

//Subir una imagen desde tu pc/celular
document.getElementById('inpFile').addEventListener("change", function(){
    const file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function(){
        divUrl.style.backgroundImage = `url(${this.result})`;
    })
    reader.readAsDataURL(file); 
});

//Ajustar el contenedor del meme (alto=ancho)
const ajustarImagen = () => {
	divMeme.style.height = `${
	  divMeme.getBoundingClientRect().width
	}px`
};

window.addEventListener('resize', ajustarImagen);