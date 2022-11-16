let Cookies = 0
let Money = 0
let AutoClickers = 0
let CookiesPerClick = 1
let CookieStores = 0
let AutoSell = false

function UpdateStats() {
    let CookiesText = document.getElementById("Cookies")
    let MoneyText = document.getElementById("Money")
    CookiesText.innerHTML = CookiesText.innerHTML.replace(CookiesText.textContent, Cookies + " Cookies")
    MoneyText.innerHTML = MoneyText.innerHTML.replace(MoneyText.textContent, Money + " Money")
}

UpdateStats()

function CollectCookie() {
    Cookies = Cookies + CookiesPerClick
    UpdateStats()
}

function SellCookie() {
    if (Cookies - 1 >= 0) {
        Money = Money + 1
        Cookies = Cookies - 1
        UpdateStats()
    }
}

function PurchaseAutoClicker() {
    if (Money >= 50) {
        Money = Money - 50
        AutoClickers = AutoClickers + 1
    }

    UpdateStats()
}

function PurchaseCPC() {
    if (Money >= 200) {
        Money = Money - 200
        CookiesPerClick = CookiesPerClick + 1
    }

    UpdateStats()
}

function PurchaseAutoSell() {
    if (Money >= 100) {
        if (AutoSell == false) {
            Money = Money - 100
            AutoSell = true
        }
    }
}

function PurchaseCookieStore() {
    if (Money >= 500) {
        Money = Money - 500
        CookieStores = CookieStores + 1
    }
}

var ForeverLoop = setInterval(function() {
    Cookies = Cookies + AutoClickers
    Cookies = Cookies + (CookieStores * 5)

    if (AutoSell == true) {
        if (Cookies - 1 >= 0) {
            Cookies = Cookies - 1
            Money = Money + 1
        }
    }

    UpdateStats()
}, 1000)