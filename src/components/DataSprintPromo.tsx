import { ArrowRight, CalendarDays, Clock, MapPin, Trophy } from "lucide-react";
import { dataSprint, aTrecutZiua } from "../data/dataSprint";

/*
 * Anunțul DataSprint din hero-ul paginii principale.
 * Fundal plin #3A0CA3 (brand), fără gradient: textul alb are ~11:1, iar cyan-ul
 * #4CC9F0 folosit pentru accente are ~6.5:1 pe el. Aceleași valori în light și dark,
 * pentru că fundalul cardului nu depinde de temă.
 */
export function DataSprintPromo() {
  if (aTrecutZiua(dataSprint.dataEnd)) return null;
  const inscrieriDeschise = !aTrecutZiua(dataSprint.termenLimita);

  return (
    <aside
      aria-labelledby="datasprint-titlu"
      className="w-full max-w-xl mx-auto lg:mx-0 text-left rounded-xl bg-[#3A0CA3] text-white p-5 sm:p-6 shadow-sm ring-1 ring-[#4CC9F0]/30"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4CC9F0] text-[#3A0CA3] px-3 py-1 font-bold uppercase tracking-wider text-xs">
          <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
          Datathon
        </span>
        <span className="inline-flex items-center gap-1.5 text-white/90">
          <CalendarDays className="w-4 h-4" aria-hidden="true" />
          {dataSprint.dataText}
        </span>
        <span className="inline-flex items-center gap-1.5 text-white/90">
          <MapPin className="w-4 h-4" aria-hidden="true" />
          {dataSprint.loc}
        </span>
      </div>

      <h2 id="datasprint-titlu" className="text-2xl sm:text-3xl font-bold leading-tight mb-2 text-white">
        {dataSprint.titlu}
      </h2>
      <p className="text-base text-white/90 leading-relaxed mb-4">
        {dataSprint.slogan}
      </p>

      {/* Pe telefon termenul stă deasupra butoanelor; de la sm încolo intră pe același
          rând cu ele, ca anunțul să încapă deasupra fold-ului pe laptopuri de 768px. */}
      <div className="flex flex-wrap items-center gap-3">
        {inscrieriDeschise && (
          <p className="order-first sm:order-last basis-full sm:basis-auto flex items-center gap-2 text-sm font-semibold text-[#4CC9F0]">
            <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="sm:hidden">Aplică până pe {dataSprint.termenLimitaText}</span>
            {/* lângă butoane: variantă scurtă, ca să încapă pe același rând */}
            <span className="hidden sm:inline">Până pe {dataSprint.termenLimitaScurt}</span>
          </p>
        )}
        {inscrieriDeschise && (
          <a
            href={dataSprint.linkAplicare}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-[#3A0CA3] px-5 py-2.5 font-semibold hover:bg-[#4CC9F0] transition-colors focus-visible:outline-white"
          >
            Aplică acum
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">(se deschide într-o filă nouă)</span>
          </a>
        )}
        <a
          href="#/activitati-viitoare"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 text-white px-5 py-2.5 font-semibold hover:bg-white/10 hover:border-white transition-colors focus-visible:outline-white"
        >
          Detalii
        </a>
      </div>
    </aside>
  );
}
