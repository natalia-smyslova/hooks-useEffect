import { useEffect, useState } from "react";

export default function Details({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setUser(null);
        await fetch(process.env.REACT_APP_URL + `${userId}.json`)
          .then(res => res.json())
          .then(json => setUser(json));
    }

    fetchData();
  }, [userId]);

  return (
    <div>
      {user && <section className="profile">
        <img className="avatar" src={user.avatar} alt="" />
        <h1 className="profile__item name">{user.name}</h1>
        <p className="profile__item city">City: {user.details.city}</p>
        <p className="profile__item company">Company: {user.details.company}</p>
        <p className="profile__item position">Position: {user.details.position}</p>
      </section>}
    </div>
  );
}