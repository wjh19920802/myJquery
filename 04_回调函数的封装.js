function fn(a){
    return a(2);
}

fn(function(b){return 1+b;});

$('li').each(function(index,domEle){

})

function each(fn){
    fn(0,this[0])
}
