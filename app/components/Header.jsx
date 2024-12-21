import Link from 'next/link';

export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <nav className="py-4 px-14 border-b flex items-center justify-between">
      <img className="h-12" src="/logo.png" alt="BD Gift Box" />
      <div className='flex gap-4 items-center '>
        {menuList?.map((item, index) => (
          <Link key={index} href={item.link}>
            <button>{item.name}</button>
          </Link>
        ))}
      </div>
      <Link href={'/login'}>
      <button className='bg-blue-600 px-5 py-1 font-bold rounded-full text-white'> Login</button>
     </Link>
    </nav>
  );
}
