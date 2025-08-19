import { Product } from "./product";

export interface ProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
}

export interface ProductRowProps {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: string) => void;
}

