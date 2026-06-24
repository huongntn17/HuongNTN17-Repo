const pi = 3.14159;
let radius: number = 5;
let area: number = pi * radius * radius;
console.log(`The area of the circle with radius ${radius} is ${area}.`);

radius = 10;
area = pi * radius * radius;
console.log(`The area of the circle with radius ${radius} is ${area}.`);   
const tendangnhap:string = "huongntn17@fpt.com";
const tendangnhapVietHoa:string = tendangnhap.toUpperCase();
const namsinh:number = 1989;
let tuoi:number = new Date().getFullYear() - namsinh;
console.log(`Tên đăng nhập viết thường: ${tendangnhap}`);
console.log(`Tên đăng nhập viết hoa: ${tendangnhapVietHoa}`);
console.log(`Năm sinh: ${namsinh}`);
console.log(`Tuổi: ${tuoi}`);