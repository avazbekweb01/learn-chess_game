let chesList = document.querySelector('.list');

let fil=document.querySelector('#fil');
let ot=document.querySelector('#ot');
let piyoda=document.querySelector('#piyoda');
let tora=document.querySelector('#tora');
let vazir=document.querySelector('#vazir');
let shoh=document.querySelector('#shoh');
let oyinchi=document.querySelectorAll('.com-item');

let arr=[];

// for cards position 

for(let i=8;i>=1;i--){
    for(let j=1;j<=8;j++){
        arr.push({
            
            y:j,
            x:i,
        })
    }
}


arr.forEach((item,i)=>{    // create item chess card 
    let li = document.createElement('li');
    li.innerHTML =`
      <span class="text-index"  id="span1">${item.x} </span>
      <span  class="text-index" id="span2"> ${item.y}</span>
    `;
    li.className="list-item";

    if((item.x+item.y)%2==0){//  if black cards
        li.classList.add('img-black')
    }else{// white cards 
        li.classList.add('img-white')
    }
    chesList.appendChild(li);
})


let liArr= document.querySelectorAll('.list-item'); // lists array
liArr.forEach((list,k)=>{// positon card function 
     list.addEventListener('mouseenter',(e)=>{
         list.classList.add('bg')
         let w= e.target.querySelectorAll('span');
          let xx=w[0].innerHTML;
          let yy=w[1].innerHTML;
          document.querySelector('.posx').innerHTML=xx;
          document.querySelector('.posy').innerHTML=yy;
     })
     list.addEventListener('mouseleave',(e)=>{
        list.classList.remove('bg')
         let w= e.target.querySelectorAll('span');
          let xx=w[0].innerHTML;
          let yy=w[1].innerHTML;
     })

})

for(let i=0;i<oyinchi.length;i++){
   oyinchi[i].addEventListener('click',(e)=>{
  
      for(let j=0;j<oyinchi.length;j++){
         if(i!=j) oyinchi[j].classList.remove('active');
      }
      oyinchi[i].classList.add('active');
   })
}


let count =0;

fil.addEventListener('click' , (e)=>{
  
      liArr.forEach((item,i)=>{

        item.addEventListener('mouseenter',(k)=>{
        if(fil.classList.contains('active')){
          item.classList.add('img-fil');
        }else{
          item.classList.remove('img-fil');
        }
          let x=+item.querySelectorAll('span')[0].innerHTML;
          let y=+item.querySelectorAll('span')[1].innerHTML;
             liArr.forEach((b,k)=>{
              let x1=+b.querySelectorAll('span')[0].innerHTML;
              let y1=+b.querySelectorAll('span')[1].innerHTML;
                if((((x+y)%2==0 && (x1+y1)%2==0) ||((x+y)%2==1 && (x1+y1)%2==1)) && (((x+1==x1 && y+1==y1)||(x+2==x1 && y+2==y1)||(x+3==x1 && y+3==y1)||(x+4==x1 && y+4==y1)||(x+5==x1 && y+5==y1)||(x+6==x1 && y+6==y1)||(x+7==x1 && y+7==y1)) || ((x1+1==x && y1+1==y)||(x1+2==x && y1+2==y)||(x1+3==x && y1+3==y)||(x1+4==x && y1+4==y)||(x1+5==x && y1+5==y)||(x1+6==x && y1+6==y)||(x1+7==x && y1+7==y))) ||((x+y)%2==0 && (x1+y1)%2==0) &&((x!=x1)&&(y!=y1)&&(x+y == x1+y1))){
            
                  b.className+=' green';
                }  else if(((x+y)%2==1 &&(x1+y1)%2==1) && (((x-1==x1 && y+1==y1)||(x-2==x1 && y+2==y1)||(x-3==x1 && y+3==y1)||(x-4==x1 && y+4==y1)||(x-5==x1 && y+5==y1)||(x-6==x1 && y+6==y1)||(x-7==x1 && y+7==y1)) ||((x+1==x1 && y-1==y1)||(x+2==x1 && y-2==y1)||(x+3==x1 && y-3==y1)||(x+4==x1 && y-4==y1)||(x+5==x1 && y-5==y1)||(x+6==x1 && y-6==y1)||(x+7==x1 && y-7==y1))) ){
                  b.classList.add('green')
                }else{
                  b.classList.remove('green')
         
                }
             })
        })
        item.addEventListener('mouseleave',(k)=>{
          item.classList.remove('img-fil');
        })

      })

    
})

ot.addEventListener('click',(e)=>{
       
        liArr.forEach((item,i)=>{
            item.addEventListener('mouseenter',(k)=>{
              if(ot.classList.contains('active')){
                item.classList.add('img-ot');
              }else{
                item.classList.remove('img-ot');
              }
             

              let x=+item.querySelectorAll('span')[0].innerHTML;
              let y=+item.querySelectorAll('span')[1].innerHTML;
                 liArr.forEach((b,k)=>{
                  let x1=+b.querySelectorAll('span')[0].innerHTML;
                  let y1=+b.querySelectorAll('span')[1].innerHTML;
                    if((((x+y)%2==1 && (x1+y1)%2==0) || ((x+y)%2==0 && (x1+y1)%2==1) ) && ((x+2==x1&&y+1==y1)||(x+2==x1&&y-1==y1)||(x-2==x1&&y+1==y1)||(x-2==x1&&y-1==y1)||(y+2==y1&&x+1==x1)||(y+2==y1&&x-1==x1)||(y-2==y1&&x+1==x1)||(y-2==y1&&x-1==x1))){
                      b.className+=' green';
                    }  else{
                      b.classList.remove('green');
                    }
                 })
            })
            item.addEventListener('mouseleave',(k)=>{
              item.classList.remove('img-ot');
            })
      })
       
console.log(count);
 
})

piyoda.addEventListener('click',(e)=>{
       
  liArr.forEach((item,i)=>{
      item.addEventListener('mouseenter',(k)=>{
        if(piyoda.classList.contains('active')){
          item.classList.add('img-piyoda');
        }else{
          item.classList.remove('img-piyoda');
        }
       

        let x=+item.querySelectorAll('span')[0].innerHTML;
        let y=+item.querySelectorAll('span')[1].innerHTML;
           liArr.forEach((b,k)=>{
            let x1=+b.querySelectorAll('span')[0].innerHTML;
            let y1=+b.querySelectorAll('span')[1].innerHTML;
              if(((y==y1)&&(x!=1)) &&((x==2&&(x1==4||x1==3))||(x+1==x1))){
                b.className+=' green';
              }  else{
                b.classList.remove('green');
              }
           })
      })
      item.addEventListener('mouseleave',(k)=>{
        item.classList.remove('img-piyoda');
      })
})
 
console.log(count);

})

tora.addEventListener('click',(e)=>{
       
  liArr.forEach((item,i)=>{
      item.addEventListener('mouseenter',(k)=>{
        if(tora.classList.contains('active')){
          item.classList.add('img-tora');
        }else{
          item.classList.remove('img-tora');
        }
       

        let x=+item.querySelectorAll('span')[0].innerHTML;
        let y=+item.querySelectorAll('span')[1].innerHTML;
           liArr.forEach((b,k)=>{
            let x1=+b.querySelectorAll('span')[0].innerHTML;
            let y1=+b.querySelectorAll('span')[1].innerHTML;
              if((x1==x && y!=y1)||(x1!=x && y==y1)){
                b.className+=' green';
              }  else{
                b.classList.remove('green');
              }
           })
      })
      item.addEventListener('mouseleave',(k)=>{
        item.classList.remove('img-tora');
      })
})
 
})


vazir.addEventListener('click',(e)=>{
       
  liArr.forEach((item,i)=>{
      item.addEventListener('mouseenter',(k)=>{
        if(vazir.classList.contains('active')){
          item.classList.add('img-vazir');
        }else{
          item.classList.remove('img-vazir');
        }
       

        let x=+item.querySelectorAll('span')[0].innerHTML;
        let y=+item.querySelectorAll('span')[1].innerHTML;
           liArr.forEach((b,k)=>{
            let x1=+b.querySelectorAll('span')[0].innerHTML;
            let y1=+b.querySelectorAll('span')[1].innerHTML;
              if(((((x+y)%2==0 && (x1+y1)%2==0) ||((x+y)%2==1 && (x1+y1)%2==1)) && (((x+1==x1 && y+1==y1)||(x+2==x1 && y+2==y1)||(x+3==x1 && y+3==y1)||(x+4==x1 && y+4==y1)||(x+5==x1 && y+5==y1)||(x+6==x1 && y+6==y1)||(x+7==x1 && y+7==y1)) || ((x1+1==x && y1+1==y)||(x1+2==x && y1+2==y)||(x1+3==x && y1+3==y)||(x1+4==x && y1+4==y)||(x1+5==x && y1+5==y)||(x1+6==x && y1+6==y)||(x1+7==x && y1+7==y))) ||((x+y)%2==0 && (x1+y1)%2==0) &&((x!=x1)&&(y!=y1)&&(x+y == x1+y1))||((x+y)%2==1 &&(x1+y1)%2==1) && (((x-1==x1 && y+1==y1)||(x-2==x1 && y+2==y1)||(x-3==x1 && y+3==y1)||(x-4==x1 && y+4==y1)||(x-5==x1 && y+5==y1)||(x-6==x1 && y+6==y1)||(x-7==x1 && y+7==y1)) ||((x+1==x1 && y-1==y1)||(x+2==x1 && y-2==y1)||(x+3==x1 && y-3==y1)||(x+4==x1 && y-4==y1)||(x+5==x1 && y-5==y1)||(x+6==x1 && y-6==y1)||(x+7==x1 && y-7==y1))))||((x1==x && y!=y1)||(x1!=x && y==y1))){
                b.className+=' green';
              }  else{
                b.classList.remove('green');
              }
           })
      })
      item.addEventListener('mouseleave',(k)=>{
        item.classList.remove('img-vazir');
      })
})
 
})
shoh.addEventListener('click',(e)=>{
       
  liArr.forEach((item,i)=>{
      item.addEventListener('mouseenter',(k)=>{
        if(shoh.classList.contains('active')){
          item.classList.add('img-shoh');
        }else{
          item.classList.remove('img-shoh');
        }
       

        let x=+item.querySelectorAll('span')[0].innerHTML;
        let y=+item.querySelectorAll('span')[1].innerHTML;
           liArr.forEach((b,k)=>{
            let x1=+b.querySelectorAll('span')[0].innerHTML;
            let y1=+b.querySelectorAll('span')[1].innerHTML;
              if(((x==x1)&&( (y == y1+1) || (y == y1-1))) || ((y==y1 )&&((x== x1+1)||(x==x1-1)))||(((x==x1+1)&&(y==y1+1)))||(((x ==x1+1)&&(y==y1-1)))||(((x ==x1-1)&&(y==y1+1)))||(((x ==x1-1)&&(y==y1-1))) ){
                b.className+=' green';
              }  else{
                b.classList.remove('green');
              }
           })
      })
      item.addEventListener('mouseleave',(k)=>{
        item.classList.remove('img-shoh');
      })
})
 
})
chesList.addEventListener('mouseleave',(e)=>{
        liArr.forEach((item)=>{
          if(item.classList.contains('green')){
            item.classList.remove('green');
          }
    
            
        })
})

