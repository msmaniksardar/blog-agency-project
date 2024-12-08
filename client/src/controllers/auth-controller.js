import {toast} from "sonner";


export const logOut = () => {
        localStorage.clear();
        window.location.href="/";
        toast.success("Logged out");
}