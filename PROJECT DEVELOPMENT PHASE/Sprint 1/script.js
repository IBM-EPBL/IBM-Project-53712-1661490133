function validate1(){
    var mail = document.getElementById("email").value;
    var atpos = mail.indexOf('@');
    var dotpos = mail.lastIndexOf('.');
    if( mail== ""){
        alert("Enter your mail ID");
        document.myform.email.focus();
        return false;
    }
    if( atpos<1 || dotpos+2<atpos || dotpos+2>=mail.length ){
        alert("Enter the valid email Id\n atpostion:"+atpos+"\n dotposition:"+dotpos);  
        document.myform.email.value="";
        document.myform.email.focus();            
        return false;
    }

    var firstpass = document.getElementById("pass").value;
    var secondpass = document.getElementById("repass").value;
    if ( firstpass == "" || secondpass== "")
    {
        alert ( "Enter the password");
        document.myform.pass.focus();
        return false;
    }
    if ( firstpass != secondpass){

        alert ( "Password must be Same");
        document.myform.repass.value="";
        document.myform.repass.focus();
        return false;
    }
    return true;

}