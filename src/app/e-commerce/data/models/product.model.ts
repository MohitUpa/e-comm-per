export interface Product {
    success: boolean;
    data: {
        id:number,
        catId?:number,
        product_name:string,
        price:number,
        banner:string,
        quantity?:number,
        webId?:string,
        availability?:string,
        condition?:string,
        brand?:string,
        details?:string,
    }
    message:string;
}