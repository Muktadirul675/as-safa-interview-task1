export {};

declare global {
  interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    joinDate: string;
  }

  interface Product{
    id: number;
    name: string;
    price: number;
    sales: number;
    category: string;
  }

  interface Analytics{
    date: string;
    views: number;
    clicks: number;
    conversions: number;
  }

  interface Overview{
    totalUsers: number;
    activeUsers: number;
    revenue: number;
    growth: number;
  }
}