<!DOCTYPE html>
<html lang="de-de">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Autos zu verkaufen</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="signup.css">
    <!-- <script type="module" src="index.js"></script> -->
    <!-- <script type="text/javascript" src=""></script> -->
</head>


<body>
    <?php
    $servername = "https://db.inf-pool.it.hs-worms.de";
    $username = "sidb_sose23_023";
    $password = "J4w1LztpA4uVRfbu";

    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed4: " . $conn->connect_error);
    }
    else{
        echo "Succes";
    }

    // Create database
    $sql = "CREATE DATABASE DB";
    if ($conn->query($sql) === TRUE) {
    console.log("Database created successfully");
    } else {
    console.log( "Error creating database: " , $conn->error);
    }

    $conn->close();
    ?> 

    <header>
        <div class="name" ><span>D</span>rive<span>D</span>eal</div>
        <ul class="nav">
            <li><a href="home.html" ><i class="fa-solid fa-house"></i>Home</a></li>
            <li><a href="login.html"></a>Login</a></li>
            <li><a href="ueber.html" class="hilfe">Ueber Uns</a></li>
            <li><a href="ueber.html">Über uns</a></li>
        </ul>
        <div class="toggle">
            <i class="fa-sharp fa-solid fa-bars ouvrir" ></i>
            <i class="fa-solid fa-circle-xmark fermer" ></i>
        </div>
        
    </header>
    <hr>

    <section class="home" id="home">
        <div class="home-text">
            <h1>Bauen Sie Ihr Traumauto mit <span>D</span>rive<span>D</span>eal!!!</h1>
            <!-- <img src="bild/auto.jpg" alt="" class="home_img"> -->
            <video autoplay loop muted plays-inline class="video">
                <source src="bild/autoVideo.mp4" type="video/mp4" class="video">
            </video>
            <div class="home_car">
                <div class="home_car_data">
                    <div class="home_car_icon">
                        <i class="fa-solid fa-temperature-half"></i>
                    </div>
                    <h2 class="home_car_nummer">24°</h2>
                    <h3 class="home_car_name">TEMPERATUR</h3>
                </div>
                <div class="home_car_data">
                    <div class="home_car_icon">
                        <i class="ri-dashboard-3-line"></i>
                    </div>
                    <h2 class="home_car_nummer">873</h2>
                    <h3 class="home_car_name">MILEAGE</h3>
                </div>
                <div class="home_car_data">
                    <div class="home_car_icon">
                        <i class="fa-sharp fa-solid fa-battery-full"></i>                    
                    </div>
                    <h2 class="home_car_nummer">95%</h2>
                    <h3 class="home_car_name">BATTERY</h3>
                </div>
            </div>
            <a href="#Sign" class="btn">START</a>
        </div>
    </section>

    <a name="Sign"></a>
    <div class="wrapper">
        <h1>Sign Up</h1>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <input type="text" name="t_fn"  placeholder="Name" maxlength="20" required value="<?php echo $t_fn;?>">
            <!-- <input type="text" placeholder="Name"> -->
            <!-- <input type="text" placeholder="Benutzername"> -->
            <input type="text" name="t_fn"  placeholder="Benutzername" maxlength="20" required value="<?php echo $t_fn;?>">
            <!-- <input type="text" placeholder="Email"> -->x
            <input type="text" name="t_fn"  placeholder="Email" maxlength="20" required value="<?php echo $t_fn;?>">
            <!-- <input type="Password" placeholder="Password"> -->
            <input type="text" name="t_fn"  placeholder="Password" maxlength="20" required value="<?php echo $t_fn;?>">
            <!-- <input type="Password" placeholder="Re-Enter Password"> -->
            <input type="text" name="t_fn"  placeholder="Re-Enter Password" maxlength="20" required value="<?php echo $t_fn;?>">
            <input type="submit" value="Sign Up">
            <p>Voici une: <?php echo $name;echo " ";?> </p>
        </form>
        <div class="terms">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">Ich akzeptiere alles <a href="#">
                Terms & Conditions</a></label>
        </div>
        <a href="#Login" class="button"><button>Sign Up</button></a>
        <div class="member">
            Schon eingeloggt? <a href="#Login">
                Hier sich einloggen
            </a>
        </div>
    </div>

    <a name="Login"></a>
    <div class="wrapper">
        <h1>Login</h1>
        <form action="Login" method="post">
            <!-- <input type="text" placeholder="Benutzername"> -->
            <input type="text" name="t_fn"  placeholder="Benutzername" maxlength="20" required value="<?php echo $t_fn;?>">
            <!-- <input type="Password" placeholder="Password"> -->
            <input type="text" name="t_fn"  placeholder="Password" maxlength="20" required value="<?php echo $t_fn;?>">
            <div class="recover">
                <a href="#">Password Vergessen?</a>
            </div>
        </form>

        
        <a href="index.html" class="button"><button>Login</button></a>
        <div class="member">
            Schon registriet? <a href="./signup.html">
                Jetzt sich registrieren
            </a>
        </div>
    </div>


    <footer>
        <div class="foot">Unsere Service<br>
            <a href="#" class="foo1">Hilfe</a>
            <a href="#" class="foo1">Über uns</a>
            <a href="#" class="foo1">E-Commerce</a>
            <a href="#" class="foo1">Ausland kaufen</a>
            <a href="#" class="foo1">Werbung</a> 
            <a href="#" class="foo1">Deal</a>
        </div>
        <div class="foot">Arbeitstage<br>
            <ul class="liste-horaires">
                <li>Montag</li>
                <li>Dienstag</li>
                <li>Mittwoch</li>
                <li>Donnerstag</li>
                <li>Freitag</li>
                <li>Samstag</li>
                <li>Sonntag</li>
            </ul>
        </div>
        <div class="foot">Folge uns<br>
            <div class="lo">
            <a target="_blank" href="bild/facebook.png" class="lien-icone">
            <img src="bild/facebook.png" alt="facebook" width="25px" height="25px"></a>
            <a target="_blank" href="bild/instagram.png" class="lien-icone">
                <img src="bild/instagram.png" alt="instagram" width="25px" height="25px"></a>
            <a target="_blank" href="bild/twitter.png" class="lien-icone">
                <img src="bild/twitter.png" alt="instagram" width="25px" height="25px"></a>
            <a target="_blank" href="bild/youtube.png" class="lien-icone">
                <img src="bild/youtube.png" alt="instagram" width="25px" height="25px"></a>
            </div>
        </div>
        <div class="foot">&copy; [2023] [Drive Deal].Alle Rechte vorbehalten<br>Datenschutz | Datenschutzeinstellungen | Impressum</div>
    
        <footer>
    </body>

</html>