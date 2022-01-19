import "./MyBooks.css";
import thumb from './book.jpg';
import MyBooksList from "../../components/myBooksList/myBooksList";

const MyBooks = () => {
  return <div className="my-books-container">
  {/* <table className="my-books-table">
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
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb} /></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status unpaid"><p>Unpaid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
      <tr>
        <td><img src = {thumb}/></td>
        <td>A brief history of time</td>
        <td className="amount">150 dt</td>
        <td>Monday, January, 1st 2022</td>
        <td>Monday, January, 8th 2022</td>
        <td className="status paid"><p>Paid</p></td>
      </tr>
    </tbody>
  </table> */}
  <MyBooksList />
</div>;
}

export default MyBooks;
