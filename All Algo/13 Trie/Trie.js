class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
// Step Two
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Method to insert a word into the Trie
    insert(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    // Method to search for a word in the Trie
    search(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }

    // Method to check if there is any word in the Trie that starts with the given prefix
    startsWith(prefix) {
        let currentNode = this.root;
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }
}
// Step Three:- Usage
let trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true

trie.insert("app");
console.log(trie.search("app"));     // true


