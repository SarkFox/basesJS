
function perimetroCuadrado(lado)
{
    return lado*4;

}
function areaCuadrado(lado)
{
    return lado*lado;
}


function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura)
{
    return (base*altura)/2;
}

const pi = Math.PI;
function diametroCirculo(radio)
{
    return radio*2;
}
function perimetroCirculo(radio)
{
    var diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio)
{
    return (radio*radio)*pi;
}



//Interacción con HTML
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);

}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularPerimetroTriangulo()
{
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputl1 = document.getElementById("InputTriangulol1");
    const inputl2 = document.getElementById("InputTriangulol2");

    const valueBase = inputBase.value;
    const valuel1 = inputl1.value;
    const valuel2 = inputl2.value;

    const perimetro = perimetroTriangulo(valuel1, valuel2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");

    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area);
}

particlesJS("bg", {"particles":{"number":{"value":176,"density":{"enable":true,"value_area":791.6904173791887}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":104.22178395625899,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;