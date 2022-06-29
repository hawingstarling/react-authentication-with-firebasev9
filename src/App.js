import { signup, useAuth, logOut, logIn } from './firebase'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth()

  async function handleSignUp() {
    setLoading(true)
    try {
      await signup(email, password)
    } catch {
      console.log('Error.')
    }
    setLoading(false)
  }

  async function handleLogIn() {
    setLoading(true)
    try {
      await logIn(email, password)
    } catch {
      console.log('Error.')
    }
    setLoading(!loading)
  }

  async function handleLogOut() {
    setLoading(true)
    try {
      await logOut()
    } catch {
      console.log('Error.')
    }
    setLoading(false)
  }

  return (
    <div className="App">
      <p>Currently user logged in as: { currentUser?.email }</p>
      <div className="fields">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <br />
        <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      </div>
      <button disabled={ loading || currentUser} onClick={handleSignUp}>Sign up</button>
      <button disabled={ loading || currentUser} onClick={handleLogIn}>Log in</button>
      <button disabled={ loading || !currentUser} onClick={handleLogOut}>Log out</button>
    </div>
  );
}

export default App;
