
// -----------------------------------------

// we start with the TrieNode
function TrieNode(key) {
    // the "key" value will be the character in sequence
    this.key = key;
    
    // we keep a reference to parent
    this.parent = null;
    
    // we have hash of children
    this.children = {};
    
    // check to see if the node is at the end
    this.end = false;
  }
  
  // iterates through the parents to get the word.
  // time complexity: O(k), k = word length
  TrieNode.prototype.getWord = function() {
    var output = [];
    var node = this;
    
    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    
    return output.join('');
  };
  
  // -----------------------------------------
  
  // we implement Trie with just a simple root with null value.
  function Trie() {
    this.root = new TrieNode(null);
  }
  
  // inserts a word into the trie.
  // time complexity: O(k), k = word length
  Trie.prototype.insert = function(word) {
    var node = this.root; // we start at the root 😬
    
    // for every character in the word
    for(var i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (!node.children[word[i]]) {
        // if it doesn't exist, we then create it.
        node.children[word[i]] = new TrieNode(word[i]);
        
        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
      }
      
      // proceed to the next depth in the trie.
      node = node.children[word[i]];
      
      // finally, we check to see if it's the last word.
      if (i == word.length-1) {
        // if it is, we set the end flag to true.
        node.end = true;
      }
    }
  };
  
  // check if it contains a whole word.
  // time complexity: O(k), k = word length
 
  
  // returns every word with given prefix
  // time complexity: O(p + n), p = prefix length, n = number of child paths
  Trie.prototype.find = function(prefix) {
    var node = this.root;
    var output = [];
    
    // for every character in the prefix
    for(var i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // there's none. just return it.
        return "nothing";
      }
    }
    
    // recursively find all words in the node
    findAllWords(node, output);
    
    for(var a of output){

    var node = document.createElement("option"); 
   // node.className="list-group-item list-group-item-action active";

    //console.log(node);
    var val = document.createTextNode(a); 
    node.appendChild(val); 

    document.getElementById("datalist").appendChild(node);
    //console.log(a);
    }
    return ;
  };
  
  // recursive function to find all words in the given node.
  function findAllWords(node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord());
    }
    
    // iterate through each children, call recursive findAllWords
    for (var child in node.children) {
      findAllWords(node.children[child], arr);
    }
  }
  
  // -----------------------------------------
  
  // instantiate our trie
  var me =["The-Silence","Chicchore","Bloodshot","Fantasy Island","Dangal","Bad Boys For Life","Drive","Force-2","Rustom","Queen",
"Kabir-singh","Tamasha","The Zoya Factory","Parmanu","Love Per Square Feet","Luka chuppi","Annabelle Creation",
"Arrival","Bird-Box","IT","6 Underground","John Wick","Lion","London Has Fallen Down","Now You See Me","The Social Network",
"Andhadhun","Article-15","Baazaar","Bahubali",
"13-Reason-why","6-Days","Bodyguard","Altered-Carbon",
"Black-Mirror","The-Witcher","Breaking-Bad","Dark",
"Fauda","Lone-Survivor","Narcos","The-Occupant","You","Bard-Of-Blood",
"GirlsHostel","Guilty","Jamatra","Leila","Little-Things","Money-Heist","Blacklist","Dragon-RescueRiders",
"Flash","Gotham","Minecraft","Our-Plant","Sabrina","Spongbob","The-End-Of-Fucking-World"];
  var trie = new Trie();
  
  // insert few values
  //trie.insert(me);
  //trie.insert("helium");
  
for(var a=0; a<me.length;a++)
{
    trie.insert(me[a]);
    console.log(me[a])
    
}





  // check contains method
  //console.log(trie.contains("meh"));  // true
  //console.log(trie.contains("kickass")); // false
  
  // check find method
  //console.log(trie.find("a"));  // [ 'helium', 'hello' ]
 // console.log(trie.find("hell")); // [ 'hello' ]










  
  
  // it will return words,whohaa,wicked.
function getwords(){
    myOutput=document.getElementById('output');
    textbox = document.getElementById('nameValidation');
    if (textbox.value != ""){
   // myOutput.innerHTML=textbox.value;
    console.log(trie.find(textbox.value));  // [ 'helium', 'hello' ]
  console.log(textbox.value)
    }
    else
    alert('Enter movie or web-series name')
    





}







/*function useValue() {
    var NameValue = nameValidationInput.value;
    // use it
    console.log(NameValue); // just to show the new value
}
nameValidationInput.onchange = useValue;  
nameValidationInput.onblur = useValue;*/