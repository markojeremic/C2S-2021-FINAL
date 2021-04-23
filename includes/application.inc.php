<?php 

 if(isset($_POST['submit'])){

    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];
    $faculty = $_POST["faculty"];
    $grade = $_POST["grade"];
    $attend_why = $_POST["attend_why"];
    $radionica1 = $_POST["radionica1"];
    $radionica2 = $_POST["radionica2"];
    $radionica3 = $_POST["radionica3"];
    $radionice_why = $_POST["radionice_why"];
    $radionice_experience = $_POST["radionice_experience"];
    $panel= $_POST["panel"];
    $speed_dating= $_POST["speed_dating"];
    $microsoft_teams= $_POST["microsoft_teams"];
    $spam= $_POST["spam"];
    $cv= $_FILES["cv"]["name"];
    
    
    
      

   require_once 'dbh.inc.php';
   require_once 'validation.inc.php';


 
   //Pozivanje validacije i stavljanje gresaka u url
   if (emptyInput($fullname,$email,$phone_number,$faculty, $grade, $attend_why,$radionica1,$radionica2,$radionice_experience,$radionice_why)!==true) {
        header("location: ../application.php?error=emptyInput");
        exit();   
   }
   if (invalidEmail($email)!==true) {
        header("location: ../application.php?error=invalidEmail");
        exit();   
   }
   if (emptyCv($speed_dating,$cv)==false) {
    header("location: ../application.php?error=CvRequired");
    exit();   
}
   
  //  if(invalidNumber($phone_number)==false){
  //   header("location: ../application.php?error=invalidNumber");

  //  }

   //Upload cv-a
   $target_dir = "../uploads/";
   $target_file = $target_dir . basename($_FILES["cv"]["name"]);
     if (move_uploaded_file($_FILES["cv"]["tmp_name"], $target_file)) {
       echo "The file ". htmlspecialchars( basename( $_FILES["cv"]["name"])). " has been uploaded.";
     } else {
       echo "Sorry, there was an error uploading your file.";
     }
       
   submitApplication($conn, $fullname,$email,$phone_number,$faculty, $grade, $attend_why,
     $radionica1,$radionica2,$radionica3,$radionice_why,$radionice_experience,$panel,$speed_dating,$microsoft_teams,$spam,$target_file);

    //Ako nije dosao preko dugmeta za submit vracamo ga na formu
}else {
    header("location:.. /c2s-2021/application.php");
    echo("Greska");
    }     