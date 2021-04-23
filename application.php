<link rel="stylesheet" href="./style.css" />
<link rel="stylesheet" type="text/css">

<div class="prijava-wrapper">
    <div class="title">
    <h2>Prijava</h2>
    </div>
    <div class="errorhandle">
                <?php
                    
                    if(isset($_GET["error"])){
                        if($_GET["error"]=="emptyInput"){
                            echo "<p>Popunite sva polja </p>";
                        }
                        if($_GET["error"]=="invalidEmail"){ 
                            echo "<p>Molimo unesite validan mejl </p>";
                        }
                        if($_GET["error"]=="stmtfailed"){
                            echo "<p>Doslo je do greske, pokusajte ponovo</p>";
                        }
                        if($_GET["error"]=="CvRequired"){
                            echo "<p>Obavezan Cv ako se ide na speed dating</p>";
                        }
                        if($_GET["error"]=="none"){
                            echo "<p>Vaša prijava je predata! Hvala</p>";
                        }
                    }
                ?>
            </div>
    <form action="includes/application.inc.php" method="post" enctype="multipart/form-data"> 
        <div class= "basic-info" style = "margin-bottom: 50px">
        
            <div class="inputfield">
                <label for="fullname">Ime i prezime:</label>
                <input type="text" name="fullname" placeholder=" Ime i prezime..."  autocomplete="off" class="osnovni-podaci" maxlength="45" >  <br>
            </div>

            <div class="inputfield">
                <label for="mail">Email:</label>
                <input id="mail" type="email" name="email" placeholder=" Email..." style="margin-left: 65px;" class="osnovni-podaci" maxlength="45">  <br>
            </div>

            <div class="inputfield">
                <label for="fullname">Broj telefona:</label>
                <input type="text" name="phone_number" placeholder=" Broj telefona... " style="margin-left: 15px;" autocomplete="off" class="osnovni-podaci" maxlength="45">  <br>
            </div>

            <div class="inputfield">
                <label for="faculty">Fakultet:</label>
                <input type="text" name="faculty" placeholder=" Fakultet..." autocomplete="off" style="margin-left: 48px;margin-bottom: 15px;" class="osnovni-podaci" maxlength="45" > <br>
            </div>

            <div class="inputfield">
                <label for="grade">Godina studija</label>
                <div class="custom_select">
                    <select name="grade" id="grade" >
                        <option value="Prva">Prva</option>
                        <option value="Druga">Druga</option>
                        <option value="Treca">Treca</option>
                        <option value="Cetvrta">Cetvrta</option>
                        <option value="Apsolvent">Apsolvent</option>
                        <option value="Master studije">Master studije</option>
                        <option value="Doktorske studije">Doktorske studije</option>
                    
                    </select>
                </div>
            </div>
            <div style="margin-top:20px ;">Zašto ste odlučili da učestvujete na ovom projektu?</div>
            <textarea name="attend_why" placeholder="" autocomplete="off" cols="50" rows="4" maxlength="255" class="zasto"></textarea>
        
        </div>

        
        <div class="prijava-radionice" style = "display:flex;">
            <div style="margin:20px;">
            <input type="checkbox" id="radionica1" name="radionica1" value="da"  onclick="myFunction(this.id)">
            <label for="radionica1"> Radionica 1</label><br>
            <p>Lorem ipsum dolor sit ametbr consectetur adipisicing elit. Quidem</p>
            </div>
            
            <div style="margin:20px;">
            <input type="checkbox" id="radionica2" name="radionica2" value="da"  onclick="myFunction(this.id)">
            <label for="radionica2">Radionica2</label><br>
            <p>Lorem ipsum dolor sit ametbr consectetur adipisicing elit. Quidem, enim.</p>
            </div>
        
        </div>

        <div class="inputField" id = "extraquestions" style="display:none; margin-bottom:50px ;">
        
            <div style="margin-top:20px ;">Šta Vas je motivisalo da odaberete ovu radionicu </div>
            <textarea name="radionice_why"  autocomplete="off" cols="50" rows="4" maxlength="255" ></textarea><br>

            <div style="margin-top:20px ;">Koliko ste upoznati sa tehnologijama koje se obrađuju na radionicama koje ste odabrali?</div>
            <textarea name="radionice_experience"  autocomplete="off" cols="50" rows="4" maxlength="255" ></textarea><br>
        </div>

        <div class="prijava-questions">

            <div class="inputfield">
                <label for="panel">Da li želite da učestvujete na panelu?</label>
                <input type="checkbox" id="panel" name="panel" value="da" ><br><br>
            </div>

            <div class="inputfield">
                <label for="speed_dating"> Da li želite da učestvujete na speed dating-u sa kompanijom Levi9? (CV obavezan)</label>
                <input type="checkbox" id="speed_dating" name="speed_dating" value="da" ><br><br>
                </div>

            <div class="inputfield">
                <label for="microsoft_teams">Da li ste do sad koristili Microsoft Teams platformu?</label>
                <input type="checkbox" id="microsoft_teams" name="microsoft_teams" value="da" ><br><br>
            </div>

            <div class="inputfield">
                <label for="spam">Da li želite da dobijate obaveštenja o drugim projektima i aktivnostima FONIS-a? </label>
                <input type="checkbox" id="spam" name="spam" value="da" ><br><br>
            </div>

            <label for="cv">Priložite svoj CV (.pdf) </label>
            <input type="file" id="cv" name="cv" accept=".pdf"><br>

            <button type="submit" name="submit" class="sacuvaj-prijava">Sačuvaj</button>
            <div class="errorhandle">
                <?php
                    
                    if(isset($_GET["error"])){
                        if($_GET["error"]=="none"){
                            echo "<p>Vaša prijava je predata! Hvala</p>";
                        }
                    }
                ?>
            </div>
        </div>
        
    </form>
</div>
    


<style>
   
body{
    background: url("img/pozadinaprijava.jpg")no-repeat fixed ;
    background-size: cover;
    color: white;
 
}

textarea{
    resize: none;
       
}

.zasto {
    height: 280px;
    margin-top: 5px;
}

.osnovni-podaci {
    height: 30px;
    padding: 0.25rem;
}

.prijava-wrapper {

  max-width: 1500px;
  width: 100%;
  margin: 1rem auto;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.125);
  padding: 0.5rem;
  font-family: Roboto;
  font-weight: 300;
}

.prijava-wrapper .form  {
  width: 100%;
}
.prijava-wrapper .form .inputfield{
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.prijava-wrapper .form  .inputfield label{
   width: 200px;
   color: #757575;
   margin-right: 10px;
  font-size: 14px;
}

.prijava-wrapper .form .inputfield .input,
.prijava-wrapper .form .inputfield .textarea{
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.prijava-wrapper .form .inputfield .textarea{
  width: 100%;
  height: 125px;
  resize: none;
}
@media (max-width:700px) {
  .prijava-wrapper .form .inputfield{
    flex-direction: column;
    align-items: flex-start;
  }
  .prijava-radionice{
    flex-direction: column;
    align-items: flex-start;
  }
  .prijava-wrapper .form .inputfield label{
    margin-bottom: 5px;
  }
  .prijava-wrapper .form .inputfield.terms{
    flex-direction: row;
  }
}





#extraquestions{
    margin-top: 20px;
    text-align: center;
}
.prijava-questions{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 150px;
}
.prijava-radionice {
    display: grid;
    grid-template-areas: 'heading' 'text';
    position: relative;
    text-align: center;
    top: 10%;
    left: 30%;
    width: 40%;
    padding: 2%;
    grid-gap: 5%;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #ffffff;
    box-sizing: border-box;
    
    border-radius: 15px;
}

/* Treba namestiti ovde da bude isto kao select, nije sada dobro */
   option{
    background: rgba(255, 255, 255, 0.2);
    color: black;
   }
   
    input,select, textarea{
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #FFFFFF;
        border-color: white;
        box-sizing: content-box;
        border-radius: 15px;
        color: white;
        font-family: Roboto;
        font-style: normal;
        margin-bottom: 10px;
        margin-left: 10px;
    }
     
    ::placeholder{
        color: white;
    }

        
    h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 3rem;
        line-height: 94px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 8px -8px 10px rgba(255, 255, 255, 0.07), -30px 30px 30px rgba(0, 0, 0, 0.2), -10px 10px 10px rgba(0, 0, 0, 0.35);
        margin-bottom: 30px;
    }

    .basic-info{
        text-align: center;
        width: 100%;
    }

    .sacuvaj-prijava {
        margin-top: 1rem;
    }

    .errorhandle{
        text-align: center;
        margin-top: 10px;
        margin-bottom: 30px;
    }

 </style> 

<script>
    function myFunction(id) {
  // Get the checkbox
  var checkBox = document.getElementById(id);
  // Get the output text
  var text = document.getElementById("extraquestions");

  // If the checkbox is checked, display the output questions
  if (checkBox.checked == true){
    extraquestions.style.display = "block";
  } 
//   else {
//     questions.style.display = "none";
//   }
//Ne treba, nema problema onda?
}
</script>