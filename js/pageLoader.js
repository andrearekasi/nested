
function fillPage(){
mission();
service();
themes();
training();
contact();
aboutUs();
}

function mission() {

var mission = document.querySelector('#missionSection');
     mission.innerHTML = `<h2 class="missionTitle" >KÜLDETÉSÜNK</h2>
     <p class="missionText">Küldetésünk, hogy kollégáidat ellássuk a holnap kihívásai által megkövetelt digitális készségekkel. </p>`
}



function service() {
var serviceSection = document.querySelector('#serviceSection');
var div = document.createElement('div');

    serviceSection.innerHTML = 
    `<table class="serviceTable" id="serviceTable">
         <thead>
              <th colspan="3" class="title">SZOLGÁLTATÁSAINK</th>
         </thead>
         <tbody>
         <tr>
         <td class="serviceTd">
         <h4 class="serviceTitle">Tréning</h4><br>
                   <p>Célunk, hogy a digitális technológiák mindenkihez közel kerüljenek, használhatóvá váljanak és a
                    körülöttük keringő mítoszokat eloszlassuk. Olyan tréningeket állítottunk össze, amelyek hétköznapi nyelven, 
                    a laikusoknak (is) érthetöen adják át a szükséges tananyagot.</p> 
              </td>
              <td class="serviceTd">
                   <h4 class="serviceTitle">Tanácsadás</h4><br>
                   <p>Tudjuk, hogy egy új technológia bevezetése nem egyszerü dolog. 
                   Szakértőink azon dolgoznak, hogy cége digitális transzformációja gördülékeny legyen és az új eszközök 
                   észrevétlenül besimuljanak munkatársai mindennapjaiba. A tervezéstöl a kivitelezésen át, 
                   minden szakaszban Önök mellett állunk.</p>
                        </td>
              <td class="serviceTd">
              <h4 class="serviceTitle">Hatékonyságmérés</h4><br>
                             <p>Munkatársai számtalan tréningen részt vettek, de nem látja a fejlődést? 
                             Tesztelje kollégái tudását, soft készségeit módszerünkkel, és döntse el mely tréningek érik meg 
                             a befektetést. Utánkövetési módszerünkkel nem csak a saját tréningjeinket és trénereinket ellenőrizzük,
                             de más tréningeket is tudunk tesztelni.</p>
                         </td>
          </tr>
         </tbody>
    </table>`
    
    //serviceSection.appendChild(div);
}

function themes() {
     var themesSection = document.querySelector('#themesSection');
     
     themesSection.innerHTML =
     `<table class="themeTable">
          <thead>
               <th colspan="2" class="title">Mely témák szorulnak továbbfejlesztésre cégében?</th>
          </thead>
          <tbody>
               <tr>
                    <td class="themeTd">
                         <div class="iconDiv"><span class="icon" id="itTutoringIcon"></span></div><p>IT Felzárkóztatás</p>
                         <p class="themeDesc">Személyre szabott tréning kollégái hiányzó tudásának lefedésére. 
                         Informatikai rendszerek alapjai, hálózati ismeretek, programozás.</p>
                    </td>
                    <td class="themeTd">
                         <div class = "iconDiv"><i class="icon" id="couldIcon"></i></div><p>Felhő megoldások</p>
                         <p class="themeDesc">Felhő üzemeltetés, biztonság és megfigyelés. Mit várhat a felhö szolgáltatóktól és
                         melyik a legjobb megoldás az Ön cégének.</p>
                    </td>
               </tr>
               <tr>
                    <td class="themeTd">
                         <div class="iconDiv"><i class="icon" id="autoIcon"></i></div><p>Automatizálás</p>
                         <p class="themeDesc">Milyen lehetőségeket, kockázatokat rejt magában a folyamat automatizálás és milyen határai vannak.</p>
                    </td>
                    <td class="themeTd">
                         <div class="iconDiv"><i class="icon" id="blockChainIcon"></i></div><p>Blockchain</p>
                         <p class="themeDesc">Mi az a blokklánc és mely problémákat lehet vele orvosolni. 
                         Mi köze van a kriptovalutáknak a blockchainhez.</p>
                    </td>
               </tr>
               <tr>
                    <td class="themeTd">
                         <div class="iconDiv"><i class="icon" id="cybersIcon"></i></div><p>Kiberbiztonság</p>
                         <p class="themeDesc">Mit tehet azért, hogy elkerülje az olyan fenyegetéseket, mint az adathalászat, 
                         identitás-lopás, hackelés és pénzügyi csalás.</p>
                    </td>
                    <td class="themeTd">
                         <div class="iconDiv"><i class="icon" id="aiIcon"></i></div><p>Mesterséges intelligencia</p>
                         <p class="themeDesc">Hogyan müködik a mesterséges intelligencia, a machine learning. Mik azok a neurális hálózatok, 
                         a deep learning vagy NLP.</p>
                    </td>
               </tr>
          </tbody>
     </table>`
}


function training(){

var training = document.querySelector('#trainingSection');

training.innerHTML =
    `<table class="serviceTable"><thead><tr><th class="trainingSectionTitle">TRAININGFORMÁK</th></tr></thead></table>
    <div class="trainingDiv"> <h4 class="trainingTitle">Félnapos tréning</h4><br>
               <p> Sajátítsa el egy téma alapjait és az ahhoz tartozó szakzsargont. 
               Tanulja meg, hogy mire lehet használni az adott technológiát és az milyen előnyökkel/hátrányokkal jár.</p>
     </div>
     <div class="trainingDiv">
      <h4 class="trainingTitle">Bootcamp</h4><br>
               <p>Többnapos tréning, amely során konkrét problémák megoldásán keresztül alkalmazza a tanultakat. 
               Célja a technológia olyan szintü megismerése, hogy azt utána mindennapi munkájában hasznosítani tudja.</p>
     </div>
     <div class="trainingDiv">
     <h4 class="trainingTitle">Hackathon</h4><br>
               <p>A résztvevő csapatok már meglévő tudásukat egy új környezetben kamatoztatják és kiaknázzák kreativitásukat.
               Az időkorlát minden csapattagból kihozza a rejtett tehetségeket és a csapatszellemet is hosszú távon javítja.</p>
     </div>`

}

function contact() {
     var contactForm = document.querySelector('#contactForm');

     //<thead><tr><th class="title">Vegye fel velünk a kapcsolatot!</th></tr></thead>
     contactForm.innerHTML = `
     <div><table class="serviceTable"><thead><tr><th class="title">Vegye fel velünk a kapcsolatot!</th></tr></thead></table>
     <table class="contactTable">
     <tbody>
     <tr>
     <td class="contactTds"><span for="name" class="formspan">*Név:</span></td>
     <td class="contactTds"><span for="company" class="formspan">*Cég:</span></td>
     </tr>
     <tr>
     <td class="contactTds"><input class="contactInput" id="name" type="text" required></td>
     <td class="contactTds"><input class="contactInput" id="company" type="text" required></td>
     </tr>
     <tr>
     <td class="contactTds"><span for="email" class="formspan">*E-mail cím:</span></td>
     <td class="contactTds"><span for="phone" class="formspan">Telefonszám:</span></td>
     </tr>
     <tr>
     <td class="contactTds"><input class="contactInput" id="email" type="text" required></td>
     <td class="contactTds"><input class="contactInput" id="phone" type="text"></td>
     </tr>
     <tr><td class="contactTds"> <span for="comment">Üzenet:</span></td></tr>
     <tr><td class="contactTds" colspan="2"><textarea class="contactInput" id="comment" rows="4" cols="50"></textarea></td></tr>
     <tr><td class="contactTds"> <input class="btn btn-outline-dark" type="submit" value="Küldés"></td></tr></tbody></table>
     </div>
    
     <div class="contactDiv">
     <img src="/img/nested logo.png">
     <p class="companyInfos">NESTED Kft</p>
     <p class="companyInfos">Debrecen, Magyarország</p>
     <p class="companyInfos">contact@nested.hu</p>
     <p class="companyInfos">+36203204048</p>
     </div>
     `
}

function aboutUs() {
var aboutUs = document.querySelector("#aboutUsSection");

aboutUs.innerHTML = `
<h2>RÓLUNK</h2>
<div id="vera">
<div class="pic"><img src="/img/Veronika.jpg" class="pic">
<figcaption>KORMÁNY VERONIKA</figcaption></div>
<div class="selfInfo">
<span>A legújabb technológiai felfedezések már gyerekkorom óta foglalkoztatnak. 
Akkoriban tudományos magazinokkal csillapítottam tudáséhségem, 
manapság az internet nyújtotta korlátlan információáradat előnyeit élvezem.
A Budapesti Corvinus Egyetemen szerzett diploma után Svájcba húzott a szívem, 
ahol az utóbbi 8 évben többféle szektorban lehettem tanúja a technológiai fejlődésnek.
Kezdetben egy nonprofit nemzetközi szervezetnél Földünk erőforrásainak fenntartható felhasználásáért munkálkodtam, 
majd egy kockázati tőkealapnál biotech startupok felfuttatásában segédkeztem. 
Innen váltottam a világ legnagyobb viszontbiztosítójához, ahol informatikai innovációs projekteket menedzseltem. 
Utóbbinál éles bevetésben láttam mesterséges intelligencia alkalmazásokat, IoT megoldásokat, big data elemzéseket.
Ebből szeretnék egy szeletet Magyarországra visszahozni és a digitális készségeket minél szélesebb körben elterjeszteni. 
Célom, hogy a NESTED szolgáltatásai nemzetközi szinten is megállják a helyüket.</span>
</div>
</div>
<div id="gabi">
<div class="pic"><img src="/img/Gabor.jpg" class="pic">
<figcaption>TURI GÁBOR</figcaption></div>
<div class="selfInfo">
<span>A legújabb technológiai felfedezések már gyerekkorom óta foglalkoztatnak. 
Akkoriban tudományos magazinokkal csillapítottam tudáséhségem, 
manapság az internet nyújtotta korlátlan információáradat előnyeit élvezem.
A Budapesti Corvinus Egyetemen szerzett diploma után Svájcba húzott a szívem, 
ahol az utóbbi 8 évben többféle szektorban lehettem tanúja a technológiai fejlődésnek.
Kezdetben egy nonprofit nemzetközi szervezetnél Földünk erőforrásainak fenntartható felhasználásáért munkálkodtam, 
majd egy kockázati tőkealapnál biotech startupok felfuttatásában segédkeztem. 
Innen váltottam a világ legnagyobb viszontbiztosítójához, ahol informatikai innovációs projekteket menedzseltem. 
Utóbbinál éles bevetésben láttam mesterséges intelligencia alkalmazásokat, IoT megoldásokat, big data elemzéseket.
Ebből szeretnék egy szeletet Magyarországra visszahozni és a digitális készségeket minél szélesebb körben elterjeszteni. 
Célom, hogy a NESTED szolgáltatásai nemzetközi szinten is megállják a helyüket.</span>
</div>
</div>
`

}

fillPage();