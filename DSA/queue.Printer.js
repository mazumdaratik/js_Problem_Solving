import Queue from "./queue.js";

const printerQueue = new Queue();

printerQueue.enqueue("Doc 1");
printerQueue.enqueue("Doc 2");
printerQueue.enqueue("Doc 3");
printerQueue.enqueue("Doc 4");

while(!printerQueue.isEmpty()){
    console.log("printing", printerQueue.dequeue());
}