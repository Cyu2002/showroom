"use strict";const n=require("./aigc_check_base.js");let e=new Array(13).fill(!1),s=new Array(13).fill(!0);exports.and_check_and_state=function(s,c){1==s?1==c?n.and_pow_check_base(c).then((n=>{const s=JSON.stringify(n);console.log(s);const c=s.includes("n1");e[0]=c})):2==c?n.and_pow_check_base(c).then((n=>{const s=JSON.stringify(n);console.log(s);const c=s.includes("n1");e[1]=c})):3==c?n.and_pow_check_base(c).then((n=>{const s=JSON.stringify(n);console.log(s);const c=s.includes("n1");e[2]=c})):4==c?n.and_pow_check_base(c).then((n=>{const s=JSON.stringify(n);console.log(s);const c=s.includes("n1");e[3]=c})):5==c&&n.and_pow_check_base(c).then((n=>{const s=JSON.stringify(n);console.log(s);const c=s.includes("n1");e[4]=c})):2==s&&n.and_sys_check_base(c).then((n=>{const s=JSON.stringify(n);console.log(s);const o=s.includes("n1");e[4+c]=o}))},exports.and_checkdev_state=function(e,c){1==e?n.and_powdev_check_base(c).then((n=>{const e=JSON.stringify(n);console.log(e);const o=e.includes("true");s[c-1]=o})):n.and_sysdev_check_base(c).then((n=>{const e=JSON.stringify(n);console.log(e);const o=e.includes("true");s[4+c]=o}))},exports.and_dev_flag=s,exports.and_now_flag=e,exports.send_all_and_check=function(){n.all_send_q1()};
