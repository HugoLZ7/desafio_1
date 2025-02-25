var edad, peso, altura, frecuencia, imc, frecmax, presArterial;
var nombre ;
var apellido;

//INGRESO DE DATOS USAURIO
nombre = prompt("Ingresar el nombre del paciente:");

apellido = prompt("Ingresar el apellido del paciente:");

edad = parseInt(prompt("Ingresar edad del paciente:"));

peso = parseFloat(prompt("Ingresar peso del paciente:"));

altura = parseFloat(prompt("Ingresar estatura del paciente:"));

frecuencia = parseInt(prompt("Ingresar frecuencia actual del paciente:")); 

presArterial = prompt("Ingresar presion arterial Asistolica / Diastolica:"); 

document.write("<nav class='navbar bg-body-tertiary bg-dark'>");
document.write("<div class='container-fluid'>");
document.write("<span class='navbar-brand mb-0 h1' style = 'color:white'>Monitor de Salud</span>");
document.write("</div>");
document.write("</nav>");

document.write("<div class='container text-center' style ='margin-bottom: 40px'>");
document.write('<h1>Nombre del paciente: <span style="font-size: 1em;">' + nombre + " " + apellido + '</span></h1>');
document.write("</div>");

//IMPRESION DE DATOS
document.write("<div class='container text-center'>");
document.write("<div class='row'>");

if(edad <= 100){
document.write("<div class='col' style = 'border: 2px solid black;'>");
document.write('<h3>Edad del paciente: <span style="font-size: 1em;">' + edad + '</span></h3>');
document.write("<img src='img/heart.png' style ='width: 50px'>");
document.write("</div>");
}

document.write("<div class='col' style = 'border: 2px solid black;'>");
document.write('<h3>Peso del paciente: <span style="font-size: 1em;">' + peso + '</span></h3>');
document.write("<img src='img/peso.png' style ='width: 50px'>");
document.write("</div>");

document.write("<div class='col' style = 'border: 2px solid black;'> ");
document.write('<h3>Altura del paciente: <span style="font-size: 1em;">' + altura + '</span></h3>');
document.write("<img src='img/altura.png' style ='width: 50px'>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

//FORMULA IMC
document.write("<div class='container text-center' style ='margin-top: 30px'>");
document.write("<div class='row'>");

imc = peso / Math.pow(altura, 2);
imc = Math.round(imc,2);

document.write("<div class='col' style = 'border: 2px solid black;'>");
document.write('<h3>IMC actual: <span style="font-size: 1em;">' + imc + '</span></h3>');
document.write("</div>");

if(imc<18.5){
    document.write("<div class='col' style = 'border: 2px solid black;'>");
    document.write("<h3>DELGADO</h3>");
    document.write("</div>");
}
else if(imc>=18.5 && imc<=24.9){
    document.write("<div class='col' style = 'border: 2px solid black;'>");
    document.write("<h3>ACEPTABLE</h3>");
    document.write("</div>");
}
else if(imc>=25 && imc<=29.9){
    document.write("<div class='col' style = 'border: 2px solid black;'>");
    document.write("<h3>SOBREPESO</h3>");
    document.write("</div>");
}
else if(imc>=30 && imc<=34.9){
    document.write("<div class='col' style = 'border: 2px solid black;'>");
    document.write("<h3>OBESIDAD BAJA</h3>");
    document.write("</div>");
}
else if(imc>=35 && imc<=39.9){
    document.write("<div class='col' style = 'border: 2px solid black;'>");
    document.write("<h3>OBESIDAD MEDIA</h3>");
    document.write("</div>");
}
else if(imc>=40){
    document.write("<div class='col' style = 'border: 2px solid black;'>");
    document.write("<h3>OBESIDAD GRAVE</h3>");
    document.write("</div>");
}

frecmax = 220 - edad;
document.write("<div class='col' style = 'border: 2px solid black;'>");
document.write('<h3>Frecuencia Actual: <span style="font-size: 1em;">' + frecuencia + '</span></h3>');
document.write('<h3>Frecuencia Max: <span style="font-size: 1em;">' + frecmax + '</span></h3>');
document.write("</div>");


document.write("<div class='col' style = 'border: 2px solid black;'>");
document.write('<h3>Presion Arterial del Paciente: <span style="font-size: 1em;">' + presArterial + '</span></h3>');
document.write("</div>");

document.write("</div>");


//TABLA DE CLASIFICACION
with (document) {
    write("<div class=\"container\" style ='margin-top: 30px'>");
    write("<div class=\"row\">");
    write("<table class=\"table table-info table-striped table-hover\">");
    write("<thead>");
    write("<tr>");
    write("<th>IMC[PESO(KG)/TALLA2(M)</th>");
    write("<th>CLASIFICACION DE LA OMS</th>");
    write("<th>DESCRIPCION POPULAR</th>");
    write("</tr>");
    write("</thead>");
    write("<tbody>");
    write("<tr>");
    write("<td><18.5 </td>");
    write("<td>BAJO PESO  </td>");
    write("<td>DELGADO</td>");
    write("</tr>");
    write("<tr>");
    write("<td>18.5 - 24.9</td>");
    write("<td>ADECUADO</td>");
    write("<td>ACEPTABLE</td>");
    write("</tr>");
    write("<tr>");
    write("<td>25.0 - 29.9</td>");
    write("<td>SOBREPESO</td>");
    write("<td> SOBREPESO</td>");
    write("</tr>");
    write("<tr>");
    write("<td>30.0 - 34.9</td>");
    write("<td>OBESIDAD GRADO 1</td>");
    write("<td>OBESIDAD</td>");
    write("</tr>");
    write("<tr>");
    write("<td>35.0 - 39.9</td>");
    write("<td>OBESIDAD GRADO 2</td>");
    write("<td>OBESIDAD</td>");
    write("</tr>");
    write("<tr>");
    write("<td>>40</td>");
    write("<td>OBESIDAD GRADO 2</td>");
    write("<td> SOBREPESO</td>");
    write("</tr>");
    write("</tbody>");
    write("</table>");
    write("</div>");
    write("</div>");
}
//tabla de frecuencia
with (document) {
    write("<div class=\"container\" style ='margin-top: 30px'>");
    write("<div class=\"row\">");
    write("<table class=\"table table-dark table-striped-columns table-hover\">");
    write("<thead>");
    write("<tr>");
    write("<th>EDAD</th>");
    write("<th>ZONA DE OBJETIVO DE FRECUENCIA CARDIACA</th>");
    write("<th>PROMEDIO DE FRECUENCIA CARDIACA MAXIMA</th>");
    write("</tr>");
    write("</thead>");
    write("<tbody>");
    write("<tr>");
    write("<td>20 años </td>");
    write("<td>100 - 170 lpm</td>");
    write("<td>200 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>30 años</td>");
    write("<td>95 - 162 lpm</td>");
    write("<td>190 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>35 años</td>");
    write("<td>93 - 157 lpm</td>");
    write("<td> 185 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>40 años</td>");
    write("<td>90 - 153 lpm</td>");
    write("<td>180 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>45 años</td>");
    write("<td>88 - 149 lpm</td>");
    write("<td>175 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>50 años</td>");
    write("<td>85 - 145 lpm</td>");
    write("<td> 170 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>55 años</td>");
    write("<td>83 - 140 lpm</td>");
    write("<td> 165 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>60 años</td>");
    write("<td>80 - 136 lpm</td>");
    write("<td> 160 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>65 años</td>");
    write("<td>78 - 132 lpm</td>");
    write("<td> 155 lpm</td>");
    write("</tr>");
    write("<tr>");
    write("<td>70 años</td>");
    write("<td>75 - 128 lpm</td>");
    write("<td> 150 lpm</td>");
    write("</tr>");
    write("</tbody>");
    write("</table>");
    write("</div>");
    write("</div>");
}



