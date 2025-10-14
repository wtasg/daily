

class Tree {
    int data;
    Tree left;
    Tree right;

    Tree(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class InvertABinaryTree {

    public static Tree invertTree(Tree root) {
        if (root == null) return root;

        Tree left = invertTree(root.left);
        Tree right = invertTree(root.right);

        root.left = right;
        root.right = left;

        return root;
    }
    //root-left-right
    public static void print(Tree root) {
        if (root == null) return;
        System.out.print(root.data + " ");
        print(root.left);
        print(root.right);
    }

    public static void main(String[] args) {

        Tree root = new Tree(1);
        root.left = new Tree(2);
        root.right = new Tree(3);
        root.left.left = new Tree(4);
        root.left.right = new Tree(5);
        root.right.right = new Tree(6);

        print(root);
        System.out.println();

        root = invertTree(root);

        System.out.println("inverted tree");
        print(root);

        System.out.println();
    }
}


//https://leetcode.com/problems/invert-binary-tree/description/
//binary tree you have to invert
//1
//2 3
//4 5 6

//inverted
//1
//3 2
//6 5 4

//logic
//base case = root is null return root
//recursively call left and right child

//swap left to right and right to left


//dry run
//   1
// 2  3
//4 5   6


//call invert = 1
//root = 1
//left = 2
//right = 3

//call invert = 2
//root = 2
//left = 4
//right = 6

//call invert = 4
//root = 4
//left = null
//right = null
//return 4

//call invert = 5
//root = 5
//left = null
//right = null
//return 5

//swap two childern
//before swap = 4, 5
//after = 5, 4

//call right 3
//call invert 3
//root 3
//left = null
//right = 6

//invert tree = 6
//left = null
//right = null
//return 6

//swap 3 chidren
//before null, 6
//after 6, null
//return 3


//back to root 1
//swap 1 children
//before 2, 3
//after 3, 2

//final
//1
//3 2
//6 5 4

//preorder traveral - root, left, right 1 3 6 2 5 4









