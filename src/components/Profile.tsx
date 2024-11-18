import { FunctionComponent, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getUserById } from "../services/userService";
import { User } from "../interfaces/User";

interface ProfileProps {
    
}


const Profile: FunctionComponent<ProfileProps> = () => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
        isAdmin: false,
    });
    useEffect(() => {
        getUserById().then((res) => setUser(res.data)).catch((err) => console.error(err)
        )
    }, [])
    return (<><Navbar /><div className="container-fluid w-50 mt-5 profile">
        <h1 className="display-1">Profile</h1>
        <img className="profilePic" src="https://a0.anyrgb.com/pngimg/1140/162/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo.png" />
        <p className="display-7">Name: {user.name}</p>
        <p className="display-7">Email: {user.email}</p>
        {user.isAdmin && <p>You are an admin</p>}
    </div></>);
}

export default Profile;