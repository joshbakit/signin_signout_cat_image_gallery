"use client"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import Gallery from "./Gallery";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-xl">Welcome to the galery of cute cats, <span className="uppercase font-bold">{session?.user?.name}</span> </h1>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[10] bg-slate-50 p-2 shadow">
              <li>
                <p>Name: <span className="font-bold">{session?.user?.name}</span></p>
              </li>
              <li>
                <p>Email: <span className="font-bold">{session?.user?.email}</span></p>
              </li>
              <li>
                <button onClick={() => signOut()} className="btn bg-red-800 text-white shaodw-sm">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>



      </div>
      <Gallery />
    </div>
  )

}