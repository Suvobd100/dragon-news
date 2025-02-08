import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { err, setErr } = useState;
  const { createNewUser, setUser, handelUpdateUserProfile } =
    useContext(AuthContext);
  // user navigate some link by this
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // console.log({ name, email, photo, password });
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
        // current user update Profile name,photo
        handelUpdateUserProfile({ displayName: name, photoURL: photo });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setErr(error.message);
      })

      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage);
        //  console.log('ERROR Firebase:-',errorCode,errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className="form-control mt-4">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text font-bold text-xs">
                  Accept Term & Condition
                </span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6 ">
            <button className="btn btn-neutral rounded-xs w-full p-6">
              Register
            </button>
          </div>
          <p className="text-center">
            Allready Have An Account?{" "}
            <Link to={"/auth/login"} className="text-red-500">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
