// Create a singly linked list (functional)

function main() {
    const list = createList();
    console.log(list);
    append(list, "a");
    console.log(list);
    append(list, "b");
    console.log(list);
    append(list, "c");
    console.log(find(list, "c"));
    console.log(remove(list, "c"));
    console.log(list.size);
    console.log(toArray(list));
}

function createList() {
    const list = {
        head: null,
        size: 0,
    };
    return list;
}
    
function append(list, value) {
    const node = {
        value: value,
        next: null,
    };

    if (list.head === null) {
        list.head = node;
        list.size++;
        return;
    }

    let current = list.head;
    while (current.next !== null) {
        current = current.next;
    }

    current.next = node;
    list.size++;
    return;
}

function prepend(list, value) {
    const node = {
        value: value,
        next: list.head,
    }
    list.head = node;
    list.size++;
    return;
}

function find(list, value) {
    let current = list.head;
    while (current !== null) {
        if (current.value === value) {
            return current;
        }
        current = current.next;
    }
    return null;    
}

function remove(list, value) {
    if (list.head == null) return null;

    if (list.head.value === value) {
        const removed = list.head;
        list.head = list.head.next;
        removed.next = null;
        list.size--;
        return removed;
    }

    let previous = list.head;
    let current = list.head.next;

    while (current !== null) {
        if (current.value === value) {
            previous.next = current.next;
            current.next = null;
            list.size--;
            return current;
        }
        previous = current;
        current = current.next;
    }
    return null;
}

function toArray(list) {
    const array = [];
    let current = list.head;
    while (current !== null) {
        array.push(current.value);
        current = current.next;     
    }
    return array;
}


main();

