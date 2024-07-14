export interface Blog {
  title: string;
  content: string;
  body: string;
  eyecatch?: string;
  category?: {
    name: string;
  };
}

export interface Category {
  name: string;
}
