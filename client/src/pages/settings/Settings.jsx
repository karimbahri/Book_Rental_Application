// import React from "react";
// import { useNavigate } from "react-router-dom";
// import server from "../../apis/server";
// import "./Settings.css";

// const Settings = () => {
//   const load = (btn) => {
//     btn.type = 'submit';
//     btn.click();
//   }

//   const navigate = useNavigate();
//   const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user);
//   console.log(user);
//   const onFormSubmit = () => {
//     let old_password = document.getElementById('old_password');
//     let new_password = document.getElementById('new_password');
//     let confirm_password = document.getElementById('confirm_password');
//     let phoneNumber = document.getElementById('phoneNumber');
//     let address = document.getElementById('address');
//     let btn = document.getElementById('updateBtn');

//     if (old_password.value || new_password.value || confirm_password.value) {
//       old_password.required = true;
//       new_password.required = true;
//       confirm_password.required = true;
//       btn.type = 'submit';

//       if (new_password.value !== confirm_password.value)
//       {
//         confirm_password.setCustomValidity("Passwords Don't Match");
//         btn.type = 'submit';
//       }
//       else
//         confirm_password.setCustomValidity('');
        
//       if (old_password.value === new_password.value)
//       {
//         new_password.setCustomValidity("Please make sure to put a new password");
//         btn.type = 'submit';
//       }
//       else
//         new_password.setCustomValidity('');

//       // if (old_password.value !== new_password.value && new_password.value && new_password.value === confirm_password.value)
//       //   navigate('/books');
//     }
//     else if (!old_password.value && !new_password.value && !confirm_password.value)
//     {
//       new_password.required = false;
//       old_password.required = false;
//       confirm_password.required = false;
//       old_password.setCustomValidity("");
//       new_password.setCustomValidity("");
//       confirm_password.setCustomValidity("");
//       btn.type = 'submit';
//     }

//     /* ------------------------sending request------------------------ */
//     const updateObj = {};
    
//     if (phoneNumber.value !== user.phoneNumber)
//       updateObj.phoneNumber = phoneNumber.value;
//     if (address.value !== user.address)
//       updateObj.address = address.value;

//     if (old_password.value && new_password.value && confirm_password.value) {
//       btn.type = 'button';
//         const loginObj = {userName: user.userName, password: old_password.value};
//         server.post('/api/signin', loginObj)
//         .then(() => {
//           updateObj.password = new_password.value;
//           console.log("connected succefully");
//           old_password.setCustomValidity("");
//           btn.type = 'submit';
//           navigate('/books');
//         })
//         .catch(() => {
//           console.log('error');
//           btn.type = 'button';
//           old_password.setCustomValidity("Please enter a valid password");
//           old_password.reportValidity();
//         });
//     }
//     if(Object.keys(updateObj).length) {
//       server.put(`/api/users/${user._id}`, updateObj)
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => console.log(err.message));
//     };
//     btn.click();
//   }
//   return (
//     <div className="reg-body">
//       <div className="update-container">
//         <div className="title">Update Your Settings</div>
//         <div className="content">
//           <form action="/books" className="reg-form">
//             <div className="user-details">
//               <div className="input-box">
//                 <span className="details">Full Name</span>
//                 <input type="text" defaultValue={user.fullName} disabled />
//               </div>
//               <div className="input-box">
//                 <span className="details">Username</span>
//                 <input type="text" defaultValue={user.userName} disabled />
//               </div>
//               <div className="input-box">
//                 <span className="details">Email</span>
//                 <input type="text" defaultValue={user.email} disabled />
//               </div>
//               <div className="input-box">
//                 <span className="details">Phone Number</span>
//                 <input type="text" id="phoneNumber" defaultValue={user.phoneNumber} />
//               </div>
//               <div className="input-box pwd">
//                 <span className="details">Old Password</span>
//                 <input type="password" id="old_password" placeholder="Enter your password" />
//               </div>
//               <div className="input-box pwd">
//                 <span className="details">New Password</span>
//                 <input type="password" id="new_password" placeholder="Enter your password" />
//               </div>
//               <div className="input-box pwd">
//                 <span className="details">confirm Password</span>
//                 <input type="password" id="confirm_password" placeholder="Enter your password" />
//               </div>
//               <div className="input-box">
//                 <span className="details">Address</span>
//                 <input type="text" id="address" defaultValue={user.address} />
//               </div>
//             </div>
//             <div className="button">
//                 <input type="button" id="updateBtn" value="Update" onClick={onFormSubmit} />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React from "react";
import { useNavigate } from "react-router-dom";
import server from "../../apis/server";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user);
  console.log(user);
  const onFormSubmit = async () => {
    let old_password = document.getElementById('old_password');
    let new_password = document.getElementById('new_password');
    let confirm_password = document.getElementById('confirm_password');
    let phoneNumber = document.getElementById('phoneNumber');
    let address = document.getElementById('address');
    let btn = document.getElementById('updateBtn');

    if (old_password.value || new_password.value || confirm_password.value) {
      old_password.required = true;
      new_password.required = true;
      confirm_password.required = true;

      if (new_password.value !== confirm_password.value)
      {
        confirm_password.setCustomValidity("Passwords Don't Match");
      }
      else
        confirm_password.setCustomValidity('');
        
      if (old_password.value === new_password.value)
      {
        new_password.setCustomValidity("Please make sure to put a new password");
      }
      else
        new_password.setCustomValidity('');

      // if (old_password.value !== new_password.value && new_password.value && new_password.value === confirm_password.value)
      //   navigate('/books');
    }
    else if (!old_password.value && !new_password.value && !confirm_password.value)
    {
      new_password.required = false;
      old_password.required = false;
      confirm_password.required = false;
      old_password.setCustomValidity("");
      new_password.setCustomValidity("");
      confirm_password.setCustomValidity("");
    }

    /* ------------------------sending request------------------------ */
    const updateObj = {};
    
    if (phoneNumber.value !== user.phoneNumber)
    {
      updateObj.phoneNumber = phoneNumber.value;
      user.phoneNumber = updateObj.phoneNumber;
    }
    if (address.value !== user.address)
    {
      updateObj.address = address.value;
      user.address = updateObj.address;
    }

    if (old_password.value && new_password.value && confirm_password.value) {
        btn.type = 'button';
        const loginObj = {userName: user.userName, password: old_password.value};
        try {
          await server.post('/api/signin', loginObj);
          updateObj.password = new_password.value;
          console.log("connected succefully");
          old_password.setCustomValidity("");
          old_password.reportValidity();
          btn.type = 'submit';
          navigate('/books');
        } catch (err) {
          console.log('error');
          old_password.setCustomValidity("Please enter a valid password");
          old_password.reportValidity();
        }
    }
    if(Object.keys(updateObj).length) {
      try {        
        const persist = JSON.parse(localStorage.getItem('persist:root'));
        persist.user = JSON.stringify(user);
        localStorage.setItem('persist:root', JSON.stringify(persist));
        await server.put(`/api/users/${user._id}`, updateObj);
      } catch (err) {
        console.log(err.message)
      }
    };
  }
  return (
    <div className="reg-body">
      <div className="update-container">
        <div className="title">Update Your Settings</div>
        <div className="content">
          <form action="/books" className="reg-form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" defaultValue={user.fullName} disabled />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" defaultValue={user.userName} disabled />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" defaultValue={user.email} disabled />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" id="phoneNumber" defaultValue={user.phoneNumber} />
              </div>
              <div className="input-box pwd">
                <span className="details">Old Password</span>
                <input type="password" id="old_password" placeholder="Enter your password" />
              </div>
              <div className="input-box pwd">
                <span className="details">New Password</span>
                <input type="password" id="new_password" placeholder="Enter your password" />
              </div>
              <div className="input-box pwd">
                <span className="details">confirm Password</span>
                <input type="password" id="confirm_password" placeholder="Enter your password" />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" id="address" defaultValue={user.address} />
              </div>
            </div>
            <div className="button">
                <input type="submit" id="updateBtn" value="Update" onClick={onFormSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
