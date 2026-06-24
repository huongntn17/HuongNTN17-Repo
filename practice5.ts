// thực hiệnimport  vài đối tượng từ practice4.ts
// import { Taikhoan, dsTaikhoanArray } from './practice4';

// console.log(`Email: ${Taikhoan.email}, Mật khẩu: ${Taikhoan.matkhau}, Năm sinh: ${Taikhoan.namsinh}`);  

// console.log(`Số lượng tài khoản trong dsEmail: ${dsEmail.length}`); --lỗi: do dsEmail chưa được import vào practice5.ts


//thực hiện import tất cả các đối tượng từ practice4.ts
// import * as Practice4 from './practice4';   
// console.log(`Email: ${Practice4.Taikhoan.email}, Mật khẩu: ${Practice4.Taikhoan.matkhau}, Năm sinh: ${Practice4.Taikhoan.namsinh}`);
// console.log(`Số lượng tài khoản trong dsEmail: ${Practice4.dsEmail.length}`);
// console.log(`Số lượng tài khoản trong dsTaikhoanArray: ${Practice4.dsTaikhoanArray.length}`);   

// console.log(`Danh sách tài khoản trong dsTaikhoanArray:`);
// for(const taikhoanPractice of Practice4.dsTaikhoanArray){ 
//     console.log(`Email: ${taikhoanPractice.email}, Mật khẩu: ${taikhoanPractice.matkhau}, Năm sinh: ${taikhoanPractice.namsinh}`);
// }       
//  console.log(`tổng số lượng tài khoản trong dsTaikhoanArray: ${Practice4.dsTaikhoanArray.length}`);

//  console.log(`Danh sách tài khoản trong ds Email:`)
// for(const email of Practice4.dsEmail){
//     console.log(`Email: ${email}`);
// }
//  ;  

//thực hiện import file helper.ts vào practice5.ts
import { taoemail } from './helper';
const email = taoemail("tester");
console.log(`Email đã tạo: ${email}`);
