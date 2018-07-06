export interface Book {
    id: number;
    title: string;
    author: string[];
    published: number;
    rating: number;
    stores: {name: string, url: string}[];
    description: string;
    thumbnail: string;
}
