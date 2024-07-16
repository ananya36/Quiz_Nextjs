import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="container">
           <h1>
            QUIZ APP!!
           </h1>
           <Link href='/quiz'>
              <button>
                Start Quiz
              </button>
           </Link>

      </div>

    </main>
  );
}
