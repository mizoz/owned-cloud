export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">
          Owned<span className="text-blue-400">Cloud</span>
        </h1>
        <p className="text-2xl text-slate-300 mb-8">
          Private Cloud Infrastructure for Calgary Businesses
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-full">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          <span className="text-blue-300 font-medium">IN DEVELOPMENT</span>
        </div>
        <p className="text-slate-400 mt-8">
          Stop paying monthly cloud fees forever. Own your infrastructure.
        </p>
      </div>
    </main>
  );
}