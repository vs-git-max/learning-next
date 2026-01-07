import Link from "next/link";

//only available for the dashboard files and folder
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex h-screen">
        <aside className="w-64 p-4 border-r border-white ">
          <h2 className="">Dashboard</h2>
          <nav className="">
            <ul className="">
              <li className="">
                <Link href={"/dashboard"}>Dashboard Home</Link>
              </li>
              <li className="">
                <Link href={"/dashboard/analytics"}>Analytics</Link>
              </li>
              <li className="">
                <Link href={"/"}> Home</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1 p-5">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
