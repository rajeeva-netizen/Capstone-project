const Auth = {
    isLogin: false,
  
    login(cb) {
      this.isLogin = true;
      cb();
    },
  
    signout(cb) {
      this.isLogin = false;
      cb();
    },
  
    isLogined() {
      return this.isLogin;
    }
  };
  
  export default Auth;
  