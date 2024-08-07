var addx= document.getElementById('add1');
addx.addEventListener('click', addfun);

function addfun(){
  var name1=document.getElementById('name').value;
  var age1=document.getElementById('age').value;
  var job1=document.getElementById('job').value;
  
  if(name1==='' || age1==='' || job1 ===''){
    alert("Please fill all the fielld");
    return;
  }
  
  var table=document.querySelector('#table1 tbody');

  var newrow=document.createElement('tr');
  
  var namec=document.createElement('td');
  namec.textContent=name1;
  newrow.appendChild(namec);
  
  var jobc=document.createElement('td');
  jobc.textContent=job1;
  newrow.appendChild(jobc);
  
  var agec=document.createElement('td');
  agec.textContent=age1;
  newrow.appendChild(agec);
  

  table.appendChild(newrow);
  
   document.getElementById('name').value = '';
   document.getElementById('age').value = '';
   document.getElementById('job').value = '';
}
