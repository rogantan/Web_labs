// Модель (хранилище данных)
class TodoModel {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.filter = 'all';
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener());
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo(text) {
        if (text.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            date: new Date().toLocaleString()
        };

        this.todos.push(newTodo);
        this.notify();
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.notify();
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
        this.notify();
    }

    clearAll() {
        this.todos = [];
        this.notify();
    }

    setFilter(filter) {
        this.filter = filter;
        this.notify();
    }

    sortByName() {
        this.todos.sort((a, b) => a.text.localeCompare(b.text));
        this.notify();
    }

    getFilteredTodos() {
        switch (this.filter) {
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            default:
                return this.todos;
        }
    }
}

// Представление (отображение)
class TodoView {
    constructor() {
        this.list = document.getElementById('list');
        this.addBtn = document.querySelector('.box-add');
        this.deleteBtn = document.querySelector('.box-clear');
        this.input = document.getElementById('type');
        this.filterLinks = document.querySelectorAll('.filter-link');
        this.sortLink = document.querySelector('[data-sort="name"]');
    }

    bindAddTodo(handler) {
        this.addBtn.addEventListener('click', () => {
            handler(this.input.value);
            this.input.value = '';
        });

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handler(this.input.value);
                this.input.value = '';
            }
        });
    }

    bindDeleteAll(handler) {
        this.deleteBtn.addEventListener('click', handler);
    }

    bindToggleTodo(handler) {
        this.list.addEventListener('click', event => {
            if (event.target.classList.contains('choice')) {
                const id = parseInt(event.target.closest('li').dataset.id);
                handler(id);
            }
        });
    }

    bindRemoveTodo(handler) {
        this.list.addEventListener('click', event => {
            if (event.target.classList.contains('btn')) {
                const id = parseInt(event.target.closest('li').dataset.id);
                handler(id);
            }
        });
    }

    bindFilterChange(handler) {
        this.filterLinks.forEach(link => {
            if (!link.dataset.sort) {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    handler(link.dataset.filter);
                    this.setActiveFilter(link);
                });
            }
        });
    }

    bindSort(handler) {
        this.sortLink.addEventListener('click', event => {
            event.preventDefault();
            handler();
        });
    }

    setActiveFilter(activeLink) {
        this.filterLinks.forEach(link => {
            link.style.fontWeight = link === activeLink ? 'bold' : 'normal';
        });
    }

    displayTodos(todos) {
        this.list.innerHTML = '';

        if (todos.length === 0) {
            this.list.innerHTML = '<li class="empty">Список пуст</li>';
            return;
        }

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `element ${todo.completed ? 'completed' : ''}`;
            li.dataset.id = todo.id;

            li.innerHTML = `
                <input type="checkbox" class="choice" ${todo.completed ? 'checked' : ''}>
                <div class="content">
                    <p class="text">${todo.text}</p>
                    <span class="date">от ${todo.date}</span>
                </div>
                <button class="btn">✖</button>
            `;

            this.list.appendChild(li);
        });
    }
}

// Контроллер (логика приложения)
class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Подписываемся на изменения модели
        this.model.subscribe(this.onModelChange.bind(this));

        // Привязываем обработчики событий
        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindDeleteAll(this.handleDeleteAll.bind(this));
        this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
        this.view.bindRemoveTodo(this.handleRemoveTodo.bind(this));
        this.view.bindFilterChange(this.handleFilterChange.bind(this));
        this.view.bindSort(this.handleSort.bind(this));

        // Инициализируем представление
        this.onModelChange();
    }

    onModelChange() {
        const filteredTodos = this.model.getFilteredTodos();
        this.view.displayTodos(filteredTodos);
    }

    handleAddTodo(text) {
        this.model.addTodo(text);
    }

    handleDeleteAll() {
        if (confirm('Вы уверены, что хотите удалить все задачи?')) {
            this.model.clearAll();
        }
    }

    handleToggleTodo(id) {
        this.model.toggleTodo(id);
    }

    handleRemoveTodo(id) {
        this.model.removeTodo(id);
    }

    handleFilterChange(filter) {
        this.model.setFilter(filter);
    }

    handleSort() {
        this.model.sortByName();
    }
}

// Инициализация приложения
const model = new TodoModel();
const view = new TodoView();
const controller = new TodoController(model, view);