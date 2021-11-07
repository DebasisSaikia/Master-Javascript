// Javascript program for the above approach
class Node
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}
 
/* Function to insert a node at
   the beginning of the linked
 * list */
function push(head_ref, new_data)
{
     
    /* allocate node */
    let new_node = new Node();
    
    /* put in the data */
    new_node.data = new_data;
      
    /* link the old list off
    the new node */
    new_node.next = (head_ref);
      
    /* move the head to point
    to the new node */
    head_ref = new_node;
    return head_ref;
}
 
/* Function to print nodes
in a given linked list */
function printList(node)
{
    while (node != null)
    {
        document.write(node.data + " ");
        node = node.next;
    }
}
 
// Function to remove duplicates
function removeDuplicates(head)
{
    let track = new Map();
    let temp = head;
      
    while(temp != null)
    {
        if (!track.has(temp.data))
        {
            document.write(temp.data + " ");
        }
        track.set(temp.data, true);
        temp = temp.next;
    }
}
 
// Driver Code
let head = null;
        
/* Created linked list will be
11->11->11->13->13->20 */
head = push(head, 20);
head = push(head, 13);
head = push(head, 13);
head = push(head, 11);
head = push(head, 11);
head = push(head, 11);
head = push(head, 13);
head = push(head, 13);
document.write("Linked list before duplicate removal ");
printList(head);
document.write("<br>Linked list after duplicate removal  ");
removeDuplicates(head);
 