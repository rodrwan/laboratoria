class Node():
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = None
        self.length = 0

    def insert(self, value):
        if self.head == None:
            self.head = Node(value)
            self.length += 1
            return

        aux = self.head
        while (aux.next != None):
            aux = aux.next

        aux.next = Node(value)
        self.length += 1
        return

    def display(self):
        aux = self.head
        while (aux):
            print aux.value
            aux = aux.next

# main program
ll = LinkedList()

ll.insert(1)
ll.insert(3)
ll.insert(4)
ll.insert(2)

ll.display()
