// import LinkedListNode from "./LinkedListNode";

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // head and tail are Reference variable
        // head point to first Node and tail point to last Node
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // return head Node in the list
    getHead() {
        return this.head.value;
    }

    // return tail Node in the list
    getTail() {
        return this.tail.value;
    }

    // give size of the list
    getSize() {
        return this.size;
    }

    // check listIsEmpty give true are fasle
    // false means it's contain node and true means it's empty
    isEmpty() {
        return this.size === 0;
    }


    // add element first of the list
    insertFirst(val) {
        const node = new LinkedListNode(val);

        node.next = this.head;
        this.head = node;

        // add a first node that's why head and tail point to the same node
        if (this.tail === null) this.tail = this.head;

        this.size++;
    }

    // add element end of the list
    insertLast(val) {
        if (this.tail === null) {
            this.insertFirst(val);
            return;
        }
        const node = new LinkedListNode(val);
        this.tail.next = node;
        this.tail = node;
        // node.next = null;
        
        this.size++;
    }


    // prints the list
    printList() {
        let current = this.head;
        let str = '';

        while (current) {   // current !== null
            str += current.value + ' -> ';
            current = current.next;
        };
        console.log(str + 'END');
    }
}


const linkedList = new LinkedList();
//insert first
linkedList.insertFirst(3);
linkedList.insertFirst(2);
linkedList.insertFirst(8);
linkedList.insertFirst(17);
linkedList.printList();
console.log(linkedList.getSize());
// insert last
linkedList.insertLast(99);
linkedList.insertLast(100);
linkedList.printList();
console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log(linkedList.getSize());

