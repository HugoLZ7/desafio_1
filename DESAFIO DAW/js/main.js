var edad, peso, altura, frecuencia, imc;
var nombre ;
var apellido;

//INGRESO DE DATOS USAURIO
nombre = prompt("Ingresar el nombre del paciente:");

apellido = prompt("Ingresar el apellido del paciente:");

edad = parseInt(prompt("Ingresar edad del paciente:"));

peso = parseFloat(prompt("Ingresar peso del paciente:"));

altura = parseFloat(prompt("Ingresar estatura del paciente:"));

frecuencia = parseInt(prompt("Ingresar frecuencia actual del paciente:"));

//IMPRESION DE DATOS
document.write("<div class = container style = 'display: flexbox'>");
document.write("<div class = row");

document.write("<div class = col");
document.write("<h1>Nombre del Paciente:</h1>" + nombre + apellido);
document.write("<img src='img/heart.png' style ='width: 50px'>");
document.write("</div>");

document.write("<div class = col");
document.write("<h1>Edad del Paciente:</h1>" + edad);
document.write("<img src='img/heart.png' style ='width: 50px'>");
document.write("</div>");

document.write("<div class = col");
document.write("<h1>Peso del paciente:</h1>" + peso);
document.write("<img src='img/peso.png' style ='width: 50px'>");
document.write("</div>");

document.write("<div class = col");
document.write("<h1>Estatura del Paciente:</h1>" + altura);
document.write("<img src='img/altura.png' style ='width: 50px'>");
document.write("</div>");

document.write("<div class = col");
document.write("<h1>Frecuencia Actual del Paciente:</h1>" + frecuencia);
document.write("<img src='img/CARDIO.png' style ='width: 50px'>");
document.write("</div>");

document.write("<div class = col>");
document.write("<p> El índice de masa corporal (IMC) es un número que se calcula con base en el peso y la estatura de la persona. Para la mayoría de las personas, el IMC es un indicador confiable de la gordura y se usa para identificar las categorías de peso que pueden llevar a problemas de salud.</p>");
document.write("</div>");

//FORMULA IMC
document.write("<div class = col");
imc = peso / Math.pow(altura, 2);
document.write("<h3>El IMC actual es de:</h3>" + imc);

if(imc<18.5){
    document.write("<h3>IMC=DELGADO:</h3>");
}
else if(imc>=18.5 || imc<=24.9){
    document.write("<h3>IMC=ACEPTABLE:</h3>");
}
else if(imc>=25 || imc<=29.9){
    document.write("<h3>IMC=SOBREPESO:</h3>");
}
else if(imc>=30 || imc<=34.9){
    document.write("<h3>IMC=OBESIDAD BAJA:</h3>");
}
else if(imc>=35 || imc<=39.9){
    document.write("<h3>IMC=OBESIDAD MEDIA:</h3>");
}
else if(imc>=40){
    document.write("<h3>IMC=OBESIDAD GRAVE:</h3>");
}
document.write("</div>");
document.write("</div>");
document.write("</div>");

//TABLA DE CLASIFICACION
with (document) {
    write("<div class=\"container\">");
    write("<div class=\"row\">");
    write("<table class=\"table table-primary table-striped table-hover\">");
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
    write("<td>BESIDAD GRADO 1</td>");
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


