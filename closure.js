function createLogger(namesapce) {
  function logger(message) {
    console.log(`[${namesapce}] ${message}`);
  }
  return logger;
}

//home

const infoLogger = createLogger("Info");

infoLogger("Ham gui mail bat dau chay");
infoLogger("Gui mail loi lan 1, thu gui lai");
infoLogger("Gui  mail thanh cong cho user xx");

//forgot password
const errorLogger = createLogger("Error");

errorLogger("Email khong ton tai trong DB");
errorLogger("Gui mail loi lan 1, thu gui lai");
errorLogger("Gui  mail thanh cong cho user xx");
