import React, { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'causa', href: '#causa' },
    { name: 'impacto', href: '#impacto' },
    { name: 'planos', href: '#planos' },
  ];

  const faqs = [
    { q: "Posso apoiar com apenas R$2?", a: "Sim! Qualquer valor, a partir de R$ 2, ajuda a manter a infraestrutura no ar para que os projetos continuem acontecendo." },
    { q: "Preciso fazer parte da SouJunior para apoiar?", a: "Não. Qualquer pessoa ou empresa que acredita na inserção de novos talentos no mercado pode contribuir." },
    { q: "Como minha contribuição é utilizada?", a: "Os valores são utilizados para manter servidores (AWS, Vultr, DigitalOcean), domínio e outras ferramentas que a comunidade usa diariamente." },
    { q: "Posso apoiar de outras maneiras?", a: "Sim! Você pode ser mentor, ajudar na revisão de códigos, puxar novas iniciativas ou compartilhar nossas vagas e projetos." },
    { q: "Onde posso acompanhar o trabalho da SouJunior?", a: "Através do nosso Discord, GitHub, LinkedIn e demais canais oficiais. Tudo o que fazemos é aberto para a comunidade." }
  ];

  return (
    <div className="min-h-screen bg-light text-dark font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="section-shell flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold text-dark/70">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center font-black text-xl tracking-tight text-primary">
            <span className="text-2xl mr-1">❖</span> SouJunior
          </div>

          <div className="hidden md:flex">
            <a
              href="https://apoia.se/soujunior"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dark px-6 py-2.5 text-sm font-bold text-white transition hover:bg-dark/80 whitespace-nowrap"
            >
              Apoiar no Apoia.se
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE NAV */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-dark/10 shadow-lg py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://apoia.se/soujunior"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-dark px-6 py-3 text-center font-bold text-white"
            >
              Apoiar no Apoia.se
            </a>
          </div>
        )}
      </header>

      <main className="pt-24 md:pt-32 relative radial-glow-blue">
        {/* HERO */}
        <section id="causa" className="section-shell py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                O júnior de hoje transforma o amanhã.
              </h1>
              <p className="mt-6 text-lg text-dark/70 font-medium">Toda carreira precisa de uma primeira oportunidade para acontecer.</p>
              <p className="mt-4 text-dark/70">Na SouJunior, profissionais constroem a experiência em projetos reais, aprendem com mentores e se preparam para o mercado.</p>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://apoia.se/soujunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-dark px-8 py-3.5 text-sm font-bold text-white transition hover:bg-dark/80 text-center w-full sm:w-auto"
                >
                  Apoiar no Apoia.se
                </a>
                <a
                  href="#impacto"
                  className="rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-dark transition hover:bg-secondary/90 text-center w-full sm:w-auto"
                >
                  Conheça nosso impacto
                </a>
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
               {/* Hero composition placeholder */}
               <img src="/hero-composition.png" alt="Composição SouJunior" className="w-full max-w-lg object-contain drop-shadow-2xl" />
            </div>
          </div>
        </section>

        {/* STATISTICS STRIP */}
        <div id="impacto" className="bg-secondary py-6 md:py-8 border-y border-dark/10 overflow-hidden px-4">
          <div className="section-shell flex flex-col md:flex-row flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8 text-sm font-bold text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-xl">[120]+</span> membros na comunidade
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-xl">[3]+</span> projetos em desenvolvimento
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-xl">[50]+</span> pessoas empregadas
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-xl">[35]+</span> mentores ativos
            </div>
          </div>
        </div>

        {/* DARK SECTION - BARRIER */}
        <section className="bg-dark text-white py-20 lg:py-32">
          <div className="section-shell grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/20 text-cyan text-sm font-bold mb-6">
                O problema
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                O começo não<br className="hidden md:block" />deveria ser<br className="hidden md:block" />
                <span className="text-cyan">uma barreira.</span>
              </h2>
            </div>
            <div className="max-w-lg mx-auto lg:mx-0">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Como ganhar experiência se toda vaga pede experiência?
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Para quem está começando, o mercado tech pode parecer um labirinto. Nós acreditamos que a teoria só faz sentido quando aplicada à prática. O desafio aparece de verdade quando chega a hora de trabalhar em equipe, receber feedbacks, lidar com processos e entregar valor.
              </p>
              <div className="inline-block border border-white/20 rounded-xl p-5 bg-white/5 relative mx-auto lg:mx-0">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-cyan rounded-r-full"></div>
                <p className="font-medium text-sm text-left pl-2">
                  É nesse espaço entre o estudar e o<br/>trabalhar que a SouJunior entra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION - POSSIBLE */}
        <section className="py-20 lg:py-32 radial-glow-yellow">
          <div className="section-shell grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="text-center md:text-left order-2 lg:order-1">
              <div className="w-full max-w-sm mx-auto md:mx-0 mb-8 relative">
                 <img src="/hero-composition.png" alt="O que torna possível" className="w-full drop-shadow-xl rotate-1" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                O que a<br className="hidden md:block"/>SouJunior<br className="hidden md:block"/>torna possível
              </h2>
              <p className="text-dark/70 leading-relaxed max-w-sm mx-auto md:mx-0">
                Nossas iniciativas (como o SouJunior Labs e Talk) criam o ambiente seguro e realista onde profissionais podem praticar de verdade.
              </p>
            </div>

            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="border border-dark/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start bg-white shadow-sm text-center md:text-left">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Projetos reais (Labs)</h3>
                  <p className="text-sm text-dark/70 leading-relaxed">
                    Juniores colocam a mão na massa em projetos reais. Eles aprendem a trabalhar em equipe, usar metodologias ágeis e entregar valor contínuo para o mercado.
                  </p>
                </div>
              </div>

              <div className="border border-dark/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start bg-white shadow-sm md:ml-8 text-center md:text-left">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mentoria e Inglês (Talk)</h3>
                  <p className="text-sm text-dark/70 leading-relaxed">
                    Prática de inglês e mentoria com quem já está no mercado. Você nunca está sozinho na sua jornada e tem quem te ajude a enxergar os próximos passos.
                  </p>
                </div>
              </div>

              <div className="border border-dark/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start bg-white shadow-sm md:ml-16 text-center md:text-left">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 text-dark">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comunidade Aberta</h3>
                  <p className="text-sm text-dark/70 leading-relaxed">
                    Ninguém precisa crescer sozinho. Dúvidas, feedbacks e networking constante conectam iniciantes a oportunidades reais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUE SECTION - JOURNEY */}
        <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

          <div className="section-shell relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-dark text-sm font-bold mb-8">
              Um ecossistema, múltiplos papéis
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 max-w-3xl mx-auto leading-tight">
              Aqui, ensinar e aprender fazem parte da mesma jornada.
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-dark rounded-3xl p-8 border border-white/10 shadow-lg">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quem está começando</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Encontra espaço para praticar, errar, receber feedbacks técnicos e construir um portfólio sólido que aprova em entrevistas.
                </p>
              </div>

              <div className="bg-dark rounded-3xl p-8 border border-white/10 shadow-lg">
                <div className="w-12 h-12 bg-cyan/20 text-cyan rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quem já tem experiência</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Compartilha conhecimento, desenvolve habilidades de liderança e gestão, e ajuda a formar a base técnica que o mercado precisa.
                </p>
              </div>

              <div className="bg-dark rounded-3xl p-8 border border-white/10 shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quem busca talentos</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Encontra profissionais que já possuem maturidade de trabalho em equipe, processos ágeis e entrega real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YELLOW STRIP 2 */}
        <div className="bg-secondary py-8 md:py-10 text-center px-4 font-bold text-lg md:text-xl border-y border-dark/10">
          Porque quando um júnior cresce, <span className="underline decoration-2 underline-offset-4">todo o ecossistema cresce junto.</span>
        </div>

        {/* DARK TESTIMONIALS SECTION */}
        <section className="bg-dark text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-10 left-4 text-[120px] md:text-[200px] leading-none font-serif text-primary/10 select-none">“</div>
          <div className="absolute bottom-10 right-4 text-[120px] md:text-[200px] leading-none font-serif text-primary/10 select-none rotate-180">“</div>

          <div className="section-shell relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 max-w-3xl mx-auto leading-tight">
              Por trás de cada projeto, existe uma carreira em construção.
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { label: 'Mentor', color: 'secondary' },
                { label: 'Júnior', color: 'cyan' },
                { label: 'Empregador', color: 'primary' }
              ].map((role, idx) => (
                <div key={idx} className={`border border-white/10 rounded-[32px] p-8 bg-white/5 relative shadow-lg ${role.color === 'cyan' ? 'border-cyan/30' : ''}`}>
                  <span className={`absolute -top-3 left-8 text-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-sm bg-${role.color} ${role.color === 'primary' ? 'text-white' : ''}`}>
                    {role.label}
                  </span>
                  <p className="text-sm text-white/70 mb-8 mt-4 leading-relaxed">
                    [Depoimento placeholder: aguardando integração real do site oficial conforme regras do PO.]
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={`/avatar-${idx + 1}.png`} alt="Avatar" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
                    <div>
                      <p className="font-bold text-sm text-white">Fulano de Tal</p>
                      <p className="text-xs text-white/50">Cargo / Função</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW IMPACT PHOTO SECTION (Uma pequena contribuição) */}
        <section id="planos" className="py-20 lg:py-32 bg-primary radial-glow-blue overflow-hidden relative">
           <div className="section-shell grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

             {/* Left - Photo composition */}
             <div className="relative mx-auto lg:mx-0 w-full max-w-lg">
                <img src="/team-photo.png" alt="Equipe reunida" className="rounded-[32px] w-full object-cover shadow-2xl aspect-video md:aspect-[4/3]" />
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-white p-2 rounded-2xl shadow-xl rotate-6">
                  <img src="/hero-composition.png" alt="Card flutuante" className="w-full h-full object-cover rounded-xl" />
                </div>
             </div>

             {/* Right - Contribution CTA */}
             <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                  Uma pequena contribuição pode fazer parte de uma <span className="text-secondary">grande mudança:</span>
                </h2>

                <div className="flex flex-col gap-6">
                   <div className="bg-dark rounded-[24px] p-6 md:p-8 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 text-white mt-1">
                         ✓
                      </div>
                      <div>
                         <h3 className="font-bold text-lg mb-2">Para quem está começando</h3>
                         <p className="text-white/70 text-sm leading-relaxed">Acesso gratuito a servidores para deploy, infraestrutura para projetos e ferramentas premium.</p>
                      </div>
                   </div>

                   <div className="bg-dark rounded-[24px] p-6 md:p-8 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 text-secondary mt-1">
                         ✓
                      </div>
                      <div>
                         <h3 className="font-bold text-lg mb-2">Para toda a comunidade</h3>
                         <p className="text-white/70 text-sm leading-relaxed">Sustentação do ecossistema que gera centenas de vagas e conecta pessoas através da tecnologia.</p>
                      </div>
                   </div>
                </div>

                <div className="mt-10">
                   <a href="https://apoia.se/soujunior" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto text-center rounded-full bg-secondary px-10 py-4 text-sm font-bold text-dark transition hover:bg-secondary/90 shadow-lg">
                      Apoiar com R$ 2, R$ 5 ou R$ 9
                   </a>
                </div>
             </div>

           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 lg:py-32 bg-light border-t border-dark/10">
          <div className="section-shell grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start text-center lg:text-left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold mb-6">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                Dúvidas sobre o projeto
              </h2>
              <div className="w-64 h-64 border-2 border-primary/20 rounded-[32px] p-4 hidden md:block mx-auto lg:mx-0">
                 <div className="w-full h-full border-2 border-primary/20 rounded-[24px] p-4">
                    <div className="w-full h-1/2 border-2 border-primary/20 rounded-[16px] bg-primary/5"></div>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-dark/10 bg-white rounded-[24px] shadow-sm overflow-hidden transition-all text-left">
                  <button
                    className="w-full flex items-center justify-between p-6 font-bold text-base md:text-lg hover:bg-gray-50/50"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-primary text-2xl shrink-0 font-light w-8 h-8 flex items-center justify-center rounded-full border border-dark/10">
                      {openFaqIndex === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-6 text-dark/70 leading-relaxed text-sm md:text-base border-t border-dark/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/10">
        <div className="section-shell">
          <div className="grid md:grid-cols-2 gap-12 mb-16 md:mb-20 items-end text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              O júnior de hoje<br/>transforma o amanhã.
            </h2>
            <div className="md:text-right flex flex-col md:items-end">
              <p className="text-white/70 max-w-sm mx-auto md:mx-0 text-sm leading-relaxed mb-6">
                Ajude a criar espaço para quem só precisa de uma oportunidade para mostrar o que sabe fazer. Junte-se a mais de 100 apoiadores mantendo esse movimento.
              </p>
              <a
                href="https://apoia.se/soujunior"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto rounded-full bg-secondary px-8 py-3 text-sm font-bold text-dark transition hover:bg-secondary/90 text-center"
              >
                Apoiar no Apoia.se
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 pt-8 border-t border-white/10 text-sm font-medium text-white/50">
            <div className="flex gap-6">
              <a href="https://discord.gg/soujunior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5865F2]"></span> Discord
              </a>
              <a href="https://linkedin.com/company/soujunior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A66C2]"></span> LinkedIn
              </a>
              <a href="https://github.com/SouJunior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white"></span> GitHub
              </a>
            </div>
            <a href="https://soujunior.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2 md:ml-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Site Oficial
            </a>
            <span className="md:ml-auto w-full md:w-auto text-center mt-4 md:mt-0 text-xs text-white/30">
              SouJunior © {new Date().getFullYear()} Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
