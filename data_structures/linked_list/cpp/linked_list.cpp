#include <iostream>
using namespace std;

class LinkedList {
  struct Node {
    int x;
    Node *next;
  };

  // public member
  public:
    // constructor
    LinkedList() {
      head = NULL; // set head to NULL
    }

    void insert(int val) {
      Node *n = new Node();
      n->x = val;
      n->next = head;
      head = n;
    }

    void display() {
      Node *aux = head;

      while(aux) {
        cout << aux->x << endl;
        aux = aux->next;
      }
    }

  private:
    Node *head;
};

int main() {
  LinkedList list;

  list.insert(5);
  list.insert(10);
  list.insert(20);

  list.display();
  return 0;
}
