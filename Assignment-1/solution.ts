type Input = string | number | boolean;
function formatValue(input: Input): any {
    if (typeof input === "number") {
        return 10 * input;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "boolean") {
        return !input;
    }


}


function getLength(input: string | Array<any>): number {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    else {
        return 0;
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`'Name: ${this.name}, Age: ${this.age}'`);
    }
}


type Item = {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]): Item[] {
    return items.filter((item) => item.rating >= 4);
}


type NewItem = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(items: NewItem[]): NewItem[] {
    return items.filter((item) => item.isActive === true);

}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}
function printBookDetails(book: Book): void {
    const BookAvailability = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${BookAvailability}`)
}


function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr1[i]) {
                exists = true;
                break;
            }

        }
        if (!exists) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr2[i]) {
                exists = true;
                break;
            }

        }
        if (!exists) {
            result.push(arr2[i]);
        }
    }
    return result;
}


type Product = {
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
function calculateTotalPrice(products: Product[]):number{
   return  products.map(product =>{
       const total =product.price*product.quantity;
       const discount = product.discount??0;
       const finalPrice = total -(total*discount)/100;
       return finalPrice;
    })
    .reduce((acc,curr)=>acc+curr,0);
}


