import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Sidan hittades inte</h1>
      <p>Sidan du letar efter finns inte eller har flyttats.</p>
      <Link href="/" className="btn-outline">
        Till startsidan
      </Link>
    </div>
  );
}
