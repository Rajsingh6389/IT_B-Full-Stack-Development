// function Book(props){

// // }

// const image = React.createElement("img",{
//     src:"https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
//     width:"154",
//     height:"150",
//     alt: "book-image"
    
// },null);

// const h4 = React.createElement("h4",null,"Price: 325/-");

// const child = React.createElement("div",
//      {className:"card"},image,h4);

//      const parent= document.getElementById("root");

//      const root = ReactDOM.createRoot(parent);

//     root.render(child);



function Book(props){
    const image=React.createElement("img",
       {
           src: props.image,
           width: 150,
           height: 150,
           alt: "Book Image"
       },null
    );
    const title=React.createElement("h2",null,`title:${props.title}`)
    const h4=React.createElement("h4",null,`Price:₹${props.price}`);
    const button=React.createElement("button",null,"Add to cart")
    
    const child=React.createElement("div",{className: "card"},image,title,h4,button);
    return (child);
   }
   const books=[{
       image: "https://tse3.mm.bing.net/th/id/OIP.zadw8uLdzyfGQALi28ZXbwHaK7?pid=Api&P=0&h=180",
       title:"Physics",
       price: 890

   },{
       image:"https://tse4.mm.bing.net/th/id/OIP.d8kdYgDSUy6mO5UzwSlnQAHaJT?pid=Api&P=0&h=180",
       title:"Chemistry",
       price: 789
   },{
       image: "https://tse4.mm.bing.net/th/id/OIP.zemRqqjY1Jw6gtYnKWoqMQHaJw?pid=Api&P=0&h=180https://tse4.mm.bing.net/th/id/OIP.zemRqqjY1Jw6gtYnKWoqMQHaJw?pid=Api&P=0&h=180",
       title:"Math",
       price: 335
   }];
   const parent=document.getElementById("root");
   const root=ReactDOM.createRoot(parent);
   
  
   const bookElements = books.map(book =>
    React.createElement(Book, {
      image: book.image,
      title: book.title,
      price: book.price
    })
  );
  
  
  root.render(React.createElement('div', {className:"maindiv"}, bookElements));