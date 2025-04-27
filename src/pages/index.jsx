import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Testing Example App</h1>
      <p>
        <Link href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}