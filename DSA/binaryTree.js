class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    add(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        while(queue.length > 0){
            const current = queue.shift();
            if(!current.left){
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }
            
            if(!current.right){
                current.right = newNode;
                console.log(this.root);
                return;
            } else {
                queue.push(current.right);
            }
        }
        
    }

    search(valueToSearch) {
        if (!this.root) {
          return false;
        }
    
        const queue = [this.root];
        while (queue.length > 0) {
          const current = queue.shift();
          if (current.value === valueToSearch) {
            return true;
          }
          if (current.left) {
            queue.push(current.left);
          }
    
          if (current.right) {
            queue.push(current.right);
          }
        }
    
        return false;
      }
    
}
const binaryTree = new BinaryTree();
binaryTree.add(10);
binaryTree.add(20);
binaryTree.add(30);
binaryTree.add(40);
binaryTree.add(50);

console.log("Finding 80", binaryTree.search(40));