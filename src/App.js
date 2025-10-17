import AccountForm from "./components/AccountForm";
import AccountList from "./components/AccountList";

function App() {
  return (
    <div className="App">
      <h1>Banking App</h1>
      <AccountForm onAccountCreated={() => {}} />
      <AccountList />
    </div>
  );
}

export default App;
