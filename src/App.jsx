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
    { q: "Posso apoiar com apenas R$2?", a: "Sim! Qualquer valor ajuda." },
    { q: "Preciso fazer parte da SouJunior para apoiar?", a: "Não. Qualquer pessoa pode contribuir com o projeto." },
    { q: "Como minha contribuição é utilizada?", a: "Os valores são utilizados para manter a infraestrutura no ar." },
    { q: "Posso apoiar de outras maneiras?", a: "Sim, você pode ser mentor ou voluntário na comunidade." },
    { q: "Onde posso acompanhar o trabalho da SouJunior?", a: "No nosso GitHub, LinkedIn, Discord e demais canais oficiais." }
  ];

  const planos = [
    {
      name: 'Apoiador Iniciante',
      price: 'R$ 2',
      description: 'Você ajuda a manter as ferramentas no ar e recebe nosso agradecimento oficial na comunidade.',
      featured: false,
    },
    {
      name: 'Apoiador Oficial',
      price: 'R$ 5',
      description: 'Você ganha destaque na nossa página de apoiadores e ajuda ativamente nos custos de infraestrutura.',
      featured: true,
    },
    {
      name: 'Patrono SouJunior',
      price: 'R$ 9',
      description: 'Você contribui diretamente para o crescimento da comunidade e tem acesso prioritário a novidades e relatórios de impacto.',
      featured: false,
    },
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-dark/70">
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
              className="rounded-full bg-dark px-6 py-2.5 text-sm font-bold text-white transition hover:bg-dark/80"
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

      <main className="pt-24 md:pt-32">
        {/* HERO */}
        <section id="causa" className="section-shell py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                A primeira oportunidade muda tudo.
              </h1>
              <p className="mt-6 text-lg text-dark/70 font-medium">
                Criada por Wouerner Brandão, a SouJunior existe para derrubar a barreira da "falta de experiência".
              </p>
              <p className="mt-4 text-dark/70">
                Ajudamos talentos em início de carreira a conquistarem experiência prática, atuando em projetos reais, aprendendo com mentores e se conectando com o mercado.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://apoia.se/soujunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-dark px-8 py-3.5 text-sm font-bold text-white transition hover:bg-dark/80"
                >
                  Apoiar no Apoia.se
                </a>
                <a
                  href="#impacto"
                  className="rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-dark transition hover:bg-secondary/90"
                >
                  Conheça nosso impacto
                </a>
              </div>
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square flex flex-col justify-end items-end p-8">
                  <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-primary rounded-[30px] flex flex-wrap content-start p-4 gap-4">
                     <div className="w-[45%] aspect-square bg-white rounded-xl"></div>
                     <div className="w-[45%] aspect-square bg-white rounded-xl"></div>
                     <div className="w-[45%] aspect-square bg-white rounded-xl mt-4"></div>
                  </div>
                  <img src="/hero-mascot.png" alt="Mascote SouJunior" className="absolute bottom-0 right-10 w-48 h-auto object-contain drop-shadow-2xl z-10" onError={(e) => {
                    e.target.style.display = 'none';
                  }}/>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS STRIP */}
        <div id="impacto" className="bg-secondary py-6 border-y border-dark/10 overflow-hidden">
          <div className="section-shell flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-4 text-sm font-bold">
            <div className="flex items-center gap-2">
              <span className="text-xl">120</span> membros na comunidade
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">3</span> projetos em desenvolvimento
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">+50</span> pessoas empregadas
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">35</span> mentores ativos
            </div>
          </div>
        </div>

        {/* DARK SECTION - BARRIER */}
        <section className="bg-dark text-white py-20 lg:py-32">
          <div className="section-shell grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/20 text-cyan text-sm font-bold mb-6">
                O problema
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                O começo não<br/>deveria ser<br/>
                <span className="text-cyan">uma barreira.</span>
              </h2>
            </div>
            <div className="max-w-lg">
              <h3 className="text-xl font-bold mb-4">
                Como ganhar experiência se toda vaga pede experiência?
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Para quem está começando, o mercado tech pode parecer um labirinto. Nós acreditamos que a teoria só faz sentido quando aplicada à prática. O desafio aparece de verdade quando chega a hora de trabalhar em equipe, receber feedbacks, lidar com processos e entregar valor.
              </p>
              <div className="inline-block border border-white/20 rounded-xl p-4 bg-white/5 relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan rounded-full"></div>
                <p className="font-medium text-sm">
                  É nesse espaço entre o estudar e o<br/>trabalhar que a SouJunior entra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION - POSSIBLE */}
        <section className="py-20 lg:py-32">
          <div className="section-shell grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <div className="w-24 h-24 mb-8">
                 <div className="w-full h-full bg-primary rounded-[20px] p-2 flex flex-wrap gap-2 relative">
                    <div className="w-[45%] h-[45%] bg-white rounded-lg"></div>
                    <div className="w-[45%] h-[45%] bg-white rounded-lg"></div>
                    <div className="w-[45%] h-[45%] bg-white rounded-lg"></div>
                 </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                O que a<br/>SouJunior<br/>torna possível
              </h2>
              <p className="text-dark/70 leading-relaxed max-w-sm">
                Nossas iniciativas (como o SouJunior Labs e Talk) criam o ambiente seguro e realista onde profissionais podem praticar de verdade.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border border-dark/10 rounded-2xl p-6 md:p-8 flex gap-6 items-start bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Projetos reais (Labs)</h3>
                  <p className="text-sm text-dark/70 leading-relaxed">
                    Juniores colocam a mão na massa em projetos reais. Eles aprendem a trabalhar em equipe, usar metodologias ágeis e entregar valor contínuo para o mercado.
                  </p>
                </div>
              </div>

              <div className="border border-dark/10 rounded-2xl p-6 md:p-8 flex gap-6 items-start bg-white shadow-sm ml-0 md:ml-8">
                <div className="w-12 h-12 rounded-xl bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mentoria e Inglês (Talk)</h3>
                  <p className="text-sm text-dark/70 leading-relaxed">
                    Prática de inglês e mentoria com quem já está no mercado. Você nunca está sozinho na sua jornada e tem quem te ajude a enxergar os próximos passos.
                  </p>
                </div>
              </div>

              <div className="border border-dark/10 rounded-2xl p-6 md:p-8 flex gap-6 items-start bg-white shadow-sm ml-0 md:ml-16">
                <div className="w-12 h-12 rounded-xl bg-secondary flex-shrink-0"></div>
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
            <h2 className="text-3xl md:text-5xl font-black mb-16 max-w-3xl mx-auto leading-tight">
              Aqui, ensinar e aprender fazem parte da mesma jornada.
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-dark rounded-2xl p-8 border border-white/10">
                <div className="w-10 h-10 bg-primary rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold mb-3">Quem está começando</h3>
                <p className="text-sm text-white/70">
                  Encontra espaço para praticar, errar, receber feedbacks técnicos e construir um portfólio sólido que aprova em entrevistas.
                </p>
              </div>

              <div className="bg-dark rounded-2xl p-8 border border-white/10">
                <div className="w-10 h-10 bg-cyan rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold mb-3">Quem já tem experiência</h3>
                <p className="text-sm text-white/70">
                  Compartilha conhecimento, desenvolve habilidades de liderança e gestão, e ajuda a formar a base técnica que o mercado precisa.
                </p>
              </div>

              <div className="bg-dark rounded-2xl p-8 border border-white/10">
                <div className="w-10 h-10 bg-secondary rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold mb-3">Quem busca talentos</h3>
                <p className="text-sm text-white/70">
                  Encontra profissionais que já possuem maturidade de trabalho em equipe, processos ágeis e entrega real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YELLOW STRIP 2 */}
        <div className="bg-secondary py-8 text-center px-4 font-bold text-lg md:text-xl border-y border-dark/10">
          Porque quando um júnior cresce, <span className="underline decoration-2 underline-offset-4">todo o ecossistema cresce junto.</span>
        </div>

        {/* DARK TESTIMONIALS SECTION */}
        <section className="bg-dark text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-10 left-10 text-[200px] leading-none font-serif text-primary/10 select-none">“</div>
          <div className="absolute bottom-10 right-10 text-[200px] leading-none font-serif text-primary/10 select-none rotate-180">“</div>

          <div className="section-shell relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold mb-8">
              Histórias reais, impacto real
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-16 max-w-2xl mx-auto leading-tight">
              Por trás de cada projeto, existe uma carreira em construção.
            </h2>

            <div className="max-w-3xl mx-auto mt-12 text-center border-2 border-dashed border-white/20 rounded-[28px] p-12 bg-white/5">
              <p className="text-lg font-semibold text-white/70">
                [Depoimentos reais pendentes de integração]
              </p>
              <p className="mt-2 text-sm text-white/50">
                * Conforme as regras de negócio: Utilizar somente depoimentos reais publicados no site oficial. Não inserir textos fictícios.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY SECTION */}
        <section className="bg-[#dfdfdf] py-20 text-center">
          <div className="section-shell max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black leading-tight text-dark mb-6">
                Para onde vai o seu apoio?
             </h2>
             <p className="text-lg text-dark/80 mb-12">
               Seu apoio ajuda a manter a infraestrutura que faz a SouJunior acontecer. Em 2026, já foram R$ 1.849,59 em custos essenciais.
             </p>
             <div className="bg-white rounded-3xl p-8 shadow-sm inline-block mx-auto border border-dark/10">
                <p className="text-5xl font-black text-primary">R$ 1.849,59</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-dark/50 font-bold">em infraestrutura em 2026</p>
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-dark/80">
                  <span>AWS</span> <span className="text-dark/20">•</span>
                  <span>Vultr</span> <span className="text-dark/20">•</span>
                  <span>DigitalOcean</span> <span className="text-dark/20">•</span>
                  <span>Domínio</span>
                </div>
             </div>
             <p className="mt-12 text-lg text-dark/80">
               Manter essa estrutura no ar tem um custo real. Cada apoio ajuda a manter essa porta aberta para o próximo júnior.
             </p>
          </div>
        </section>

        {/* APOIA.SE PLANS BANNER */}
        <section id="planos" className="py-20 lg:py-32 bg-white">
          <div className="section-shell">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-4">Escolha como apoiar</h2>
              <p className="text-dark/70 text-lg">A participação na SouJunior é gratuita. Apoiar é uma forma voluntária de contribuir para que esse espaço continue existindo e crescendo.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {planos.map((plan) => (
                <div key={plan.name} className={`rounded-3xl p-8 border flex flex-col ${plan.featured ? 'border-primary bg-primary/5 shadow-md relative' : 'border-dark/10 bg-white'}`}>
                  {plan.featured && (
                    <span className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-black mb-6 text-primary">{plan.price}<span className="text-lg text-dark/50 font-medium">/mês</span></div>
                  <p className="text-dark/70 mb-8 flex-grow leading-relaxed">{plan.description}</p>
                  <a
                    href="https://apoia.se/soujunior"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-full py-4 text-sm font-bold transition ${plan.featured ? 'bg-primary text-white hover:bg-primary/90' : 'bg-dark text-white hover:bg-dark/90'}`}
                  >
                    Apoiar no Apoia.se
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center text-sm font-bold text-dark/50">
              Junte-se aos nossos +108 apoiadores no Apoia.se
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 lg:py-32 bg-light border-t border-dark/10">
          <div className="section-shell grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold mb-6">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                Dúvidas sobre o projeto
              </h2>
              <div className="w-64 h-64 border-2 border-primary/20 rounded-3xl p-4 hidden md:block">
                 <div className="w-full h-full border-2 border-primary/20 rounded-2xl p-4">
                    <div className="w-full h-1/2 border-2 border-primary/20 rounded-xl bg-primary/5"></div>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-dark/10 pb-4 bg-white px-6 rounded-2xl shadow-sm">
                  <button
                    className="w-full flex items-center justify-between py-6 text-left font-bold text-lg"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  >
                    {faq.q}
                    <span className="text-primary text-2xl ml-4 shrink-0 font-light">
                      {openFaqIndex === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="pb-6 text-dark/70 leading-relaxed pr-8">
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
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              O júnior de hoje<br/>transforma o amanhã.
            </h2>
            <div className="md:text-right">
              <p className="text-white/70 max-w-sm ml-auto text-sm leading-relaxed mb-6">
                Ajude a criar espaço para quem só precisa de uma oportunidade para mostrar o que sabe fazer. Junte-se a mais de 100 apoiadores mantendo esse movimento.
              </p>
              <a
                href="https://apoia.se/soujunior"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-secondary px-8 py-3 text-sm font-bold text-dark transition hover:bg-secondary/90"
              >
                Apoiar no Apoia.se
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-8 border-t border-white/10 text-sm font-medium text-white/50">
            <a href="https://discord.gg/soujunior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5865F2]"></span> Discord
            </a>
            <a href="https://linkedin.com/company/soujunior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A66C2]"></span> LinkedIn
            </a>
            <a href="https://github.com/SouJunior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span> GitHub
            </a>
            <a href="https://soujunior.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Site
            </a>
            <span className="ml-auto w-full md:w-auto text-center mt-4 md:mt-0 text-xs text-white/30">
              SouJunior © {new Date().getFullYear()} Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
