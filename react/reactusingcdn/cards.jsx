// function Book(props){
//     const image=React.createElement("img",
//        {
//            src: props.image,
//            width: 150,
//            height: 150,
//            alt: "Book Image"
//        }
//    ,h3,h4,bt);
//     const h4=React.createElement("h4",null,Price: ${props.price});
//     const child=React.createElement("div",{className: "card"},image,h4);
//     return (child);
//    }
//    const books=[{
//        image: "https://c8.alamy.com/comp/HMT95K/hindi-book-with-flag-of-india-and-cd-disk-3d-rendering-isolated-on-HMT95K.jpg",
//        price: 890,
//        bt: "Add to Cart"
//    },{
//        image:"https://media.istockphoto.com/id/1000158336/photo/chemistry-education-concept-open-books-with-text-chemistry-and-formulas-and-textbooks-flasks.jpg?s=612x612&w=0&k=20&c=X7Gg8LWV6_WXiox2Wc9P2NpxH1ypJEEP6XXeYJTH4IQ=",
//        price: 789,
//        bt: "Add to Cart"
//    },]




        // const image = React.createElement("img",{
        //     src:"https://c8.alamy.com/comp/HMT95K/hindi-book-with-flag-of-india-and-cd-disk-3d-rendering-isolated-on-HMT95K.jpg",
        //     width:200,
        //     heigth:200,
        //     alt:"Book Image",

    
        // },null);

        // const h3 = React.createElement("h3",{},"title:Physics");
        // const h4 = React.createElement("h3",{},"Price: ₹589");
        // const btn = React.createElement("button",null,"Add To Cart");
        // const child = React.createElement("div", {className:"card"},image,h3,h4,btn);
        // return child;


        const Book =    <div className="card">

        <img src="" width="200"  height="200" alt="img"></img>
        <h3>Title: Physics</h3>
        <h4>Price:₹589</h4>

        
    </div>




const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(Book);