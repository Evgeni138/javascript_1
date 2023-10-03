// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
    {
        title: "Load",
        artist: "Metallica",
        year: "1996"
    },
    {
        title: "Crazy World",
        artist: "Scorpions",
        year: "1990"
    },
    {
        title: "Smells Like Teen Spirit",
        artist: "Nirvana",
        year: "1991"
    }
]

musicCollection[Symbol.iterator] = function () {
    let from = 0;
    return {
        current: from,
        last: musicCollection.length,
        next() {
            return this.current < this.last ? { done: false, value: musicCollection[this.current++] } : { done: true };
        }
    }
}

for (const musicAlbum of musicCollection) {
    console.log(`${musicAlbum.title} - ${musicAlbum.artist} (${musicAlbum.year})`);
}

console.log('');
console.log('--------------------------------');
console.log('');