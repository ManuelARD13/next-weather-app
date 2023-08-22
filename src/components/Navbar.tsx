import Link from "next/link";

function Navbar(): JSX.Element {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">Home</Link>
      <Link href="/forecast">Forecast</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navbar;