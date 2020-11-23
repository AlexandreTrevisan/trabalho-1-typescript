import Book from "./entities/book";
import Periodical from "./entities/periodical";
import Person, { Gender } from "./entities/person";

let person1 = new Person('Machado de Assis', new Date('1839-07-21T00:00:00'), Gender.Male)
let person2 = new Person('Carlos Drummond de Andrade', new Date('1902-11-31T00:00:00'), Gender.Male)
let person3 = new Person('Clarice Lispector', new Date('1920-12-10T00:00:00'), Gender.Female)

let book1 = new Book('Memórias Póstumas de Brás Cubas', 'Dom Casmurro', new Date('1900-12-31T00:00:00'), person1)
let book2 = new Book('A Rosa do Povo', 'Alguma Poesia', new Date('1945-04-23T00:00:00'), person2)
let book3 = new Book('A Hora da Estrela', 'A Paixão Segundo G.H.', new Date('1977-07-31T00:00:00'), person2)

let periodical1 = new Periodical(8000, 10, 25, 'Vitrine', 'ISTO É',  new Date('2020-11-20T00:00:00'), person1)
let periodical2 = new Periodical(7800, 10, 25, 'Vitrine', 'ISTO É',  new Date('2020-11-20T00:00:00'), person2)
let periodical3 = new Periodical(5000, 10, 25, 'Vitrine', 'ISTO É',  new Date('2020-11-20T00:00:00'), person3)

console.log(person1)
console.log(book1)
console.log(periodical1)

console.log(person2)
console.log(book2)
console.log(periodical2)

console.log(person3)
console.log(book3)
console.log(periodical3)