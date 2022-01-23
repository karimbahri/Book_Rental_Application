import React, {useEffect, useState} from "react";
import server from "../../apis/server";

const MyBooksList = () => {
    const [data, setData] = useState([]);
    const now = new Date();
    useEffect(() => {
          const id = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)._id;
          server.get(`api/myBooks/${id}`)
          .then(myBooks => {
            myBooks = myBooks.data.books.data;
            setData(myBooks);
          })
          // console.log(myBooks);
          // .then(data => {
          //     console.log(data);
          // })
          .catch(err => {
              console.log(err);
          })
          console.log(data);

    
        }, [])
    return (
        <table className="my-books-table">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Price</th>
        <th>check-out date</th>
        <th>check-in date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {data.map((myBook, i) => {
          const checkinDate = new Date(myBook.checkin_date);
          const isDeliverd = now.getTime() >= checkinDate.getTime();
          const btnClass = "status " + (isDeliverd ? "not-delivered" : "borrowed");
            return (
              <tr key={i}>
                <td><img src = {myBook.book_data.cover}/></td>
                <td>{myBook.book_data.title}</td>
                <td className="amount">{myBook.book_data.price} dt</td>
                <td>{myBook.checkout_date}</td>
                <td>{myBook.checkin_date}</td>
                <td className={btnClass}><p>{isDeliverd ? "Unreturned" : "Borrowed"}</p></td>
              </tr>
            )
        })}
    </tbody>
  </table>
    )
}

export default MyBooksList;
