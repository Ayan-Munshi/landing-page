Shery.imageEffect("#imagelayer" , {style: 5, config: 
{"a":{"value":1.98,"range":[0,30]},"b":{"value":0.75,
"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8119550303948215},
"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.08,"range":[1,15]},"durationOut":{"value":1.07,
"range":[0.1,5]},"durationIn":{"value":1.23,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},
"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},
"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},
"discard_threshold":{"value":0.57,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.46,
"range":[0,2]},"noise_scale":{"value":32.23,"range":[0,100]}} , gooey: true})


let elems = document.querySelectorAll(".elem")

elems.forEach(function(elem){         // reason of this is the below code was for only 1 elem but we want to animate all elems 1 by 1

 let h1s = elem.querySelectorAll('h1');  // means all h1 of elems
 let index = 0;
 let main = document.querySelector('#main');
 let animating = false;

 main.addEventListener("click", function(){

  if(!animating){

    animating = true
    gsap.to(h1s[index],{   // gsap cmmnt index = 0th h1 to animate  according to the index value
        top:'-=100%',   // gsap cmmnts text animation position
        ease: Expo.easeInOut,    
        duration: 1,  // gsap cmmnts text animation speed
        onComplete : function (){
            gsap.set(this._targets[0],{top: '100%'})  // means we are telling gsap that when animation ends then return the 0th h1 to top = "100%"
            
             animating = false    
        }
  })

 // index === h1s.length - 1  ? ( index = 0)  : index++; // same as above but just in ternary opearator

    if(index == h1s.length - 1){  // means if index = length - 1 (1st round of animation is complete) then again index = 0 if not endes then index + 1(next h1)
        index = 0
    }
    else{
        index++
    }

    gsap.to(h1s[index],{   // telling gsap to animate next h1, according to the index value
        top:'-=100%',   // gsap cmmnts text animation position
        ease: Expo.easeInOut,    
        duration: 1  // gsap cmmnts text animation speed
        
    });

 }});



})

