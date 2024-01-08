class todoList {
    toDo = [];
    done = [];
    constructor (task){
        this.toDo.push(task)
    }
    addTasks(task){
        this.toDo.push(task)
    }
    markAsComplete(task){
        this.done.push(task)
        this.toDo.splice(this.toDo.indexOf(task), 1)   
    }
    listTasks(){
        console.log(this.toDo)
    }
}

export {todoList}
