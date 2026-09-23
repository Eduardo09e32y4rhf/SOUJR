const navItems = [
  { label: 'Causa', href: '#causa' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Transparência', href: '#transparencia' },
  { label: 'Apoio', href: '#apoio' },
];

const cards = [
  {
    title: 'Apoio comunitário',
    text: 'Criamos acolhimento e orientação para pessoas que precisam de apoio e direção.',
  },
  {
    title: 'Educação e oportunidade',
    text: 'Fomentamos aprendizado, autonomia e acesso a caminhos mais promissores.',
  },
  {
    title: 'Mobilização coletiva',
    text: 'Conectamos pessoas, parceiros e ações para transformar a comunidade com impacto real.',
  },
];

const stats = [
  { value: '850+', label: 'famílias apoiadas' },
  { value: '40', label: 'parcerias ativas' },
  { value: '14', label: 'campanhas realizadas' },
];

const planos = [
  { name: 'Apoio Mensal', price: 'R$ 29', description: 'Ajude a manter campanhas e atendimento contínuo.', featured: false },
  { name: 'Patrocínio Parceiro', price: 'R$ 99', description: 'Apoie projetos com maior alcance e presença ativa.', featured: true },
  { name: 'Apoio Especial', price: 'R$ 249', description: 'Contribua para iniciativas estratégicas com maior impacto.', featured: false },
];

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink/90">
      <header className="border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
        <div className="section-shell  flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Página inicial">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-base font-bold text-white">
              SJ
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral">SOUJR</div>
              <div className="text-sm text-ink/70">Ação e transformação</div>
            </div>
          </a>

          <nav aria-label="Menu principal" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-ink/80 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#apoio"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/80"
          >
            Apoie agora
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="section-shell  grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-coral/20 bg-coral/20 px-3 py-1 eyebrow text-coral">
              Transformação social
            </span>

            <h1 className="max-w-xl text-4xl font-black leading-tight text-ink md:text-6xl">
              A força da comunidade em favor de quem precisa.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-8 text-ink/70">
              A SOUJR conecta pessoas, ideias e apoio para transformar realidades e gerar impacto em ações sociais, educação e fortalecimento comunitário.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#causa"
                className="inline-flex items-center justify-center rounded-full bg-coral/100 px-6 py-3 text-base font-semibold text-ink shadow-lg shadow-coral/20 transition hover:bg-coral/80"
              >
                Conheça a causa
              </a>
              <a
                href="#apoio"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white px-6 py-3 text-base font-semibold text-ink/90 transition hover:border-ink/30 hover:bg-paper/50"
              >
                Seja apoiador
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-coral/40 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-6 bottom-6 h-36 w-36 rounded-full bg-mint/40 blur-3xl" aria-hidden="true" />

            <div className="relative rounded-[28px] border border-ink/10 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="rounded-[24px] bg-gradient-to-br from-ink via-ink/90 to-coral p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-coral/80">
                    Impacto em ação
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium text-white/90">
                    2026
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-paper/80">Metas em curso</p>
                  <p className="mt-3 text-4xl font-black">+350</p>
                  <p className="mt-2 text-sm text-paper/80">ações e iniciativas em mobilização</p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/8 p-3">
                      <p className="text-xl font-black text-coral/80">{item.value}</p>
                      <p className="mt-1 text-[10px] leading-4 text-paper/80">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="causa" className="bg-white py-12 md:py-20">
          <div className="section-shell ">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-coral">Nossa causa</p>
              <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">
                Mais acesso, mais oportunidades e mais dignidade.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {cards.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-ink/10 bg-paper/50 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/20 text-xl font-bold text-coral">
                    •
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="impacto" className="section-shell  py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow text-coral">Impacto</p>
              <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">
                Resultados construídos com presença real.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                A SOUJR atua para fortalecer comunidades, ampliar oportunidades e criar caminhos de acolhimento e transformação.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['850+', 'famílias apoiadas'],
                ['320', 'moradores alcançados'],
                ['40', 'parcerias ativas'],
                ['14', 'campanhas realizadas'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[26px] border border-ink/10 bg-white p-6 shadow-sm">
                  <p className="text-4xl font-black text-ink">{value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-ink/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="transparencia" className="bg-ink py-12 md:py-20 text-white">
          <div className="section-shell ">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-coral">Transparência</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">Acompanhamento claro em cada etapa.</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ['Relatórios acessíveis', 'Dados e avanços apresentados de forma simples e compreensível.'],
                ['Decisões compartilhadas', 'Tudo é construído com clareza, responsabilidade e comunicação aberta.'],
                ['Uso responsável', 'Cada recurso é pensado para gerar maior impacto com boa gestão.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apoio" className="section-shell  py-12 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-coral">Planos de apoio</p>
            <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">Escolha um jeito de apoiar.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {planos.map((plan) => (
              <article
                key={plan.name}
                className={[
                  'rounded-[30px] border p-7 shadow-sm',
                  plan.featured ? 'border-coral/40 bg-coral/10' : 'border-ink/10 bg-white',
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-ink">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-coral/100 px-2.5 py-1 eyebrow text-ink">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-ink">{plan.price}</span>
                  <span className="pb-1 text-sm text-ink/60">/mês</span>
                </div>

                <p className="mt-5 text-base leading-7 text-ink/70">{plan.description}</p>

                <a
                  href="#contato"
                  className={[
                    'mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition',
                    plan.featured
                      ? 'bg-ink text-white hover:bg-ink/80'
                      : 'border border-ink/20 bg-white text-ink/90 hover:bg-paper/50',
                  ].join(' ')}
                >
                  Escolher plano
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-ink/10 bg-paper">
        <div className="section-shell  flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-coral">SOUJR</p>
            <p className="mt-2 max-w-md text-ink/70">Apoiar ações que ampliam oportunidades, fortalecimento e transformação social.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-ink/70">
            <a href="#causa" className="transition hover:text-ink">Causa</a>
            <a href="#impacto" className="transition hover:text-ink">Impacto</a>
            <a href="#transparencia" className="transition hover:text-ink">Transparência</a>
            <a href="#apoio" className="transition hover:text-ink">Apoio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;