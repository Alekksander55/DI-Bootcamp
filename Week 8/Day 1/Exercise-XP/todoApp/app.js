import {todoList} from "./todo.js";

const newList = new todoList('Dishes')
newList.addTasks('Laundry')
newList.addTasks('Cleaning')
newList.addTasks('Cook dinner')
newList.markAsComplete('Laundry')
newList.listTasks()


