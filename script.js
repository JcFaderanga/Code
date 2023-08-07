
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
   		setVal("jeysi");
   		sub(0);
   		
   	});

document.querySelector('#b1').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Mathematical Statistic");
   		setVal("kyrah");
   		sub(1);
   		});

document.querySelector('#b2').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Integrative Programming & Technology 1");
   		setVal("jaspher");
   		sub(2);
   		});

document.querySelector('#b3').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Event-driven Programming");
   		setVal("jinuel");
   		sub(3);
   		});

document.querySelector('#b4').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Professional Elective 1");
   		setVal("julius");
   		sub(4);
   		});

document.querySelector('#b5').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Project Management in IT");
   		setVal("rhaiza");
   		sub(5);
   		});

document.querySelector('#b6').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Professional Develoment 5");
   		setVal("grace");
   		sub(6);
   		});

document.querySelector('#b7').addEventListener('click', ()=>{
   		document.querySelector('.form').style.display="flex";
   		set("Foreign Language");
   		setVal("abdul");
   		sub(7);
   		});

