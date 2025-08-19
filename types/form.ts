import { Product } from "./product";

export interface ProductFormProps {
    editingProduct?: Product | null;
    onFinish: () => void;
}
