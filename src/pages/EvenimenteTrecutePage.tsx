import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SimpleHeader } from "../components/SimpleHeader";
import { Footer } from "../components/Footer";
import {
  Calendar,
  ArrowRight,
  Award,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";

export default function EvenimenteTrecutePage() {
  const [, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const evenimente = [
    {
      id: 1,
      titlu: "Data & Lunch Seria 2: Unde ideile devin cunoaștere",
      data: "15 Noiembrie 2025",
      link: "https://asds-csie.ase.ro/datalunch-seminar-stiintific-saptamanal-noiembrie-2025/",
      categorie: "Seminar",
      icon: BookOpen,
    },
    {
      id: 2,
      titlu:
        "Data&Lunch – Seria 1: Dacă vrei să înveți mai mult decât cursurile obișnuite",
      data: "10 Octombrie 2025",
      link: "https://asds-csie.ase.ro/__trashed/",
      categorie: "Seminar",
      icon: BookOpen,
    },
    {
      id: 3,
      titlu:
        'Atelier de instruire aplicativă „Resurse educaționale interactive și inovative dedicate dezvoltării abilităților practice ale studenților în domeniul analizei datelor"',
      data: "14 Septembrie 2023",
      link: "https://asds-csie.ase.ro/atelier-de-instruire-aplicativa-resurse-educationale-interactive-si-inovative-dedicate-dezvoltarii-abilitatilor-practice-ale-studentilor-in-domeniul-analizei-datelor-covasna-06/",
      categorie: "Workshop",
      icon: Users,
    },
    {
      id: 4,
      titlu:
        'Școala de Vară „Instrumente avansate de analiză a datelor aplicate în domeniul dezvoltării sustenabile"',
      data: "5 Octombrie 2022",
      link: "https://asds-csie.ase.ro/scoala-de-vara-instrumente-avansate-de-analiza-a-datelor-aplicate-in-domeniul-dezvoltarii-sustenabile-covasna-31-august-2022-03-septembrie-2022/",
      categorie: "Școală de Vară",
      icon: GraduationCap,
    },
    {
      id: 5,
      titlu:
        'ASE ocupă podiumul competiției Datathon WiDS – Women in Data Science", ediția 2023',
      data: "13 Martie 2023",
      link: "https://asds-csie.ase.ro/ase-ocupa-podiumul-competitiei-datathon-wids-women-in-data-science-editia-2023/",
      categorie: "Competiție",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader />

      <main className="pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            style={{ marginTop: "1.5cm" }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-8">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Evenimente Trecute</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorează activitățile și realizările noastre din anii precedenți
            </p>
          </motion.div>

          {/* Evenimente Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {evenimente.map((eveniment, index) => {
              const IconComponent = eveniment.icon;
              return (
                <motion.article
                  key={eveniment.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700 overflow-hidden group"
                >
                  <div className="p-8">
                    {/* Icon & Categorie */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-[#7209B7] to-[#4361EE] rounded-xl p-3">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="inline-flex items-center gap-2 bg-[#4CC9F0]/10 dark:bg-[#4CC9F0]/20 text-[#4361EE] dark:text-[#4CC9F0] px-3 py-1 rounded-full text-xs font-semibold">
                        {eveniment.categorie}
                      </div>
                    </div>

                    {/* Titlu */}
                    <h3 className="text-xl font-bold text-[#3A0CA3] dark:text-[#4CC9F0] mb-4 leading-tight">
                      {eveniment.titlu}
                    </h3>

                    {/* Data */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>{eveniment.data}</span>
                    </div>

                    {/* Link */}
                    <a
                      href={eveniment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#4361EE] hover:text-[#7209B7] dark:text-[#4CC9F0] dark:hover:text-[#4361EE] font-semibold transition-colors group-hover:gap-3 duration-300"
                    >
                      <span>Citește mai mult</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
