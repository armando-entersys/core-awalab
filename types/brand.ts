export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  longDescription?: string;
  website?: string;
  lines: ('laboratorio' | 'seguridad-industrial' | 'tratamiento-de-agua')[];
  isFeatured: boolean;
  productCount: number;
}
