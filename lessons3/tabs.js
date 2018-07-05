var tabs = document.getElementsByTagName('a');
var panels = document.getElementsByTagName('article');
function changeTabs(num) {
    for (var i = 0; i < panels.length; i++) {
       if(num === i){
           panels[i].removeAttribute('hidden');
           tabs[i].setAttribute('class','active');
       }else{
           panels[i].setAttribute('hidden','true');
           tabs[i].removeAttribute('class');
       }
    }
}
