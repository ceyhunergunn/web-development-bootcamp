//Formdan gerekli ID'ler çağırıldı.
var email= document.forms['form']['email'];
var password= document.forms['form']['password'];

//Değerlendirme işlemi yapıldı.
function validated(){
    if ((email.value == 'ceyhun@ceyhun.com') && (password.value == 'ceyhun123')){
        return true;  
    }
    else{return false};
}
