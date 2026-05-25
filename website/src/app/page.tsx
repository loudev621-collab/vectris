export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          VECTRIS
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          A hybrid puzzle game where falling-block placement
          meets arrow extraction.
        </p>
        <p className="text-sm text-slate-400 mb-12">
          Coming soon to iOS and Android
        </p>
        <div className="flex gap-4 justify-center">
          <div className="px-6 py-3 bg-slate-700 rounded-lg text-slate-200">
            iOS App Store
            <div className="text-xs text-slate-400 mt-1">In Development</div>
          </div>
          <div className="px-6 py-3 bg-slate-700 rounded-lg text-slate-200">
            Google Play
            <div className="text-xs text-slate-400 mt-1">In Development</div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-8 text-xs text-slate-500">
        © 2026 JMT Digital Solutions • Vectris
      </footer>
    </main>
  );
}
