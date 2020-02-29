/**
 * In-Memory Store
 */
import {ItemInterface} from "./item.interface";

/**
 * In-Memory Store
 */

export const items: Array<ItemInterface> = [
    {
        id: 1,
        name: "Burger",
        price: 5.99,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    {
        id: 2,
        name: "Pizza",
        price: 2.99,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    {
        id: 3,
        name: "Tea",
        price: 1.99,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
];

export const findAll = async (): Promise<any> => {
    return items;
};
export const addItem = async (item: ItemInterface): Promise<any> => {
    item.id = new Date().valueOf();
    items.push(item);

    return item;
};
export const updateItem = async (item: ItemInterface): Promise<any> => {
    const index = items.findIndex(i => i.id === item.id);

    items[index] = item;

    return items;

};

