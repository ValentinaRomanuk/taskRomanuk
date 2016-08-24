class Node {
	constructor(data, priority) {
		this.root = null;
		this.data = data;
		this.priority = priority;
		this.left = left || null;
		this.right = right || null;
	}

	appendChild(node) {
		if (this.left === null) {
			this.left = node;
			this.left.parent = this;
		}else if (this.right === null){
			this.right = node;
			this.right.parent = this;
}
	}

	removeChild(node) {

	}

	remove() {
		var currentNode = this.root;
		var parentNode = null;
		var childNode = null;
		
		while(currentNode != null && currentNode.data != data) {
	        parentNode = currentNode;
			if (data < currentNode.data){
				currentNode = currentNode.left;
			}
			else{
				currentNode = currentNode.right;
			}
	    }
	 
	    if(currentNode == null) {
	    	return;
	    } else {	 
	       	if(currentNode.left == null || currentNode.right == null) {   
	            if(currentNode.left != null) { 
	                childNode = currentNode.left;
	            } else {
	            	if(currentNode.right != null) {
	             		childNode = currentNode.right;
	            	}
	            }

	            if(parentNode == null) {
	                this.root = childNode;
	            } else {
	                if(parentNode.left == currentNode){
	                    parentNode.left = childNode;
	                } else {
	                    parentNode.right = childNode;
	                }
	            }
	        } else {
	            var leftNode = currentNode.right;
	            var leftNodeParent = currentNode;
	            
	            while(leftNode.left != null) {
	                leftNodeParent = leftNode;
	                leftNode = leftNode.left;
	            }
	 
	            currentNode.data = leftNode.data;
	 
	            if(leftNodeParent.left == leftNode) {
	                leftNodeParent.left = null;
	            } else {
	                leftNodeParent.right = null;
	            }
	        }
	    }
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
