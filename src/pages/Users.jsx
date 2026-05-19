import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, "users"));

      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">
        👥 Registered Users
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl"
          >
            <h2 className="font-bold">{user.name}</h2>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}