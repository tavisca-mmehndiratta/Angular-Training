import { Department, Employee, Customer, Order } from './app.models';
export const Products = [
  {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT'},
  {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL'},
  {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD'}
];

export const Categories =[
  'ECT', 'ECL', 'FOD'
];

export const Departments: Array<Department> = new Array<Department>();
Departments.push(new Department(10, 'D1'));
Departments.push(new Department(20, 'D2'));
Departments.push(new Department(30, 'D3'));

export const Employees: Array<Employee> = new Array<Employee>();
Employees.push(new Employee(101, 'A', 10));
Employees.push(new Employee(102, 'B', 20));
Employees.push(new Employee(103, 'C', 30));
Employees.push(new Employee(104, 'D', 10));
Employees.push(new Employee(105, 'E', 20));
Employees.push(new Employee(106, 'F', 30));

export const Customers: Array<Customer>  = new Array<Customer>();
Customers.push(new Customer(1,"A","Mumbai","a@b.com",322134));
Customers.push(new Customer(2,"B","Pune","c@d.com",766556));
Customers.push(new Customer(3,"C","Delhi","e@f.com",87776));
Customers.push(new Customer(4,"D","Bangalore","g@h.com",45676));
Customers.push(new Customer(5,"E","Ahmedabad","i@j.com",987876));

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(101, "Pencil", new Date(), 1, 3,10));
Orders.push(new Order(102, "Eraser", new Date(), 2, 3,32));
Orders.push(new Order(103, "Notebook", new Date(), 3, 3,45));
Orders.push(new Order(104, "Sticky Notes", new Date(), 1, 3,76));
Orders.push(new Order(105, "Book", new Date(), 4, 3,764));
Orders.push(new Order(106, "Tape", new Date(), 5, 3,34));
Orders.push(new Order(107, "Pin", new Date(), 1, 3,56));
Orders.push(new Order(108, "Laptop", new Date(), 2, 3,3245656));
Orders.push(new Order(109, "charger", new Date(), 3, 3,56));
Orders.push(new Order(110, "phone", new Date(), 4, 3,345623));

