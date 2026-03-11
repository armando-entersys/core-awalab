export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  brandSlug: string;
  model: string;
  sku: string;
  description: string;
  shortDescription: string;
  line: 'laboratorio' | 'seguridad-industrial' | 'tratamiento-de-agua';
  category: string;
  categorySlug: string;
  subcategory?: string;
  images: ProductImage[];
  specifications: Specification[];
  datasheet?: string;
  relatedProducts: string[];
  faq: FAQ[];
  keywords: string[];
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  isPrimary: boolean;
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  line: string;
  description: string;
  icon: string;
  productCount: number;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  productCount: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
