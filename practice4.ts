export const Taikhoan = {
    email: "huongntn17@fpt.com",
    matkhau: "123456",
    namsinh: 1989,

}
console.log(Taikhoan.email);
console.log(Taikhoan.matkhau);
console.log(Taikhoan.namsinh);

export const dsEmail:string[]  = ["huongntn17@fpt.com","nhu@fpt.com","giang@fpt.com"];
console.log(dsEmail[0]);
console.log(dsEmail.length);

const dsTaikhoan=[{email:"huongfpt.com",matkhau:"123456",namsinh:1989},
    {email:"thuc@fpt.com",matkhau:"123456",namsinh:1990},
    {email:"minh@fpt.com",matkhau:"123456",namsinh:1991}
]
console.log(dsTaikhoan[0].email);
console.log(dsTaikhoan.length);
for(const taikhoan of dsTaikhoan){
    console.log(`Email: ${taikhoan.email}, Mật khẩu: ${taikhoan.matkhau}, Năm sinh: ${taikhoan.namsinh}`);
}

export const dsTaikhoanArray = [{email:"practice1@fpt.com",matkhau:"123456",namsinh:1989},
    {email:"practice2@fpt.com",matkhau:"123456",namsinh:1990},
    {email:"practice3@fpt.com",matkhau:"123456",namsinh:1991}
]
for(const taikhoanPractice of dsTaikhoanArray){ 
    console.log(`Email: ${taikhoanPractice.email}, Mật khẩu: ${taikhoanPractice.matkhau}, Năm sinh: ${taikhoanPractice.namsinh}`);

}
console.log(`Số lượng tài khoản trong dsTaikhoanArray: ${dsTaikhoanArray.length}`);