import React from "react";
import {Link} from 'react-router-dom';

// function JewelryDisplay({users}) {
//   return (
//     <div className="row g-4 my-3">
//       {users.map(({ id, name, username, phone, email }) => (
//         <div className="col-4" key={id}>
//           <div className="card">
//             <div
//               className="card-img-top movie_poster overflow-hidden"
//               style={{
//                 objectFit: "cover",
//               }}
//             >
//               <img
//                 src={`https://picsum.photos/350/200?random=${Math.floor(
//                   Math.random() * 31
//                 )}`}
//                 className="img-fluid"
//                 alt="Card image cap"
//               />
//             </div>
//             <div className="card-body">
//               <h5 className="card-title">{name}</h5>
//               <p className="card-text text-italic">{username}</p>
//               <p className="card-text text-italic">{phone}</p>
//               <p className="card-text text-italic">{email}</p>
//               <Link to={`/testimonials/${id}/detail`} className="card-link btn btn-primary" >Read More</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
export default JewelryDisplay