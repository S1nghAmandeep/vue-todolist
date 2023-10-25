

const { createApp } = Vue;

createApp({
    data(){
        return {
            newTask: '',
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
            if (this.newTask.trim() !== '') {
                this.todos.push({
                    text: this.newTask,
                    done: false,
                })   
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