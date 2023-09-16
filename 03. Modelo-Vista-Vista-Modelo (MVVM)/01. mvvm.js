// Modelo
class Task {
    constructor(description, completed) {
        this.description = description;
        this.completed = completed;
    }
}

// Vista
class TaskView {
    constructor() {
        this.taskList = [];
    }

    renderTasks(tasks) {
        this.taskList = tasks;
        this.taskList.forEach(task => {
            console.log(`Tarea: ${task.description}, Completada: ${task.completed}`);
        });
    }
}

// ViewModel
class TaskViewModel {
    constructor() {
        this.tasks = [];
        this.view = new TaskView();
    }

    addTask(description) {
        const newTask = new Task(description, false);
        this.tasks.push(newTask);
        this.view.renderTasks(this.tasks);
    }

    completeTask(index) {
        this.tasks[index].completed = true;
        this.view.renderTasks(this.tasks);
    }
}

// Uso
const viewModel = new TaskViewModel();
viewModel.addTask('Hacer la compra');
viewModel.addTask('Limpiar la casa');
viewModel.completeTask(0);

/***

En este ejemplo, el Modelo (Task) representa una tarea con una descripción y un estado de completado. 
La Vista (TaskView) se encarga de mostrar las tareas en la consola.

El ViewModel (TaskViewModel) actúa como intermediario entre el Modelo y la Vista, y contiene la lógica de la aplicación.

Cuando se llama al método addTask en el ViewModel, se crea una nueva tarea y se agrega al array tasks. 
Luego, se llama al método renderTasks en la Vista para mostrar las tareas en la consola.

Cuando se llama al método completeTask en el ViewModel, se marca la tarea correspondiente como completada en el array tasks. 
Nuevamente, se llama al método renderTasks en la Vista para mostrar las tareas actualizadas en la consola.

*/