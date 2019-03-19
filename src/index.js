module.exports = function check(str, bracketsConfig) {
  
str2 = bracketsConfig.join('');
// console.log ("str2 ", str2);
     
var strnew = str + str2;
// console.log ("strnew", strnew);
strnew = strnew.replace(/\s/g, '');
strnew = strnew.replace(/,/g, '');


while (/\(\)/.test(strnew) || /\[\]/.test(strnew) || /\{\}/.test(strnew) || /\'\'/.test(strnew) || /\|\|/.test(strnew) ||
/12/.test(strnew) || /34/.test(strnew) || /56/.test(strnew) || /77/.test(strnew) || /88/.test(strnew) )   {
  strnew = strnew.replace(/\(\)/g, '');
  strnew = strnew.replace(/\[\]/g, '');
  strnew = strnew.replace(/\{\}/g, '');
  strnew = strnew.replace(/\|\|/g, '');
  strnew = strnew.replace(/12/g, '');
  strnew = strnew.replace(/34/g, '');
  strnew = strnew.replace(/56/g, '');
  strnew = strnew.replace(/77/g, '');
  strnew = strnew.replace(/88/g, '');
}

// console.log (strnew);
// if (strnew.length == 0) {
//   return ;
// }  
//   else {
//   return ;
// } 

return (strnew.length == 0) ? true : false; 
      
}
