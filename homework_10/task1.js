function debounce(callB, time) {
	let timer = 0;
	return call = function () {
		clearTimeout(timer);
		timer = setTimeout(callB, time);
	}
}




let iterator = 0;

function increaseIteratorBy1() {
	iterator++;

	printIteratorValue();
}

function printIteratorValue() {
	console.log('Iterator value ', iterator);
}





var increaseIterator = debounce(increaseIteratorBy1, 1000);
//
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();

// Should print 'Iterator value 1'
