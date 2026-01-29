"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Box, Keyboard, Film, Layers, ArrowRight, Cpu, Package } from 'lucide-react';

function FeatureCard({ href, title, description, icon: Icon, bgClass, iconClass }: any) {
  return (
    <Link href={href} className="group relative flex flex-col justify-center h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:border-blue-900/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`shrink-0 inline-flex p-2 rounded-lg ${bgClass} group-hover:scale-110 transition-transform`}>
          <Icon className={`w-5 h-5 ${iconClass}`} />
        </div>
        
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
            {title}
          </h3>
          {description && (
            <p className="text-slate-400 leading-relaxed text-sm">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <ArrowRight className="w-5 h-5 text-blue-500" />
      </div>
    </Link>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative inline-block h-[33vh] w-auto mb-8">
            <Image
              src="/intro.png"
              alt="Intro Placeholder"
              width={1200}
              height={675}
              className={`h-full w-auto transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}
              priority
            />
            <Image
              src="/intro.gif"
              alt="Intro"
              width={1200}
              height={675}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              unoptimized
              priority
              onLoad={() => setLoaded(true)}
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Flutter Component Library <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Documentation
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The official resource for building consistent apps. Explore comprehensive guides for utility, input, media, and high-level components.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/docs/core/results"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
             <Link 
              href="/guidelines"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-slate-300 border border-zinc-700 hover:border-zinc-600 rounded-xl font-semibold transition-all flex items-center justify-center"
            >
              Basic Guidelines
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            href="/docs/core/results"
            title="Core Library"
            description="Foundational utilities, result patterns, and robust HTTP networking."
            icon={Cpu}
            bgClass="bg-blue-900/30"
            iconClass="text-blue-400"
          />
          <FeatureCard
            href="/docs/utility/cache-manager"
            title="Utility"
            description="Essential background tools for file storage, caching, and payments."
            icon={Box}
            bgClass="bg-emerald-900/30"
            iconClass="text-emerald-400"
          />
          <FeatureCard
            href="/docs/wrappers/api-integration"
            title="Packed Wrappers"
            description="Standardized integration layers for API, Data, and State management."
            icon={Package}
            bgClass="bg-indigo-900/30"
            iconClass="text-indigo-400"
          />
          <FeatureCard
            href="/docs/input/text-inputs"
            title="Inputs"
            description="Robust text fields, selection controls, pickers, and scanners."
            icon={Keyboard}
            bgClass="bg-purple-900/30"
            iconClass="text-purple-400"
          />
          <FeatureCard
            href="/docs/media/audio"
            title="Media"
            description="Optimized viewers and players for images, video, and audio content."
            icon={Film}
            bgClass="bg-pink-900/30"
            iconClass="text-pink-400"
          />
          <FeatureCard
            href="/docs/high-level/cms-pages"
            title="High-Level"
            description="Full screen compositions, CMS rendering, and complex filter logic."
            icon={Layers}
            bgClass="bg-orange-900/30"
            iconClass="text-orange-400"
          />
        </div>
      </div>
    </main>
  );
}
