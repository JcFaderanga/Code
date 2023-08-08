
function set(set){
	document.getElementById('title').innerHTML = set;
}
function setVal(setVal){
	document.getElementById('code').value = setVal;
}
document.querySelector('button').onclick = function(){
    var gcrcode = document.getElementById('code').value;
		navigator.clipboard.writeText(gcrcode);
		clear();
		sub();
}
 function sub(setSub){
     	if(setSub === 0){
         document.querySelector('.box0').classList.toggle('active');
	    }
	   else if(setSub === 1){
	   	document.querySelector('.box1').classList.toggle('active');
        }
        else if(setSub === 2){
	   	document.querySelector('.box2').classList.toggle('active');
        }	
        else if(setSub === 3){
	   	document.querySelector('.box3').classList.toggle('active');
        }	
        else if(setSub === 4){
	   	document.querySelector('.box4').classList.toggle('active');
        }	
        else if(setSub === 5){
	   	document.querySelector('.box5').classList.toggle('active');
        }			
        else if(setSub === 6){
	   	document.querySelector('.box6').classList.toggle('active');
        }	
        else if(setSub === 7){
	   	document.querySelector('.box7').classList.toggle('active');
        }	

	}
function clear(){
	document.querySelector('.form').style.display="none";

	}
document.querySelector('#b0').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Advance Database System");
   		setVal("kqbxfot");
   		sub(0);
   		
   	});

document.querySelector('#b1').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Mathematical Statistic");
   		setVal("fzwtjme");
   		sub(1);
   		});

document.querySelector('#b2').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Integrative Programming & Technology 1");
   		setVal("i7gxbv5");
   		sub(2);
   		});

document.querySelector('#b3').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Event-driven Programming");
   		setVal("453lds6");
   		sub(3);
   		});

document.querySelector('#b4').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Professional Elective 1");
   		setVal("rmus7be");
   		sub(4);
   		});

document.querySelector('#b5').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Project Management in IT");
   		setVal("vkavu6q");
   		sub(5);
   		});

document.querySelector('#b6').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Professional Develoment 5");
   		setVal("2kzb4fg");
   		sub(6);
   		});

document.querySelector('#b7').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Foreign Language");
   		setVal("m4k6wie");
   		sub(7);
   		});

