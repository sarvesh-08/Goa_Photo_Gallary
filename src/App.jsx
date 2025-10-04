import React from 'react'
import Gallery from './components/Gallery'

export default function App(){
  return (
    <div className="app-shell min-h-screen flex flex-col">
      <header className="p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Goa Nature Gallery</h1>
          <p className="text-slate-400 mt-1">
            Beautiful Goa Clicks!
          </p>
        </div>
        
      </header>

      <main className="px-6 pb-12 flex-1 space-y-16">
        <Gallery />
        
      </main>

      <footer className="px-6 pb-12 flex-1 space-y-16">
        Contributor/Owner: Sarvesh
      </footer>
    </div>
  )
}
