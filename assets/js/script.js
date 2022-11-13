// Change all variables from let to const where possible

document.body.innerHTML = `
<h1>Login Page</h1>
<br>
<input type="text" id="username-el" placeholder="username">
<br>
<input type="password" id="password-el" placeholder="password">
<br>
<br>
<button type="button" id="login-el">LOGIN</button>
<br>
<p id="failed-login-el"></p>
`
const usernameEl = document.getElementById("username-el")
const passwordEl = document.getElementById("password-el")
const loginEl = document.getElementById("login-el")
const failedLoginEl = document.getElementById("failed-login-el")

// First 5000 digits of pi, stored as a string to bypass JavaScript int rounding (source: https://clickcalculators.com/pi-calculator/5000):
let piString = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026401363944374553050682034962524517493996514314298091906592509372216964615157098583874105978859597729754989301617539284681382686838689427741559918559252459539594310499725246808459872736446958486538367362226260991246080512438843904512441365497627807977156914359977001296160894416948685558484063534220722258284886481584560285060168427394522674676788952521385225499546667278239864565961163548862305774564980355936345681743241125150760694794510965960940252288797108931456691368672287489405601015033086179286809208747609178249385890097149096759852613655497818931297848216829989487226588048575640142704775551323796414515237462343645428584447952658678210511413547357395231134271661021359695362314429524849371871101457654035902799344037420073105785390621983874478084784896833214457138687519435064302184531910484810053706146806749192781911979399520614196634287544406437451237181921799983910159195618146751426912397489409071864942319615679452080951465502252316038819301420937621378559566389377870830390697920773467221825625996615014215030680384477345492026054146659252014974428507325186660021324340881907104863317346496514539057962685610055081066587969981635747363840525714591028970641401109712062804390397595156771577004203378699360072305587631763594218731251471205329281918261861258673215791984148488291644706095752706957220917567116722910981690915280173506712748583222871835209353965725121083579151369882091444210067510334671103141267111369908658516398315019701651511685171437657618351556508849099898599823873455283316355076479185358932261854896321329330898570642046752590709154814165498594616371802709819943099244889575712828905923233260972997120844335732654893823911932597463667305836041428138830320382490375898524374417029132765618093773444030707469211201913020330380197621101100449293215160842444859637669838952286847831235526582131449576857262433441893039686426243410773226978028073189154411010446823252716201052652272111660396665573092547110557853763466820653109896526918620564769312570586356620185581007293606598764861179104533488503461136576867532494416680396265797877185560845529654126654085306143444318586769751456614068007002378776591344017127494704205622305389945613140711270004078547332699390814546646458807972708266830634328587856983052358089330657574067954571637752542021149557615814002501262285941302164715509792592309907965473761255176567513575178296664547791745011299614890304639947132962107340437518957359614589019389713111790429782856475032031986915140287080859904801094121472213179476477726224142548545403321571853061422881375850430633217518297986622371721591607716692547487389866549494501146540628433663937900397692656721463853067360965712091807638327166416274888800786925602902284721040317211860820419000422966171196377921337575114959501566049631862947265473642523081770367515906735023507283540567040386743513622224771589150495309844489333096340878076932599397805419341447377441842631298608099888687413260472"

function seasoning(username, password) {
    let userDigits = 1
    let modifiedSalt = []
    let modifiedSaltCounter = 0
    for(let i = 0; i < username.length; i++) {
        userDigits += username.charCodeAt(i) * username.length
    }
    for(let i = userDigits % 128; i < 3000; i++) {
        modifiedSalt[modifiedSaltCounter] = parseInt(piString.substring(i, i + 1)) + i * userDigits
        modifiedSaltCounter++
    }
    // console.log(modifiedSalt)
    let finalSalt = []
    finalSaltCounter = 0
    for(let i = 0; i < modifiedSalt.length; i++) {
        modifiedSalt[i] %= 128
        if((modifiedSalt[i] < 123 && modifiedSalt[i] > 96) || (modifiedSalt[i] < 91 && modifiedSalt[i] > 64)) {
            finalSalt[finalSaltCounter] = String.fromCharCode(modifiedSalt[i])
            finalSaltCounter++
        } else if(modifiedSalt[i] < 58 && modifiedSalt[i] > 47) {
            finalSalt[finalSaltCounter] = modifiedSalt[i]
            finalSaltCounter++
        }
    }
    for (let i = 0; i < finalSaltCounter; i++) {
        password += finalSalt[i]
    }
    return password
}

function hasher(salt) {
    let hashVal = 0
    let midHashArr = []
    let finalHash = ""
    let finalHashCounter = 0
    let finalHashArr = []
    for(let i = 0; i < salt.length; i++) {
        let val = salt.charCodeAt(i)
        hashVal = ((hashVal << 6) - hashVal) + val
        midHashArr[i] = Math.abs(hashVal)
    }
    for(let i = 0; i < midHashArr.length; i++) {
        singleVal = midHashArr[i] % 128
        if((singleVal < 123 && singleVal > 96) || (singleVal < 91 && singleVal > 64)) {
            finalHashArr[finalHashCounter] = String.fromCharCode(singleVal)
            finalHashCounter++
        } else if(singleVal < 58 && singleVal > 47) {
            finalHashArr[finalHashCounter] = singleVal
            finalHashCounter++
        }
    }
    let i = 0
    while(finalHash.length < 270) {
        finalHash += finalHashArr[i]
        i++
    }
    return finalHash.substring(0, 256)
}

class HashTable {
    constructor(username, password) {
        this.username = username
        this.hash = hasher(seasoning(username, password))
        this.balance = 0
    }

    sessionKeyGenerator(username, password) {
        let passString = ""
        for(let i = 0; i < password.length; i++) {
            passString += password.charCodeAt(i)
        }
        let plainBitArr = []
        for(let i = 0; i < passString.length; i++) {
            plainBitArr[i] = parseInt(passString.substring(i, i + 1)) % 2
        }

        // Random initial bits provided by https://www.random.org/bytes/
        let keyBits = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1]
        let finalKeyStream = []
        let cipherBitArr = []
        let initialKeyBitXOR = 0
        for(let i = 0; i < 600; i++) {
            initialKeyBitXOR = keyBits[2] ^ keyBits[keyBits.length - 3]
            keyBits.unshift(initialKeyBitXOR)
            finalKeyStream[i] = keyBits.pop()
        }
        for (let i = 0; i < plainBitArr.length; i++) {
            cipherBitArr[i] = plainBitArr[i] ^ finalKeyStream[i + (finalKeyStream.length - plainBitArr.length)]
        }
        sessionStorage.setItem(username, cipherBitArr)
        return sessionStorage.getItem(username)
    }
}

let user1 = new HashTable("Alice", "Mypassword123!")
// console.log(user1.hash)
let user2 = new HashTable("Steve", "Thisisthepassword@#")
// console.log(user2.hash)
let user3 = new HashTable("Joe", "Metsamillion67")
// console.log(user3.hash)
let user4 = new HashTable("Jeffrey", "117el8tion")
// console.log(user4.hash)


// Fix so that works for any user, not just user1
// Checks first if any user exists with that username
// Returns error if no user exists with that username
loginEl.addEventListener("click", function() {
    let returningUsername = usernameEl.value.trim()
    let returningPassword = passwordEl.value.trim()
    if(user1.hash === hasher(seasoning(returningUsername, returningPassword))) {
        console.log("Correct password entered")
        usernameEl.value = ""
        user1.sessionKeyGenerator(returningUsername, returningPassword)
        document.body.innerHTML = `
        <h1>Welcome back, ${returningUsername}</h1>
        <button type="button" id="deposit-el">Make Deposit</button>
        <br>
        <button type="button" id="balance-el">Check Balance</button>
        <br>
        <button type="button" id="withdrawal-el">Make Withdrawal</button>
        <br>
        <button type="button" id="logout-el">Logout</button>
        `
        const depositEl = document.getElementById("deposit-el")
        const balanceEl = document.getElementById("balance-el")
        const withdrawalEl = document.getElementById("withdrawal-el")
        const logoutEl = document.getElementById("logout-el")
        depositEl.addEventListener("click", function() {
            if(sessionStorage.getItem("Alice") == user1.sessionKeyGenerator(returningUsername, returningPassword)) {
                console.log("Successful deposit")
                user1.balance += 150
            } else {
                console.log("Request denied")
            }
        })
        balanceEl.addEventListener("click", function() {
            if(sessionStorage.getItem("Alice") == user1.sessionKeyGenerator(returningUsername, returningPassword)) {
                console.log(user1.balance)
            } else {
                console.log("Request denied")
            }
        })
        withdrawalEl.addEventListener("click", function() {
            if(sessionStorage.getItem("Alice") == user1.sessionKeyGenerator(returningUsername, returningPassword)) {
                console.log("Successful withdrawal")
            } else {
                console.log("Request denied")
            }
        })
        logoutEl.addEventListener("click", function() {
            sessionStorage.clear()
            window.close()
        })
    } else {
        failedLoginEl.innerText = "Incorrect username and/or password"
    }
})