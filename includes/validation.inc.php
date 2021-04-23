<?php

function emptyInput($fullname,$email,$phone_number,$faculty, $grade, $attend_why,$radionica1,$radionica2,$radionice_experience,$radionice_why){

    if(empty($fullname) || empty($email) || empty($phone_number) || empty($faculty) || empty($grade) || empty($attend_why)){
        return false;
    }

    if(!empty($radionica1) || !empty($radionica2)){
        if(empty($radionice_experience) || empty($radionice_why) ){
            return false;
        }
    }
    else return true;
}
function invalidNumber($phone_number){
    if (preg_match($phone_number,"/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/")) {
        return true;
    }
    else return false;
}
function emptyCv($speed_dating,$cv){
    if(isset($speed_dating) && $cv==null){
            return false;
        
    }
    return true;
}


function invalidEmail($email){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        return true;
    }
    else return false;
}
function invalidname($fullname){
   
    if(preg_match($fullname,"/^[a-zA-Z0-9]*$/")){
        
        return true;
    }

    else return false;
}

function submitApplication($conn, $fullname,$email,$phone_number,$faculty, $grade, $attend_why,
    $radionica1,$radionica2,$radionica3, $radionice_why,$radionice_experience,$panel,$speed_dating,$microsoft_teams,$spam,$cv){

   
    $sql = "INSERT INTO applications (fullname, email, phone_number, faculty, grade, attend_why,
                radionica1,radionica2,radionica3, radionice_why,radionice_experience,panel,speed_dating,microsoft_teams,spam,cv) 
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../application.php?error=stmtfailed");
        exit();

    }
    
        mysqli_stmt_bind_param($stmt, "ssssssssssssssss", $fullname,$email,$phone_number,$faculty,$grade,$attend_why,
        $radionica1,$radionica2,$radionica3, $radionice_why,$radionice_experience,$panel,$speed_dating,$microsoft_teams,$spam,$cv);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
    
        //Ovde menjamo redirect ako prodje sve, tipa mozemo na index da ode, a mozemo i napraviti nesto na vrhu
        header("location: ../application.php?error=none");
        exit();
      
       
    
}