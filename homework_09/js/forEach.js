function forEach(array, func){
	for (var i = 0; i < array.length; i++){
		func(array[i]);
	}
}


var list = [2, 3, 4];
//
//
//forEach(list, function(el){
//	console.log(el);
//});