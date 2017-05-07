package main

import "fmt"

type Node struct {
	Value string
	Next  *Node
}

type LinkedList struct {
	Head   *Node
	Length int
}

func (ll *LinkedList) Insert(n *Node) bool {
	if ll.Head == nil {
		ll.Head = n
		ll.Length++
		return true
	}

	aux := ll.Head
	for aux.Next != nil {
		aux = aux.Next
	}

	aux.Next = n
	ll.Length++
	return true
}

func (ll *LinkedList) Display() {
	aux := ll.Head

	for aux != nil {
		fmt.Println(aux.Value)
		aux = aux.Next
	}
}

func main() {
	l := &LinkedList{}

	words := []string{
		"hola",
		"mundo",
		"laboratoria",
	}

	for _, value := range words {
		n1 := &Node{Value: value}
		l.Insert(n1)
	}

	l.Display()
}
