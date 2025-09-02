# Dev Skill Assessment

Dev Fundamentals

This repo documents my journey of learning computer science fundamentals and problem-solving in JavaScript.

I’m starting from the ground up and refreshing topics as im going. 
The goal is to build a solid foundation step by step, practicing classic data structures and algorithms until I can code them confidently without external help.

## Learning Approach

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

## Progress Log

### Section 1 - Fundamentals

**Day 1**
- **Stack (push, pop, peek):** Learned difference between return vs. log. Added snapshot return.
- **Queue (enqueue, dequeue, front, size, isEmpty):** Learned guarding before mutation, snapshot return, null safety.

**Day 2**
- Rebuilt Stack and Queue in the functional style. Much faster this time (30 minutes total vs. ~2 hours on Day 1).
- Added an `inspect()` function to return snapshots of the array safely.
- Translated both Stack and Queue into **OOP (class-based) versions** with clean encapsulation and null guards.

**Day 3**
- Restarted with **Hashmaps (array-of-pairs)** after failing on first attempt.  
- Successfully implemented a minimal functional hashmap with the following features:
  - `createMap()` → initialize an empty map.  
  - `set(map, key, value)` → add a new key-value pair or update existing one.  
  - `get(map, key)` → return the value for a key, or `null` if missing.  
  - `remove(map, key)` → delete a pair by key and return its value (or `null` if not found).  
  - `has(map, key)` → check if a key exists, returning true/false.  
  - `keys(map)` → return all keys as an array.  
  - `values(map)` → return all values as an array.  
- Learned the critical difference between: 
  - **return for values** vs. **return for exit flow**  
  - when to **exit early** (search) vs. when to **finish the loop** (collect all).  
- This was a breakthrough: once I understood how updating a value is just **reassignment**, I could reuse the loop/search pattern for `get`, `remove`, `has`, `keys`, and `values` much faster.  
- End result: a clean, working hashmap implementation in `hashmap_pairs.js`.