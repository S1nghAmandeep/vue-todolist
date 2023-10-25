

const { createApp } = Vue;

createApp({
    data(){
        return {
            newTask: '',
            error: false,
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTask() {
            this.error = false;
            if (this.newTask.trim().length >= 5) {
                this.todos.push({
                    text: this.newTask,
                    done: false,
                })   
            } else {
                this.error = true;
            }
            this.newTask = '';
        },

        taskDone(taskIndex){
            this.todos[taskIndex].done = !this.todos[taskIndex].done;
        }
    },

    mounted(){
        console.log('ok')
    }

}).mount('#app')