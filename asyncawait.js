const xinSoDT = () => {
  console.log(`Hoi xin so DT ku Nam`);
  console.log(`Dang tim...`);

  const thaoTacTimKiem = new Promise((resolve, reject) => {
    // dau vao cua promise la resolve,reject
    let daTimThay;
    setTimeout(() => {
      //
      daTimThay = true;
      if (daTimThay) {
        soDT = 123545948;
        console.log(`day roi. So cua ku Nam ${soDT}`);
        resolve(soDT); //data tra lai cho promise
      } else {
        reject(`Tao ko co so ku Nam`);
      }
    }, 1000);
  });

  return thaoTacTimKiem;
};

// xinSoDT()
//   .then((soDt) => console.log(`Da xin dc so ku nam ${soDt}`))
//   .catch((loi) => console.log(`Loi roi`, loi));
/**
 * then: khi thuc hien thanh cong
 * .catch: bi loi
 */

// sacpin
const sacPin = () => {
  console.log(`doi ti sac pin da`);
  let chayPin;

  const thaoTacSacPin = new Promise((resolve, reject) => {
    setTimeout(() => {
      chayPin = false;

      if (!chayPin) {
        console.log(`Sac pin day. Bat dau goi cho nam`);
        resolve(); //ko tra lai
      } else {
        reject(`chay pin roi ko goi duoc`);
      }
    }, 1500);
  });

  return thaoTacSacPin;
};

// goi cho nam
const goiChoNam = (soDT) =>
  console.log(`Dang noi chuyen voi Nam tai so ${soDT}`);

// thuc hien toan bo thao tac
// xinSoDT()
//   .then((soDT) => {
//     sacPin(soDT)
//       .then((soDT) => goiChoNam(soDT))
//       .catch((loiKhiXacPin) => console.log(loiKhiXacPin));
//   })
//   .catch((loiKhongXinDuoc) => console.log(loiKhongXinDuoc));
const hanhDong = async () => {
  try {
    const soDT = await xinSoDT();
    // goiChoNam(soDT);
    try {
      await sacPin();
      goiChoNam(soDT);
    } catch (loi) {
      console.log(loi);
    }
  } catch (loi) {
    console.log(loi);
  }
};

hanhDong();
