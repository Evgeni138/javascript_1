// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// Отслеживать, какой повар готовит какое блюдо.
// Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


const chefsAndTheirSpecailties = new Map();
chefsAndTheirSpecailties.set('Vicktor', 'Pizza')
    .set('Olga', 'Sushi')
    .set('Dmitriy', 'Desserts');

const dishesAndTheirChefs = new Map();
dishesAndTheirChefs.set('Pizza "Margarita"', 'Vicktor')
    .set('Pizza "Pepperoni"', 'Vicktor')
    .set('Sushi "Philadelphia"', 'Olga')
    .set('Sushi "California"', 'Olga')
    .set('Tiramisu', 'Dmitriy')
    .set('Chisecake', 'Dmitriy');

const orders = new Map();
orders.set('Alex', ['Pizza "Pepperoni"', 'Tiramisu'])
    .set('Maria', ['Sushi "California"', 'Pizza "Margarita"'])
    .set('Irina', ['Chisecake']);

orders.forEach((dishesList, client) => {
    const chefsList = dishesList.map(dish => dishesAndTheirChefs.get(dish)).join(', ');
    console.log(`Клиент ${client} заказал: ${[...dishesList].join(', ')}`);
    console.log(`Заказ ${client} готовит: ${chefsList}`);
    console.log('');
});
