'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/fade-in'
import { MapPin, Calendar, BedDouble, Sparkles } from 'lucide-react'

export function ShakiraVipSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shakira-concert-stage.png"
          alt="Sold-out stadium concert crowd at night with dramatic gold lighting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c9a55a]/40 bg-[#c9a55a]/10 text-[#c9a55a] text-xs font-medium uppercase tracking-[0.3em]">
              <Sparkles size={14} />
              Featured Experience
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={100}>
          <h2 className="text-center font-serif font-bold text-white leading-[0.95] tracking-tight mb-3">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">SHAKIRA</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex items-center justify-center gap-2 mb-10">
            <MapPin size={20} className="text-[#c9a55a]" />
            <p className="text-xl sm:text-2xl font-semibold text-white/90 uppercase tracking-[0.2em]">
              Madrid <span aria-hidden="true">🇪🇸</span>
            </p>
          </div>
        </FadeIn>

        {/* Primary sales message */}
        <FadeIn delay={200}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#c9a55a] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              DM Promotions Has VIP Tickets Available
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 text-balance">
              VIP PACKAGES AVAILABLE
            </h3>
          </div>
        </FadeIn>

        {/* Price + Accommodation highlight cards */}
        <FadeIn delay={250}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col items-center justify-center text-center gap-2 p-8 rounded bg-white/5 backdrop-blur-sm border border-[#c9a55a]/30">
              <p className="text-white/60 uppercase tracking-[0.2em] text-xs font-medium">
                Starting From
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-[#c9a55a] leading-none">
                &euro;1,000
              </p>
              <p className="text-white/60 text-sm">per person</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2 p-8 rounded bg-white/5 backdrop-blur-sm border border-[#c9a55a]/30">
              <BedDouble className="text-[#c9a55a]" size={28} />
              <p className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Accommodation
              </p>
              <p className="text-[#c9a55a] uppercase tracking-[0.15em] text-sm font-semibold">
                Included
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Dates */}
        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-2 mb-12 text-white/60">
            <Calendar size={16} className="text-[#c9a55a]" />
            <p className="text-sm uppercase tracking-[0.2em]">
              18 September &ndash; 11 October 2026
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={350}>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-[#c9a55a] text-black font-bold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(201,165,90,0.35)]"
            >
              Enquire Now
            </Link>
            <p className="text-white/50 text-sm">
              DM for tickets &amp; information
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
