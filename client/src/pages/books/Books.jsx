import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookItem } from "../../components/bookItem/bookItem";
import { SearchBar } from "../../components/searchBar/searchBar";
import server from "../../apis/server";
import { updateBooks } from "../../redux/actions";
import "./Books.css";

// const _books = [
//   {
//     title: "The Subtle Art of Not Giving A F*ck",
//     author: "Mark Manson",
//     category: "Self-Help, Society,Sociology",
//     description:
//       'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.For decades, we’ve been told that positive thinking is the key to a happy, rich life. "F**k positivity," Mark Manson says.',
//     rate: "5",
//     cover:
//       "https://covers.zlibcdn2.com/covers299/books/6c/d7/01/6cd7019852b43e6e67f5b21d8a60b1db.jpg",
//   },
//   {
//     title: "Ugly Love: A Novel",
//     author: "Colleen Hoover",
//     category: "Fiction",
//     description:
//       "From Colleen Hoover, the #1 New York Times bestselling author of It Ends With Us, a heart-wrenching love story that proves attraction at first sight can be messy. When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight. They wouldn’t even go so far as to consider themselves friends.",
//     rate: "",
//     cover:
//       "https://covers.zlibcdn2.com/covers299/books/eb/a5/01/eba501594ab62859df0601e626eb7631.jpg",
//   },
//   {
//     title:
//       "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
//     author: "James Clear",
//     category: "Self-Help, Relationships & Lifestyle - Personal Growth",
//     description:
//       "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
//     rate: "",
//     cover:
//       "https://covers.zlibcdn2.com/covers299/books/96/f9/97/96f997237d1fffe83467f130c350f275.jpg",
//   },
//   {
//     title: "The Song of Achilles: A Novel",
//     author: "Madeline Miller",
//     category: "Society, Politics & Philosophy - European & American Philosophy",
//     description:
//       "Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the kingdom of Phthia to be raised in the shadow of King Peleus and his golden son, Achilles. “The best of all the Greeks”—strong, beautiful, and the child of a goddess—Achilles is everything the shamed Patroclus is not.",
//     rate: "",
//     cover:
//       "https://covers.zlibcdn2.com/covers299/books/f8/53/6f/f8536ff3ff53a16852a326fc5d4f94c8.jpg",
//   },
//   {
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     category: "History - World History",
//     rate: "",
//     description:
//       "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights to trust money, books and laws and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?",
//     cover:
//       "https://covers.zlibcdn2.com/covers299/books/9d/b8/0a/9db80aac6758446e18354478f0843049.png",
//   },
// ];

const Books = () => {
  const books = useSelector((state) => state.books);
  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser);
  const dispatch = useDispatch();

  const orderBook = (userId, bookId) => {
    server
      .post("/api/orderBook", {
        userId,
        bookId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  const fetchBooks = () => {
    server
      .get("/api/books")
      .then((res) => {
        console.log(res.data.data);
        dispatch(updateBooks(res.data.data));
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    console.log("fetch books");
    fetchBooks();
    console.log(books);
    const order_btns = document.querySelectorAll(".order");
    console.log(order_btns);
    order_btns.forEach((btn) => {
      const bookId = btn.getAttribute("id");
      btn.addEventListener("click", () => orderBook(currentUser._id, bookId));
    });
  }, []);

  const renderBooks = (books) => {
    console.log(books);
    return books.map((book, idx) => {
      return <BookItem {...book} key={idx} />;
    });
  };

  return (
    <>
      <div className="container">
        <SearchBar />
      </div>

      {/* <div className="_cards">{renderBooks(_books)}</div> */}
      <div className="_cards">{renderBooks(books)}</div>
    </>
  );
};

export default Books;
