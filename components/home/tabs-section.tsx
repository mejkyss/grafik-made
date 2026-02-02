"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { CheckCircle2, Users, Workflow } from "lucide-react"

const tabs = [
  {
    id: "co-resim",
    label: "Co řeším",
    icon: CheckCircle2,
    items: [
      "tisková data (kontrola, opravy, příprava PDF)",
      "složité a problematické tiskové zakázky",
      "personifikované tiskoviny (číslované karty, databáze jmenných štítků)",
      "kalendáře, katalogy a další tiskoviny",
      "produktovou fotografii a videoprezentaci včetně střihu",
      "technické grafické podklady pro výrobu a realizaci",
      "kontrolu návazností mezi návrhem, tiskem a výrobou",
      "optimální využívání nejnovějších AI modulů při realizaci designu zakázky",
      "finální realizaci zakázek",
    ],
    image: false,
  },
  {
    id: "proc-se-mnou",
    label: "Proč se mnou",
    icon: Users,
    items: [
      "více než 25 let zkušeností z reálné výroby",
      "rozumím tisku, výrobě i montáži",
      "problémy nepředávám dál – řeším je",
      "pracuji externě, bez zbytečné administrativy",
      "firmy mě využívají dlouhodobě jako spolehlivou oporu",
    ],
    image: false,
  },
  {
    id: "jak-spoluprace",
    label: "Jak spolupráce vypadá",
    icon: Workflow,
    items: [
      "externí spolupráce (paušál / projekt)",
      "jasné zadání → jasný výstup",
    ],
    image: false,
  },
]

export function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const activeContent = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className="py-8 sm:py-12 bg-background w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-wrap justify-start gap-2 sm:gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeContent?.image ? (
                <div className="space-y-8">
                  <div className="rounded-3xl overflow-hidden border border-border shadow-lg bg-card">
                    <Image
                      src="/images/foto-20voxell.png"
                      alt="Workflow: Od produktové fotografie přes zpracování po finální prezentaci"
                      width={1600}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-center text-muted-foreground mb-8">
                    Produktová fotografie → Zpracování → Finální prezentace
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {activeContent?.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-5 sm:p-6 bg-muted/40 rounded-xl"
                      >
                        <p className="text-sm sm:text-base text-foreground leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {activeContent?.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-5 sm:p-6 bg-muted/40 rounded-xl"
                    >
                      <p className="text-sm sm:text-base text-foreground leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  )
}
