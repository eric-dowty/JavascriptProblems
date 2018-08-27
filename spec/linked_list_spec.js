var LinkedList = require("../linked_list.js").LinkedList;
var Node = require("../linked_list.js").Node;

describe("LinkedList", function() {
  it("Should return null if head does not have next", function() {
    var linkedList = new LinkedList(new Node());

    expect(linkedList.head.next).toEqual(null);
  });

  it("Should return next if head does have next", function() {
    var next = new Node();
    var linkedList = new LinkedList(new Node(next));

    expect(linkedList.head.next).toEqual(next);
  });

  it("Should return head of the list", function() {
    var head = new Node()
    var linkedList = new LinkedList(head);

    expect(linkedList.head).toEqual(head);
  });

  it("Should return tail of the list", function() {
    var tail = new Node(null, 55);
    var linkedList = new LinkedList(new Node(new Node(new Node(new Node(tail)))));

    expect(linkedList.tail().value).toEqual(55);
  });

  it("Should return the length of the list", function() {
    var linkedList = new LinkedList(new Node(new Node(new Node(new Node()))));

    expect(linkedList.length()).toEqual(4);
  });

  it("Should return the length of the list if it is empty", function() {
    var linkedList = new LinkedList();

    expect(linkedList.length()).toEqual(0);
  });

  it("Should return all the values of the nodse", function() {
    var linkedList = new LinkedList(new Node(new Node(new Node(new Node(null, 4), 3), 2), 1));

    expect(linkedList.values()).toEqual([1,2,3,4]);
  });

  it("Should return the node at a give index", function() {
    var indexNode = new Node(new Node(), 300);
    var linkedList = new LinkedList(new Node(new Node(new Node(indexNode), 2), 1), 0);

    expect(linkedList.nodeAt(3).value).toEqual(300);
  });

  it("Should return null if node does not exist at index", function() {
    var linkedList = new LinkedList(new Node(new Node));

    expect(linkedList.nodeAt(2)).toEqual(null);
  });

  it("Should return null for head if emoty list", function() {
    var linkedList = new LinkedList();

    expect(linkedList.head).toEqual(null);
  });

  it("Should return true if list is empty", function() {
    var linkedList = new LinkedList();

    expect(linkedList.isEmpty()).toEqual(true);
  });

  it("Should return false if list is not empty", function() {
    var linkedList = new LinkedList(new Node());

    expect(linkedList.isEmpty()).toEqual(false);
  });

  it("Should insert a node at an index", function() {
    var insertNode = new Node(null, 'inserted node');
    var linkedList = new LinkedList(new Node(new Node(new Node(null, 3), 2), 1));

    linkedList.insertAt(1,insertNode);

    expect(linkedList.values()).toEqual([1,'inserted node',2,3]);
  });

  it("Should insert a node at a the head", function() {
    var insertNode = new Node(null, 'inserted node');
    var linkedList = new LinkedList(new Node(new Node(new Node(null, 3), 2), 1));

    linkedList.insertAt(0,insertNode);

    expect(linkedList.values()).toEqual(['inserted node',1,2,3]);
  });

  it("Should delete a node at an index", function() {
    var linkedList = new LinkedList(new Node(new Node(new Node(null, 3), 2), 1));

    linkedList.deleteAt(1);

    expect(linkedList.values()).toEqual([1,3]);
  });

  it("Should delete the head", function() {
    var linkedList = new LinkedList(new Node(new Node(new Node(null, 3), 2), 1));

    linkedList.deleteAt(0);

    expect(linkedList.values()).toEqual([2,3]);
  });
});




