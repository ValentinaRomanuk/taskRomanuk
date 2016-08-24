const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {

	}

	push(data, priority) {

	}

	shift() {

	}

	size() {
		var length = 0;
			this.traverse(function(node){
				length++;
			});
			return length;
	}

	isEmpty() {
		if(this.root == null){
			return true;
		}
		else{
			return false;
		}
	}
}

module.exports = PriorityQueue;
