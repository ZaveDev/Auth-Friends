import React, {useState} from 'react';
import { axiosAuth } from '../utils/axiosAuth'

const initState = {
  name:"",
  age:"",
  email:"",
}

const Friends = () => {
  const [friends, setFriends] = useState([])
  const [formValue, setFormValue] = useState(initState)

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }

  const fetchFriends = (e) => {
    e.preventDefault();
    axiosAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data)
      })
      .catch((err) => console.log(err));
  };
  const postNewFriend = (e) => {
    e.preventDefault()
    const newFriend = {
      name: formValue.name,
      age: formValue.age,
      email: formValue.email
    }
    axiosAuth()
      .post("/api/friends", newFriend)
      .then(res => {
        console.log(res);
        fetchFriends(e)
      })
      .catch(err => {
        console.log(err);
      })
  } 

  return(
    <>
    <form onSubmit={postNewFriend}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formValue.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        value={formValue.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={formValue.email}
        onChange={handleChange}
      />
      <button>Friend+</button>
    </form>
      <button onClick={fetchFriends}>Click me for friends</button>
      {
        friends.map(f => {
          return (
            <div>
              <h2>{f.name}</h2>
              <p>Age: {f.age}</p>
              <p>Email: {f.email}</p>
            </div>
          )
        })
      }

    </>
  )
}

export default Friends