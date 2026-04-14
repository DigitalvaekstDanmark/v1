import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ScrollAnimate from '../components/ScrollAnimate'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const services = [
  { icon: '🖥️', bg: '#EBF1FE', title: 'Webudvikling', desc: 'Moderne, hurtige og konverteringsoptimerede websites bygget med de nyeste teknologier. Fra landingssider til komplekse web-applikationer.' },
  { icon: '☁️', bg: '#E6F7EF', title: 'Hosting', desc: 'Pålidelig og sikker hosting med 99,9% oppetid. Vi sørger for, at din hjemmeside altid er hurtig, sikker og tilgængelig for dine kunder.' },
  { icon: '🔍', bg: '#FFF7E6', title: 'SEO-optimering', desc: 'Bliv fundet på Google. Vi optimerer din hjemmeside teknisk og indholdsmæssigt, så du rangerer højere og tiltrækker de rigtige besøgende.' },
  { icon: '📈', bg: '#FCE8F3', title: 'Digital markedsføring', desc: 'Målrettet annoncering på Google og sociale medier kombineret med content marketing, der konverterer besøgende til betalende kunder.' },
]

const whyCards = [
  { num: '01', title: 'Resultatorienteret tilgang', desc: "Vi måler vores succes på din succes. Hvert projekt starter med klare mål og KPI'er, og vi rapporterer løbende på fremgangen." },
  { num: '02', title: 'Teknisk ekspertise i verdensklasse', desc: 'Vores datamatiker-baggrund sikrer, at alt vi bygger er hurtigt, sikkert og skalerbart – og holder i mange år frem.' },
  { num: '03', title: 'Personligt og tæt samarbejde', desc: 'Du samarbejder direkte med de folk, der bygger din løsning. Ingen projektledere der sidder imellem – bare åben og ærlig kommunikation.' },
]

const whyAccents = ['#1A6BF0', '#0FA96B', '#F0A500']

const processSteps = [
  { num: '01', title: 'Analyse', desc: 'Vi kortlægger din virksomhed, dine kunder og dine konkurrenter for at finde det bedste digitale fundament.' },
  { num: '02', title: 'Udvikling', desc: 'Vi bygger din løsning med fokus på performance, brugervenlighed og konvertering fra dag ét.' },
  { num: '03', title: 'Lancering', desc: 'Grundig test og kvalitetssikring inden vi sender din løsning live – uden overraskelser.' },
  { num: '04', title: 'Vækst', desc: 'Løbende optimering, SEO og markedsføring der driver trafik og vækst over tid.' },
]

export default function Home() {
  return (
    <main className="font-body text-navy bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <header className="relative min-h-screen flex items-center pt-[130px] pb-[100px] px-[5%] overflow-hidden bg-white">
        {/* Grid bg */}
        <div className="hero-grid absolute inset-0 z-0" />
        {/* Blob */}
        <div className="absolute -top-[100px] -right-[80px] w-[520px] h-[520px] rounded-full z-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(26,107,240,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[760px]">
          <div className="inline-flex items-center gap-2 bg-[#EBF1FE] text-accent text-[13px] font-medium px-3.5 py-1.5 rounded-full mb-7 border border-[rgba(26,107,240,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0FA96B]" />
            Dansk digital vækstpartner
          </div>

          <h1 className="font-display text-[clamp(38px,5.5vw,68px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-navy mb-6">
            Vi får din virksomhed<br />
            til at <em className="not-italic text-accent">vokse online</em>
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] text-[#5A6880] font-light max-w-[560px] mb-10 leading-[1.7]">
            Vi kombinerer teknisk ekspertise og marketingviden for at skabe digitale løsninger, der tiltrækker kunder og driver reel forretningsvækst.
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-4 rounded-[8px] text-[15px] font-medium no-underline hover:bg-[#1459CC] hover:-translate-y-0.5 transition-all duration-200">
              Få en gratis vurdering <ArrowRight />
            </a>
            <a href="#ydelser" className="inline-flex items-center px-7 py-4 rounded-[8px] text-[15px] text-navy no-underline border border-[#E4E1D9] bg-white hover:border-accent hover:bg-[#EBF1FE] transition-all duration-200">
              Se vores ydelser
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-[#E4E1D9] flex gap-12 flex-wrap">
            {[['100+', 'Projekter leveret'], ['97%', 'Tilfredse kunder'], ['3×', 'Gns. trafikstigning']].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-[30px] font-bold text-navy tracking-[-1px]">{num}</div>
                <div className="text-[13px] text-[#8A96A8] mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── SERVICES ── */}
      <section id="ydelser" className="py-24 px-[5%] bg-[#F7F5F0]">
        <span className="inline-block text-[12px] font-medium tracking-[1.2px] uppercase text-accent bg-[#EBF1FE] px-3 py-1 rounded-full mb-5">Ydelser</span>
        <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.8px] leading-[1.15] text-navy max-w-[600px] mb-4">
          Alt hvad din virksomhed behøver digitalt
        </h2>
        <p className="text-[16px] text-[#5A6880] max-w-[520px] mb-14 font-light">
          Fra idé til lancering – vi tilbyder komplette digitale løsninger, der er skræddersyet til din forretning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ScrollAnimate key={s.title} delay={i * 100}>
              <div className="bg-white border border-[#E4E1D9] rounded-[22px] p-9 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(26,107,240,0.25)] transition-all duration-200 h-full">
                <div className="w-[50px] h-[50px] rounded-[8px] flex items-center justify-center mb-5 text-[22px]" style={{ background: s.bg }}>
                  {s.icon}
                </div>
                <h3 className="font-display text-[18px] font-semibold text-navy mb-2.5">{s.title}</h3>
                <p className="text-[14px] text-[#5A6880] leading-[1.65]">{s.desc}</p>
                <a href="#kontakt" className="inline-flex items-center gap-1.5 text-accent text-[13px] font-medium no-underline mt-4 hover:gap-2.5 transition-all duration-200">
                  Lær mere <span>→</span>
                </a>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="om-os" className="py-24 px-[5%] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Visual */}
          <div className="relative">
            <div className="bg-navy rounded-[22px] p-12">
              <p className="text-[22px] font-light leading-[1.55] text-white/90">
                <strong className="font-semibold text-white">Vi er ikke bare et bureau.</strong> Vi er din dedikerede digitale partner – med den tekniske dybde til at bygge det, og marketingforståelsen til at sælge det.
              </p>
              <div className="flex gap-2.5 flex-wrap mt-7">
                {['Datamatiker-baggrund', 'Marketinguddannelse', 'Resultatorienteret'].map(pill => (
                  <span key={pill} className="bg-white/10 border border-white/20 text-white/85 text-[12px] px-3.5 py-1.5 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
            <div className="mt-5 lg:absolute lg:-bottom-6 lg:-right-6 bg-[#E6F7EF] border border-[rgba(15,169,107,0.2)] rounded-[14px] p-4.5 flex items-center gap-3 px-5 py-4">
              <span className="text-[28px]">✅</span>
              <div>
                <div className="text-[13px] font-medium text-navy">Certificeret ekspertise</div>
                <div className="text-[12px] text-[#5A6880]">Google & Meta Partner</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-[12px] font-medium tracking-[1.2px] uppercase text-accent bg-[#EBF1FE] px-3 py-1 rounded-full mb-5">Om os</span>
            <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.8px] leading-[1.15] text-navy mb-4">
              Teknik møder marketing
            </h2>
            <p className="text-[16px] text-[#5A6880] font-light mb-4 leading-[1.7]">
              Digital Vækst Danmark er grundlagt af et hold med uddannelse inden for datalogi (Datamatiker) og formel marketinguddannelse. Det giver os en unik kombination: vi forstår både koden og kunden.
            </p>
            <p className="text-[16px] text-[#5A6880] font-light mb-8 leading-[1.7]">
              Vi arbejder tæt sammen med vores kunder – ikke som en leverandør, men som en langsigtet partner, der er investeret i din succes.
            </p>

            <div className="flex flex-col gap-3.5">
              {[
                { icon: '💡', title: 'Teknisk baggrund', desc: 'Uddannet som Datamatikere med dyb viden om webudvikling og systemarkitektur.' },
                { icon: '📊', title: 'Marketingekspertise', desc: 'Formel uddannelse i marketing sikrer, at vi tænker i kunder, konverteringer og ROI.' },
                { icon: '🤝', title: 'Personligt samarbejde', desc: 'Direkte kommunikation uden mellemmænd – du kender altid status på dit projekt.' },
              ].map(b => (
                <div key={b.title} className="flex items-start gap-3.5 bg-[#F7F5F0] border border-[#E4E1D9] rounded-[14px] p-4.5 px-5 py-4">
                  <div className="w-[38px] h-[38px] rounded-[8px] bg-[#EBF1FE] flex items-center justify-center text-[18px] flex-shrink-0">{b.icon}</div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-navy mb-0.5">{b.title}</h4>
                    <p className="text-[13px] text-[#5A6880]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="fordele" className="py-24 px-[5%] bg-[#F7F5F0]">
        <span className="inline-block text-[12px] font-medium tracking-[1.2px] uppercase text-accent bg-[#EBF1FE] px-3 py-1 rounded-full mb-5">Hvorfor os</span>
        <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.8px] leading-[1.15] text-navy max-w-[600px] mb-4">
          Mere end blot en hjemmeside
        </h2>
        <p className="text-[16px] text-[#5A6880] max-w-[520px] mb-14 font-light">
          Vi leverer løsninger, der faktisk virker – målt i trafik, leads og omsætning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyCards.map((c, i) => (
            <ScrollAnimate key={c.num} delay={i * 100}>
              <div className="bg-white border border-[#E4E1D9] rounded-[22px] p-9 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px]" style={{ background: whyAccents[i] }} />
                <div className="font-display text-[48px] font-extrabold text-navy/[0.06] mb-2 leading-none">{c.num}</div>
                <h3 className="font-display text-[19px] font-semibold text-navy mb-3">{c.title}</h3>
                <p className="text-[14px] text-[#5A6880] leading-[1.7]">{c.desc}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="processen" className="py-24 px-[5%] bg-white">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="inline-block text-[12px] font-medium tracking-[1.2px] uppercase text-accent bg-[#EBF1FE] px-3 py-1 rounded-full mb-5">Processen</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.8px] leading-[1.15] text-navy mb-4">
            Fra idé til vækst – i fire trin
          </h2>
          <p className="text-[16px] text-[#5A6880] font-light">
            En gennemprøvet proces, der sikrer kvalitet og resultat i hvert eneste projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative max-w-5xl mx-auto">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-[#E4E1D9] z-0" />

          {processSteps.map((s, i) => (
            <ScrollAnimate key={s.num} delay={i * 100} className="flex flex-col items-center text-center px-4 relative z-10 mb-8 lg:mb-0">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent flex items-center justify-center font-display text-[13px] font-bold text-accent mb-5 hover:bg-accent hover:text-white transition-all duration-200 cursor-default">
                {s.num}
              </div>
              <h3 className="font-display text-[15px] font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-[13px] text-[#5A6880] leading-[1.6]">{s.desc}</p>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="kontakt" className="py-24 px-[5%] bg-[#F7F5F0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
          <div>
            <span className="inline-block text-[12px] font-medium tracking-[1.2px] uppercase text-accent bg-[#EBF1FE] px-3 py-1 rounded-full mb-5">Kontakt</span>
            <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.8px] text-navy mb-4">
              Klar til at vækste digitalt?
            </h2>
            <p className="text-[16px] text-[#5A6880] font-light mb-9 leading-[1.7]">
              Udfyld formularen, og vi vender tilbage inden for én hverdag med en gratis vurdering af din digitale tilstedeværelse.
            </p>

            {[
              { icon: '✉️', text: 'kontakt@digitalvaekstdanmark.dk', sub: 'Vi svarer inden for 24 timer' },
              { icon: '📍', text: 'Danmark', sub: 'Vi arbejder med kunder i hele landet' },
              { icon: '⏱️', text: 'Gratis indledende vurdering', sub: 'Ingen forpligtelse – bare ærlig rådgivning' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-[8px] bg-[#EBF1FE] flex items-center justify-center text-[18px] flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-[14px] font-medium text-navy">{item.text}</div>
                  <div className="text-[12px] text-[#5A6880]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy text-white/70 pt-16 pb-10 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 mb-14 max-w-7xl mx-auto">
          <div>
            <div className="font-display text-[18px] font-extrabold text-white mb-3.5">
              Digital <span className="text-[#4D90F5]">Vækst</span> Danmark
            </div>
            <p className="text-[14px] leading-[1.7] font-light">
              Vi hjælper danske virksomheder med at vokse online gennem webudvikling, SEO og digital markedsføring – med en personlig og resultatorienteret tilgang.
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white tracking-[0.5px] mb-4">Ydelser</h4>
            {['Webudvikling', 'Hosting', 'SEO-optimering', 'Digital markedsføring'].map(l => (
              <a key={l} href="#ydelser" className="block text-[14px] text-white/60 no-underline mb-2.5 hover:text-white transition-colors duration-200">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white tracking-[0.5px] mb-4">Virksomhed</h4>
            {[['Om os', '#om-os'], ['Processen', '#processen'], ['Hvorfor os', '#fordele'], ['Kontakt', '#kontakt']].map(([label, href]) => (
              <a key={label} href={href} className="block text-[14px] text-white/60 no-underline mb-2.5 hover:text-white transition-colors duration-200">{label}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-7 flex flex-wrap justify-between items-center gap-3 text-[13px] max-w-7xl mx-auto">
          <span>© 2025 Digital Vækst Danmark. Alle rettigheder forbeholdes.</span>
          <span>kontakt@digitalvaekstdanmark.dk</span>
        </div>
      </footer>
    </main>
  )
}
