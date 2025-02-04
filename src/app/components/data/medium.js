export const Questions = {
  questions: [
    // Bit Manipulation
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The bitwise operator used to toggle a specific bit in an integer is __.",
      blanks: ["XOR"],
      note: "Bit Manipulation"
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following operations can determine if a number is odd?",
      options: ["n & 1", "n % 2 == 0", "n ^ 1", "n >> 1"],
      correctAnswers: ["n & 1"],
      multipleAnswers: false,
      note: "Bit Manipulation"
    },

    // Graph Algorithms
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The algorithm used to find the shortest path in an unweighted graph is __.",
      blanks: ["BFS"],
      note: "Graph Algorithms"
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which algorithm is used to detect cycles in an undirected graph?",
      options: ["Dijkstra's", "Kruskal's", "Union-Find", "Bellman-Ford"],
      correctAnswers: ["Union-Find"],
      multipleAnswers: false,
      note: "Graph Algorithms"
    },

    // Sorting Algorithms
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The best sorting algorithm for large datasets with random order is __.",
      blanks: ["Merge Sort"],
      note: "Sorting Algorithms"
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which sorting algorithm is unstable?",
      options: ["Merge Sort", "QuickSort", "Bubble Sort", "Insertion Sort"],
      correctAnswers: ["QuickSort"],
      multipleAnswers: false,
      note: "Sorting Algorithms"
    },

    // String Algorithms
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "The __ algorithm is used for efficient pattern matching in large texts.",
      blanks: ["Rabin-Karp"],
      note: "String Algorithms"
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which data structure is best for storing a dynamic list of unique words?",
      options: ["Hash Table", "Trie", "AVL Tree", "Stack"],
      correctAnswers: ["Trie"],
      multipleAnswers: false,
      note: "String Processing"
    },

    // Memory Optimization
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The technique used to dynamically allocate memory at runtime is __.",
      blanks: ["heap allocation"],
      note: "Memory Management"
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which of the following data structures is used in a memory-efficient LRU Cache?",
      options: ["Queue", "Doubly Linked List & Hash Map", "Stack", "Binary Heap"],
      correctAnswers: ["Doubly Linked List & Hash Map"],
      multipleAnswers: false,
      note: "Caching & Memory"
    },

    // Concurrency & Multithreading
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "A __ occurs when multiple threads attempt to access shared data without synchronization.",
      blanks: ["race condition"],
      note: "Concurrency"
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which keyword is used in Java to prevent concurrent modification issues?",
      options: ["volatile", "synchronized", "transient", "final"],
      correctAnswers: ["synchronized"],
      multipleAnswers: false,
      note: "Concurrency"
    },

    // System Design & Scalability
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "A __ system consists of multiple servers that work together to handle requests efficiently.",
      blanks: ["distributed"],
      note: "System Design"
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which technique is commonly used to distribute network traffic across multiple servers?",
      options: ["Caching", "Load Balancing", "Sharding", "Replication"],
      correctAnswers: ["Load Balancing"],
      multipleAnswers: false,
      note: "System Design"
    },

    // AI & Machine Learning
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "The algorithm used to train deep neural networks efficiently is __.",
      blanks: ["gradient descent"],
      note: "Machine Learning"
    }
  ]
};
