import { Github, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-sky-50 via-blue-100 to-white overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-sky-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-2xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-xl shadow-md">
          NX
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Create Nexter
        </h1>

        <p className="text-slate-600 text-lg md:text-xl mb-8">
          Kickstart your next project with <strong>Next.js 15</strong> and <strong>Tailwind CSS 3.3.2</strong>. No config, just code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition"
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
