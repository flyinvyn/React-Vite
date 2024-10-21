import { useLogin } from "../hooks/userLogin"

const ProfilePage = () => {
    const username = useLogin()
  return (
    <div>
        <h1>ProfilePage</h1>
        Username: {username}
    </div>
  )
}

export default ProfilePage