function tong(a: number, b: number): number {
    return a + b;
}   
const ketqua = tong(5, 10);
console.log(`Tổng của 5 và 10 là: ${ketqua}`);  

function xinchao(ten: string, tuoi: number): string {
    console.log(`Xin chào, tôi là ${ten} và tôi ${tuoi} tuổi.`);

}
xinchao("Nguyễn Thị Ngọc Hương", 18);

const double = (n: number) => n * 2;
console.log(`Double of 5 is: ${double(5)}`);

const hieu = (a: number, b: number) => a - b;
console.log(`Hiệu của 10 và 5 là: ${hieu(10, 5)}`);

function taoemail(ten: string): string {
    return `${ten.toLowerCase()}@test.com`;
}
const email = taoemail("NguyenThiNgocHuong");
console.log(`Email được tạo ra: ${email}`);

const email2 = (ten: string): string => ten.toLowerCase() + '@test.com';
console.log(`Email được tạo ra: ${email2("NguyenThiNgocXuyen")}`);
