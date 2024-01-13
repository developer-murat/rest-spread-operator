//  Rest / Spread Operator ( toparlama / yayma operatörü )
//  Rest operatöründen Object / Array destructuring içinde bahsetmiştik

// let kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

// kullanici.sehir = "Ankara"; // REACT İÇİN YANLIŞ

// kullanici = { ...kullanici, sehir: "Ankara" };  //  REACT İÇİN DOĞRU

// console.log(kullanici);


// Başlangıç state

INITIAL_STATE = {
    yukleniyor: false,
    hataMesaji: "",
    arabalar: ["Mercedes", "BMW", "Audi"],
};

// Reducer

//  dispatch({ type: "ARABA_EKLE", payload: "Tofas" })

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ARABA_EKLE":
            // return { ...state, arabalar: [...state.arabalar, action.payload] }
            return { ...state, arabalar: [...state.arabalar, "Tofas"] }
        default: return state;
    }
}

// state.arabalar //   ["Mercedes", "BMW", "Audi", "Tofas"]

state.arabalar.push("Tofas");

// ram hafızasında oluşacak olanlar

//0001 <- { yukleniyor, hataMesaji, arabalar }
//0002 <- { yukleniyor, hataMesaji, [ ...arabalar, "Tofas"] } <- state