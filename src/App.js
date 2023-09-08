import { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';
import Loading from './components/Loading';

export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + 'users.json')
      .then(res => res.json())
      .then((json) => {setUsers(json);setLoading(false);});
  }, []);

  const showDetails = (id) => setUserId(id);

  return (
    <>
    <div className="app">
    {loading && <Loading />}
      <List list={users} showDetails={showDetails} />
      {userId && <Details userId={userId} />}
    </div>
    </>
  );
}