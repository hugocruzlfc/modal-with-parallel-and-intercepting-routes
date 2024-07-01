import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 px-8 py-4 mb-4 container mx-auto">
      <Link href="/">
        <h1 className="text-3xl text-center">🚀 The Star Wars Feed  ★</h1>
      </Link>
    </header>
  );
}
