const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYLYBbXKTTMpoRC41Dmwef8eZ4L8r4Cl_YQrUWTNyN0SDryn_VDMa-IFHYaH2yXMxin86aV2_MYUTq0_",
  client_secret: "ENo_PhsHTgJqRc05o3r5i3D4dJLsrQQr9VdJoCB6tXiz-Yal9ev8OjKBtEbxAykSWjmKltzxagvNcYY7",
});

module.exports = paypal;
