//Formdan gerekli ID'ler çağırıldı.
var email= document.forms['form']['email'];
var password= document.forms['form']['password'];

//Değerlendirme işlemi yapıldı.
function validated(){
    if ((email.value == 'yuka@yuka.com') && (password.value == 'yuka123')){
        return true;  
    }
    else{return false};
}
