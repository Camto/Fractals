C=document.getElementById("c");D=C.getContext("2d");D.L=D.lineTo;A=(a,b)=>{return(a+b)/2};T=(a,b,c,d,e,f,g)=>{if(g){D.beginPath();D.moveTo(a,b);D.L(c,d);D.L(e,f);D.lineTo(a,b);D.stroke();T(a,b,A(a,c),A(b,d),A(a,e),A(b,f),g-1);T(A(a,c),A(b,d),c,d,A(c,e),A(d,f),g-1);T(A(a,e),A(b,f),A(c,e),A(d,f),e,f,g-1)}};T(50,0,99,99,0,99,5);