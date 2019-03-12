// Davydenko Oleksandr FEA-12 JS-HW4
//---------------------------------------------------------------------
//обязательная часть (3 балла)-----------------------------------------
//---------------------------------------------------------------------
var womenSumka = {
  pomada: "pink",
  teniy: "Dolce Gabanna",
  keyz: "Car miniCyper",
  phone: "GirlFone",
  powerBank: "chiotomAh",
  mirror: "Is Mirror",
  flyaga: "IrishSamogon",
  removIng: function (pro) {
    delete womenSumka [pro]
  },
  movIng: function (pro, brand) {
    womenSumka [pro] = brand;
  }
}

womenSumka.removIng( "flyaga" );
womenSumka.movIng( "sigarets", "parlament blue" );
console.log( womenSumka);

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------


//-------------------------------------------------------------------------
// Дополнительно (4 баллов)------------------------------------------------
//-------------------------------------------------------------------------
var LibraryBook = function(_title = "Без названия", _year = "нет данных", _author = "нет данных") {
  var title = _title
  var year = _year
  var author = _author
  var readerName = null
  var readerData = null
  function giveTheBook(client, data = new Date()) {
    readerName = client
    readerData = data
  }
  this.getBookInfo = function() {
    var text = readerName ? "выдана на руки" : "есть в наличии"
    console.info(`${author}, ${title} (${year}): ${text}`)
  }
  this.getTheBook = function(client, data) {
    if (readerName) {
      this.getBookInfo()
      return null
    } else {
      giveTheBook(client, data)
      return {
        title: title,
        year: year,
        author: author
      }
    }
  }
  this.returnBook = function() {
    readerName = null
    readerData = null
  }
}

var books = []
books[0] = new LibraryBook("Power Electronicks", "2015", "Kit Suker")
books[1] = new LibraryBook("Electronics Desigh", "2017", "Mack Raymond")
books[3] = new LibraryBook("C", "2010", "Тицце Шенк")
console.log()
console.log(books)

books[1].getBookInfo()
books[1].getTheBook("Коля Наливайко", new Date(2019, 02, 20))
books[1].getBookInfo()
books[1].returnBook()
books[1].getBookInfo()

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// Дополнительно (5 баллов)--------------------------------------------------
//---------------------------------------------------------------------------
function KonSt () {
	KonSt.prototype.addProperty = function(name, val){
		this[name] = val
	}
}

var result = new KonSt()
console.log ()
result.addProperty ("luks", 18)
console.log (result)
result.addProperty ("ivan",34)
console.log (result)
result.addProperty ("1 Dollar", 26.8)
console.log (result)