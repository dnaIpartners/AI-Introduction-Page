
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  subItems: string[];
}

export interface Partner {
  name: string;
  logoUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string; // 상세 내용 (HTML or Text)
  imageUrl: string;
  author?: string; // New
  readTime?: string; // New
}

export interface LibraryItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
}

export interface Solution {
  id: string;
  name: string;
  desc: string;
  sub: string;
  content: string; // HTML content for detail view
  imageUrl: string;
}
