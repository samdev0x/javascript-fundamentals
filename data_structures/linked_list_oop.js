// Create singly linked list

class LinkedList {
    constructor() {
		this.head = null;
		this.size = 0;
	}

	append(value) {
		const node = {
			value: value,
			next: null,
		}

		if (this.head === null) {
			this.head = node;
			this.size++;
			return;
		}

		let current = this.head;
		while (current.next !== null) {
			current = current.next;
		}

		current.next = node;
		this.size++;
		return;
    }

	prepend(value) {
		const node = {
			value: value,
			next: this.head,
		}

		this.head = node;
		this.size++;
		return;
	}

	find(value) {
		let current = this.head;
		while (current !== null) {
			if (current.value === value) {
				return current;
			}
			current = current.next
		}
		return null;
	}

	remove(value) {
		if (this.head === null) return null;

		if (this.head.value === value) {
			const removed = this.head;
			this.head = this.head.next;
			removed.next = null;
			this.size--;
			return removed;
		}

		let previous = this.head;
		let current = this.head.next;

		while (current !== null) {
			if (current.value === value) {
				previous.next = current.next;
				current.next = null;
				this.size--;
				return current;
			}
			previous = current;
			current = current.next;
		}
		return null;
	}

	toArray() {
		const array = [];
		let current = this.head;
		while (current !== null) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}
}


function main() {
	let list = new LinkedList;
	list.append("b");
	list.append("c")
	list.prepend("a");
	console.log(list);
	console.log(list.find("c"));
	list.remove("c");
	console.log(list);
	console.log(list.size);
	console.log(list.toArray());
}

main();