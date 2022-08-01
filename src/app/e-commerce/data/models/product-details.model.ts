export interface ProductDetails {
    success: boolean;
    data: {
        id: number;
        cat_id: number;
        product_name: string;
        banner: string;
        quantity: number;
        price: number;
        Web_ID: string;
        Availability: string;
        Condition: string;
        Brand: string;
        details: string;
    },
    message: string;
}

