console.log("javascript file connected");

const canvas = document.getElementById('example');
const context = canvas.getContext('2d');


//rectangle filled with color
context.fillStyle = 'purple';
context.fillRect(260, 260, 30, 30);
            //    x    y    w   h


//rectangle without being filled        
context.strokeStyle = 'green';
context.strokeRect(50, 50, 50, 50);

context.strokeStyle = "#C0C0C0";
context.strokeRect(70, 70, 70, 70)

//path -> a list of connected points segments
//straight lines, arches, triangles
context.beginPath();
context.moveTo(20, 20);
context.lineTo(20, 100);
context.lineTo(100, 100);
context.strokeStyle = 'red';
context.closePath()
context.stroke();

//fill out the shape
context.beginPath();
context.moveTo(60, 60);
context.lineTo(60, 200);
context.lineTo(200, 200);
context.fillStyle = 'blue';
context.closePath()
context.fill(); // when filling dont need to closepath

//arch
context.beginPath();
context.arc(150, 100, 50, 0, Math.PI*2);
context.lineWidth = 20;
context.strokeStyle = 'purple';
context.closePath();
context.stroke();




context.beginPath();
context.arc(150, 100, 30, 0, Math.PI*2); // coordenates
context.lineWidth = 10; //size 
context.strokeStyle = 'blue';
context.closePath();
context.stroke();


//text

context.font = '30px Arial';
context.fillStyle = 'blue';
context.lineWidth = 1;
context.strokeText('Hello World', 10, 50)

//                  horizontal 10, vertical 50

//image

const cat = new Image();
cat.src = 'http://placekitten.com/200/300';
cat.onload = function() {

context.drawImage(cat, 10, 10, 100, 100);
}

// cat.addEventListener('load', () =>)


function draw(x) {
    context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(cat, x, 30, 100, 100);
        x += 3;

        setTimeout(() => {
            draw(x); //recursive function 
        }, 30);
}

draw(0);