import Book from "./book";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client"

function Main() {
    
    const bookjson=[{
        image:"https://tse2.mm.bing.net/th/id/OIP.UST8dlXzwyinbyzrjWktUgHaKM?pid=Api&P=0&h=180",
        title:"physics",
        price:"₹489"
    },
    {
        image:"https://tse1.mm.bing.net/th/id/OIP.FV3j8aQhkjDEa_3KgfVwmAHaJz?pid=Api&P=0&h=180",
        title:"chemistry",
        price:"₹769"
    },
    {
        image:"https://sp.yimg.com/ib/th?id=OPAC.BtGVvPV6Pw3cEQ474C474&o=5&pid=21.1&w=174&h=174",
        title:"math",
        price:"₹839"
    }

]

    return (
        <div className="bookstore">
           {bookjson.map((book, index) => (
        <Book key={index} image={book.image} title={book.title} price={book.price} />
      ))}
        </div>


    )
}

const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)

root.render(<Main />);