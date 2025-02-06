import { FaGithub, FaGoogle } from "react-icons/fa"

const SocialLogin = () => {
  return (
    <div>
        <h2 className="font-semibold mb-3">Login With</h2>
        <div className="*:w-full space-y-2">
            <button className="btn btn-outline btn-primary"><FaGoogle/>Login with Google</button>
            <button className="btn btn-outline "><FaGithub/>Login with Github</button>
        </div>
    </div>
  )
}

export default SocialLogin