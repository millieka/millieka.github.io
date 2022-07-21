document.querySelector("input").addEventListener('input', function(e){
  const target = e.target;
  if(target){
    const value = target.value;
    var passhash = CryptoJS.MD5(value).toString();
    if(passhash === "881b7df".toUpperCase().toLowerCase() + "cbfda70d6d80a5e0102c015fb"){
      document.querySelector('.passwd').style.display = "none";
      document.querySelector('.container').style.display = "block";

    }
    else if(passhash === "93e7e0a1ae59ba" + "3b6a692bff54e0cdb8".toLowerCase()){
      document.querySelector('.passwd').style.display = "none";
      document.querySelector('.container').style.display = "block";
    }
  }
});