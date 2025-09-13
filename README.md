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

### Section 1 – Fundamentals

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
  - `Section1_Fundamentals/stack.js`  
  - `Section1_Fundamentals/queue.js`  
  - `Section1_Fundamentals/stack_oop.js`  
  - `Section1_Fundamentals/queue_oop.js`
</details>

<details>
  <summary><strong>Day 3 — Minimal Hashmap (array-of-pairs)</strong></summary>

- Restarted with **Hashmaps (array-of-pairs)** after failing on first attempt.  
- Successfully implemented a minimal functional hashmap with features:  
  - `createMap()`, `set`, `get`, `remove`, `has`, `keys`, `values`  
- Key lesson: update via **assignment** vs. add via **push**, early exit on search vs. complete traversal to collect.  
- File: `Section1_Fundamentals/hashmap_pairs.js`
</details>

<details>
  <summary><strong>Day 4 — PairsMap (OOP)</strong></summary>

- Rebuilt the hashmap as an **OOP class**: `PairsMap`, internally storing `[key, value]` pairs.  
- API: `set`, `get`, `remove`, `has`, `keys`, `values`, `size`, `inspect`.  
- Reinforced lessons: assignment vs push, early exit, and `splice(i, 1)` for removal.  
- File: `Section1_Fundamentals/hashmap_pairs_oop.js`
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
- File: `Section1_Fundamentals/linked_list.js`
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
- Lessons:  
  - **Properties vs methods:** use `size` as property (like `arr.length`, `map.size`).  
  - **Append vs prepend:** append needs empty-list branch, prepend always “new head points to old head.”  
  - **Remove:** must track `previous` + `current` pointers.  
- Files:  
  - `Section1_Fundamentals/linked_list.js` (refactored functional)  
  - `Section1_Fundamentals/linked_list_oop.js` (OOP version)
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
  - `Section1_Fundamentals/set_counter.js`  
  - `Section1_Fundamentals/set.js`  
  - `Section1_Fundamentals/set_oop.js`
</details>