import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          background: grey;
          color: #ffffff;
          list-style: none;
          display: flex;
        }
        ul li {
          font-size: 18px;
          margin-right: 20px;
        }
        ul li a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
