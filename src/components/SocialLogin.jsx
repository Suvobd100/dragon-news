import { useContext } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { AuthContext } from "../provider/AuthProvider"

const SocialLogin = () => {
  const {handelGoogleLogin,handleGithubLogin,handelUpdateUserProfile,user}=useContext(AuthContext);
  // console.log(handelGoogleLogin);
  console.log('social page,git',user?.reloadUserInfo?.screenName,user?.reloadUserInfo?.photoUrl
  );
  
  return (
    <div>
        <h2 className="font-semibold mb-3">Login With</h2>
        <div className="*:w-full space-y-2">
            <button onClick={handelGoogleLogin} className="btn btn-outline btn-primary"><FaGoogle/>Login with Google</button>
            <button onClick={()=>{handleGithubLogin,handelUpdateUserProfile({ displayName: user?.reloadUserInfo?.screenName, photoURL: user?.reloadUserInfo?.photoUrl })}} 
            className="btn btn-outline "><FaGithub/>Login with Github</button>
            {/* <button onClick={()=>{handleGithubLogin}} 
            className="btn btn-outline "><FaGithub/>Login with Github</button> */}
        </div>
    </div>
  )
  
}

export default SocialLogin