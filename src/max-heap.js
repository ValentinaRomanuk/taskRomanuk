const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
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

	clear() {
		
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
