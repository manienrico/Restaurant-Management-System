import './App.css';

import { SignInForm, SignUpForm } from "./components/components"

function App() {
  return (
    <div className="App">
      Restaurant management system
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default App;
