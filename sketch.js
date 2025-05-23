function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;
function draw() {
  background(220);
  fill("brown");//cor do rosto
circle(200,200,300);//rosto
  fill("white");//cor RGB OLHOS
circle(150,160,70);//olho direito
circle(250,160,70);//olho esquerdo
  fill("beige");//cor do nariz
  triangle(170, 240, 231, 239, 198, 187);//nariz
  strokeWeight(5);//espessura da borda
  line(150,275,241,281);//boca
  line(125,113,177,114);//sonbrancelha
  line(222,113,278,110);//sonbrancelha
// código omitido

// circle(150, 150, 10); // pupila esquerda
// circle(250, 150, 10); // pupila direita

olhoX = map(mouseX, 0, 400, 130, 170);
olhoY = map(mouseY, 0, 400, 130, 170);
fill("lightblue")
circle(olhoX, olhoY, 20); // nova pupila esquerda
circle(olhoX + 100, olhoY, 20); //nova pupila direita

}
  if(mouseIsPressed){      //se mouse clicado
    console.log(mouseX,mouseY)//obtém coordenada
     
      
      
    





































}