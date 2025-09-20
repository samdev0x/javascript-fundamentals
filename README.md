# JS learning journey

Dev Fundamentals

This repo documents my journey of learning computer science fundamentals and problem-solving in JavaScript.

I’m starting from the ground up and refreshing topics as I go.  
The goal is to build a solid foundation step by step, practicing classic data structures and algorithms until I can code them confidently without external help.

## Learning Approach

<details>
  <summary>Click to expand</summary>

I’m following a structured cycle for each topic:

1. Go through the theory.
2. Try to understand the task clearly.
3. Attempt to solve it alone (without looking at solutions).
4. Get feedback on my approach (not full solutions, but guidance).
5. Re-try and adjust until the implementation is correct.
6. Once working, either:
   - Refactor into OOP (class-based) style, or
   - Add 1–2 extra functions for practice,  
   before moving on to the next topic.

This method has worked well so far — I notice clear improvements and faster problem-solving between Day 1 and Day 2.
</details>

---

## Progress Log

### Core Basics

<details>
  <summary><strong>Day 1 — Values vs References</strong></summary>

- **Values vs References:**
  - Primitives are copied **by value** (independent copies).
  - Objects/arrays/functions are assigned by **reference** (aliases).
  - `const` prevents reassignment but does not make objects immutable.

- **Variables & Scope:**
  - Function scope: variables declared inside a function are not accessible outside.
  - Block scope (`let`/`const`) vs function scope (`var`).
  - Lexical scope: inner functions can access variables from outer functions (closures).

- **Mutation vs Reassignment:**
  - Arrays: mutating (push) affects aliases, reassigning creates a new array.
  - Objects: shallow copy vs alias; nested references remain shared.
  - Strings: immutable; `s1 += "!"` creates a new string (reassignment).
  - Functions: closures preserve state, references can alias the same closue.

- **Key lessons:**  
  - **Primitives:** assignment makes a copy, reassignment creates a new value. 
  - **Objects/arrays:** assignment makes an alias, mutations affect all references. 
  - **Scope:** `let` and `const` are block scoped, `var` leaks to function scope.
  - **Closures:** inner functions remember outer variales even after the outer function ends.
  - **Shallow vs Deep copy:** spread (...) clones only the outer structure, nested references are shared.

- Files:  
  - `core_basics/primitive.js`  
  - `core_basics/scope.js`  
  - `core_basics/mutation.js`
</details>

<details>
<summary><strong>Day 2 – Control Flow & Iteration</strong></summary>

- **Conditionals (if/else & ternary):**
  - `if / else if / else` → mutually exclusive branches.
  - Multiple `if` statements → independent checks.
  - Ternary (`condition ? A : B`) → compact inline alternative.

- **Loops (while, do…while, for):**
  - `while` checks condition before loop body (may run 0 times).
  - `do...while` runs body once, then checks condition (always runs at least once).
  - `for (init; condition; step)` → compact loop form, same power as `while`.

- **Iteration kinds (for…of / for…in):**
  - `for...of` → iterates values in an array.
  - `for...in` → iterates keys in an object.

- **Nested loops (2D arrays):**
  - Used to build multi-dimensional structures like multiplication tables.
  - Outer loop builds rows, inner loop fills columns.

- **Logical operators (&& / ||):**
  - `&&` requires both conditions true.
  - `||` allows fallback or alternative checks.
  - Common for access rules, fallbacks, default values.

**Key lessons:**
- No problems with `if / else`, ternary is just a shortcut for small cases.
- Loops differ in **when** the condition is checked, but all allow repetition.
- Iteration type depends on data structure (for...of is for array values vs for...in object keys).
- Nested loops are essential for multi-dimensional data.
- Logical operators combine conditions for more complex rules.

Files:  
- `core_basics/conditionals.js`  
- `core_basics/loops.js`  
- `core_basics/nested_tables.js`  
- `core_basics/logical.js`  
</details>

### Data Structures

<details>
  <summary><strong>Day 1 — Stack & Queue (functional)</strong></summary>

- **Stack (push, pop, peek):** Learned difference between return vs. log. Added snapshot return.  
- **Queue (enqueue, dequeue, front, size, isEmpty):** Learned guarding before mutation, snapshot return, null safety.
</details>

<details>
  <summary><strong>Day 2 — Stack & Queue (refactor + OOP)</strong></summary>

- Rebuilt Stack and Queue in the functional style. Much faster this time (30 minutes total vs. ~2 hours on Day 1).  
- Added an `inspect()` function to return snapshots of the array safely.  
- Translated both Stack and Queue into **OOP (class-based) versions** with clean encapsulation and null guards.  
- Files:  
  - `data_structures/stack.js`  
  - `data_structures/queue.js`  
  - `data_structures/stack_oop.js`  
  - `data_structures/queue_oop.js`
</details>

<details>
  <summary><strong>Day 3 — Minimal Hashmap (array-of-pairs)</strong></summary>

- Restarted with **Hashmaps (array-of-pairs)** after failing on first attempt.  
- Successfully implemented a minimal functional hashmap with features:  
  - `createMap()`, `set`, `get`, `remove`, `has`, `keys`, `values`  
- Key lesson: update via **assignment** vs. add via **push**, early exit on search vs. complete traversal to collect.  
- File: `data_structures/hashmap_pairs.js`
</details>

<details>
  <summary><strong>Day 4 — PairsMap (OOP)</strong></summary>

- Rebuilt the hashmap as an **OOP class**: `PairsMap`, internally storing `[key, value]` pairs.  
- API: `set`, `get`, `remove`, `has`, `keys`, `values`, `size`, `inspect`.  
- Reinforced lessons: assignment vs push, early exit, and `splice(i, 1)` for removal.  
- File: `data_structures/hashmap_pairs_oop.js`
</details>

<details>
  <summary><strong>Day 5 — Singly Linked List (functional)</strong></summary>

- Implemented a **Singly Linked List** with: `createList`, `append`, `prepend`, `find`, `remove`, `size`, `toArray`.  
- Understood:  
  - Model of `head → value | next → … → null`.  
  - Traversal like `head.next`, `head.next.next`.  
  - Pros/cons vs arrays.  
- Struggled with:  
  - Naming confusion (`list` vs `node`).  
  - Structure felt like guesswork, needed multiple corrections.  
- File: `data_structures/linked_list.js`
</details>

<details>
  <summary><strong>Day 6 — Singly Linked List (OOP) + cleanup</strong></summary>

- Refactored **linked_list.js** to remove redundant `size()` method (just use `list.size`).  
- Added OOP `LinkedList` class with:  
  - `append(value)` → add at end  
  - `prepend(value)` → add at start  
  - `find(value)` → return node or `null`  
  - `remove(value)` → unlink first match, return node or `null`  
  - `toArray()` → return values as plain array  
- Key lessons:  
  - **Properties vs methods:** use `size` as property (like `arr.length`, `map.size`).  
  - **Append vs prepend:** append needs empty-list branch, prepend always “new head points to old head.”  
  - **Remove:** must track `previous` + `current` pointers.  
- Files:  
  - `data_structures/linked_list.js` (refactored functional)  
  - `data_structures/linked_list_oop.js` (OOP version)
</details>

<details>
  <summary><strong>Day 7 — Set (Functional + OOP)</strong></summary>

- Warmed up with a counter factory to learn closures and returning an API object.  
- Built a **Set (functional)** with: `add`, `remove`, `has`, `size`, `values`.  
- Rebuilt as **OOP `SetX` class** with the same API.  
- Key lessons:  
  - Factory → must return methods explicitly.  
  - Class → instance already exposes methods.  
  - Shorthand `{ add, remove }` works when names match; use `key: value` for aliasing.  
  - Private state via closure (functional) vs `this` or `#field` (OOP).

- Files:  
  - `data_structures/set_counter.js`  
  - `data_structures/set.js`  
  - `data_structures/set_oop.js`
</details>