import { useState } from "react";
import { createAccount } from "../services/accountService";

export default function AccountForm({ onAccountCreated }) {
  const [holderName, setHolderName] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = { holderName, balance: parseFloat(balance) };
    const res = await createAccount(account);
    onAccountCreated(res.data);
    setHolderName("");
    setBalance("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Account Holder Name"
        value={holderName}
        onChange={(e) => setHolderName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Initial Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        required
      />
      <button type="submit">Create Account</button>
    </form>
  );
}
