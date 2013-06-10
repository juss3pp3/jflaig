var ctx;var width = 320;
var des;
var height=320;
var intervalId;
var barraCodigo =0;
var semaforoCodigo =1;
var zetea =15;
var semaforoLineas =1;
var semaforor = -1;
var explicacion = new Array();
var  a = 'prueba';
var  divisor = 'teclado.nextString()';
var  resultado1 = 0;
var  i = 0;
var  c = 0;
explicacion[0] = '';
explicacion[1] = '';
explicacion[2] = '';
explicacion[3] = '';
explicacion[4] = '';
explicacion[5] = '';
explicacion[6] = '';
explicacion[7] = '';
explicacion[8] = '';
explicacion[9] = '';
explicacion[10] = '';
explicacion[11] = '';
explicacion[12] = '';
explicacion[13] = '';
explicacion[14] = '';
var iniciclo8=8;
var finciclo12=12;
function draw(){
ctx.strokeRect(0,0,700,400);
};
function init(){
ctx = document.getElementById('canvas').getContext('2d');
des = document.getElementById('canvas').getContext('2d');
 intervalId = setInterval(draw, 10);
};
function cargado(){
if(semaforoCodigo == 1){
var objetoCanvas = document.getElementById('canvas');
if(objetoCanvas.getContext){
var contextoCanvas = objetoCanvas.getContext('2d')
contextoCanvas.font = '20px Times New Roman';
contextoCanvas.textAlign='left';
 contextoCanvas.fillText('import java.util.*;',10,40);
 contextoCanvas.fillText('public class Proyecto{',10,60);
 contextoCanvas.fillText('	String a = "prueba";',10,80);
 contextoCanvas.fillText('	System.out.print(a);',10,100);
 contextoCanvas.fillText('	String divisor = teclado.nextString();',10,120);
 contextoCanvas.fillText('	int resultado1 = a.length;',10,140);
 contextoCanvas.fillText('	int i = 0;',10,160);
 contextoCanvas.fillText('	int c = 0;',10,180);
 contextoCanvas.fillText('	while(i<resultado1){',10,200);
 contextoCanvas.fillText('		c = a.charAt(i);',10,220);
 contextoCanvas.fillText('		System.out.println(c);',10,240);
 contextoCanvas.fillText('		i = i +1;',10,260);
 contextoCanvas.fillText('	}',10,280);
 contextoCanvas.fillText('}',10,300);
 contextoCanvas.fillText('}',10,320);
semaforoCodigo = 2;
}
}
};
function Siguiente(){
if(semaforoLineas <= zetea){
des.strokeStyle = '#CCCC00';
 des = document.getElementById('canvas').getContext('2d');
if(barraCodigo != 0){
des.clearRect (0, 0,  700, 400);
 semaforoCodigo=1;
 cargado();
}
barraCodigo = barraCodigo + 20;
semaforor=semaforor+1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('tejecucion').value = '';
document.getElementById('texplicacion').value = explicacion[semaforor];
if(semaforor==finciclo12 && i<resultado1){
semaforor=iniciclo8 -1;
semaforoLineas = semaforoLineas - ((finciclo12) - (iniciclo8 -1));
barraCodigo = barraCodigo - (20 *((finciclo12) - (iniciclo8 -1)));}
else{semaforor=semaforor;}
 if(semaforor==2){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '	String a  =  "prueba";';
}
 if(semaforor==4){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '	String divisor  =  teclado.nextString();';
}
 if(semaforor==5){
  resultado1 =  Math.floor( a.length);
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '	int resultado1  = ' + resultado1;
}
 if(semaforor==6){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '	int i  =  0;';
}
 if(semaforor==7){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '	int c  =  0;';
}
 if(semaforor==9){
  c =   a.charAt(i);;
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '		c  = ' + c;
}
 if(semaforor==10){
document.getElementById('tejecucion').value = c;
}
 if(semaforor==11){
  i =   i +1;;
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '		i  = ' + i;
}
semaforoLineas = semaforoLineas+1;
}
else
{
alert('Se ha acabado el programa');
}
}
function Anterior(){
if(semaforoLineas > 2){
des= document.getElementById('canvas').getContext('2d');
if(barraCodigo >= 20){
des.clearRect (0, 0,  700, 400);
semaforoCodigo=1;
cargado();
}
 barraCodigo = barraCodigo - 20;
semaforor=semaforor-1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('texplicacion').value = explicacion[semaforor];
semaforoLineas = semaforoLineas-1;
}
else{
alert('Comienzo del programa');
}
}
