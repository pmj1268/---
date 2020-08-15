$(function(){
    console.log('ok');

   function check(Id){
       var idValue = Id.value;
       var idLen = idvalue.length;

       alert('이름은 '+ idValue+", 문자 길이는 "+ idLen);
   }
});