import { useEffect, useState } from "react";
import { getAllAccounts, deleteAccount } from "../services/accountService";

export default function AccountList() {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const res = await getAllAccounts();
    setAccounts(res.data);
  };

  const handleDelete = async (accountNumber) => {
    await deleteAccount(accountNumber);
    fetchAccounts();
  };

  useEffect(() => { fetchAccounts(); }, []);

  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        {accounts.map(acc => (
          <li key={acc.accountNumber}>
            {acc.holderName} - {acc.balance} 
            <button onClick={() => handleDelete(acc.accountNumber)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
