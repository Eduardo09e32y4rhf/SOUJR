const navItems = [
  { label: 'Causa', href: '#causa' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Transparência', href: '#transparencia' },
  { label: 'Apoio', href: '#apoio' },
];

const planos = [
  { name: 'Apoio', price: 'R$ 2', description: 'Acesso ao grupo e aos projetos da SouJúnior', featured: false },
  { name: 'Iniciante em TI', price: 'R$ 5', description: 'Guia Iniciante em TI — material exclusivo para apoiadores', featured: true },
  { name: 'Hackathon', price: 'R$ 9', description: 'Participação nos hackathons oficiais da SouJúnior', featured: false },
];

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink/90">
      <header className="border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
        <div className="section-shell flex items-center justify-between py-4">
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
                className="text-sm font-medium text-ink/80 transition hover:text-ink"
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
        <section id="inicio" className="section-shell grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-coral/20 bg-coral/20 px-3 py-1 eyebrow text-coral">
              Transformação social
            </span>

            <h1 className="max-w-xl text-4xl font-black leading-tight text-ink md:text-6xl">
              O júnior de hoje transforma o amanhã.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-8 text-ink/70">
              A SouJúnior é uma comunidade que forma profissionais de tecnologia em início de carreira através de mentoria, projetos reais e um ambiente seguro pra aprender. Seu apoio mantém esse movimento vivo — e cresce junto com cada pessoa que ele impacta.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://apoia.se/soujunior"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-semibold text-white shadow-lg shadow-ink/20 transition hover:bg-ink/80"
              >
                Apoiar no Apoia.se
              </a>
              <a
                href="#impacto"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-coral px-6 py-3 text-base font-semibold text-ink transition hover:bg-coral/80"
              >
                Conheça nosso impacto
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="flex h-64 w-full max-w-[320px] items-center justify-center rounded-3xl bg-paper/50 border-2 border-dashed border-ink/20 md:h-96 md:max-w-md lg:max-w-lg">
              <span className="text-sm font-medium text-ink/40">Espaço para imagem (Mascote)</span>
            </div>
          </div>
        </section>

        <section id="causa" className="bg-white py-12 md:py-20">
          <div className="section-shell ">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-coral">Causa</p>
              <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">
                Por que a SouJúnior precisa do seu apoio
              </h2>
            </div>

            <div className="mt-8 max-w-3xl mx-auto text-left md:text-center text-lg leading-8 text-ink/70">
              <p>
                A SouJúnior nasceu em 2022, da percepção do fundador Wouerner Brandão de que faltava aos profissionais juniores algo que nenhum curso oferece: a chance de trabalhar em um projeto real, em equipe, do jeito que acontece de fato em uma empresa de tecnologia — não apenas tirar dúvidas ou assistir a mais um conteúdo.
              </p>
              <p className="mt-4">
                Isso já acontece hoje em iniciativas como o SouJúnior Labs, onde juniores colocam a mão na massa em projetos reais, e o SouJúnior Talk, onde praticam inglês com outras pessoas da comunidade. Manter essa estrutura no ar — servidores, domínio e ferramentas — tem um custo real.
              </p>
              <p className="mt-4">
                O apoio da comunidade ajuda a manter essas iniciativas disponíveis para quem está começando.
              </p>
              <p className="mt-8 font-semibold text-ink">
                Cada apoio, a partir de R$ 2, ajuda a manter essa porta aberta para o próximo júnior.
              </p>
            </div>
          </div>
        </section>

        <section id="impacto" className="section-shell py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow text-coral">Impacto</p>
              <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">
                O impacto é real — e mensurável
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                Esses números não são só estatísticas: são pessoas que hoje trabalham na área, mentores que decidiram compartilhar conhecimento e projetos que seguem formando a próxima geração.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['+50', 'pessoas empregadas'],
                ['120', 'membros na comunidade'],
                ['35', 'mentores ativos'],
                ['3', 'projetos em desenvolvimento'],
                ['108', 'apoiadores'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[26px] border border-ink/10 bg-white p-6 shadow-sm">
                  <p className="text-4xl font-black text-ink">{value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-ink/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="bg-paper py-12 md:py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-coral">Depoimentos</p>
              <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">O que dizem sobre nós</h2>
              <p className="mt-4 text-lg text-ink/70">Histórias reais de quem construiu sua base e hoje trilha seu caminho no mercado de tecnologia através da nossa comunidade.</p>
            </div>


            <div className="mt-12 text-center border-2 border-dashed border-ink/20 rounded-[28px] p-12 bg-white/50">
              <p className="text-lg font-semibold text-ink/70">
                [Depoimentos reais pendentes de integração]
              </p>
              <p className="mt-2 text-sm text-ink/50">
                * Conforme as regras de negócio: Utilizar somente depoimentos reais publicados no site oficial. Não inserir textos fictícios.
              </p>
            </div>

          </div>
        </section>


        <section id="transparencia" className="bg-ink py-12 md:py-20 text-white">
          <div className="section-shell ">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-coral">Transparência</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">Para onde vai o seu apoio</h2>
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-lg leading-8 text-white/70">
                Seu apoio ajuda a manter a infraestrutura que faz a SouJúnior acontecer. Em 2026, já foram R$ 1.849,59 em custos com serviços como AWS, Vultr, DigitalOcean e domínio.
              </p>

              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-4xl font-black text-white">R$ 1.849,59</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-white/50">em infraestrutura em 2026</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold text-coral">
                  <span>AWS</span> <span className="text-white/20">•</span>
                  <span>Vultr</span> <span className="text-white/20">•</span>
                  <span>DigitalOcean</span> <span className="text-white/20">•</span>
                  <span>Domínio</span>
                </div>
              </div>

              <p className="mt-12 text-lg leading-8 text-white/70">
                É essa estrutura que mantém a comunidade, os projetos e as iniciativas da SouJúnior funcionando para quem está começando. A partir de R$ 2, você também pode ajudar a manter esse movimento.
              </p>

              <div className="mt-8">
                <a
                  href="https://apoia.se/soujunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-4 text-lg font-bold text-ink transition hover:bg-coral/80"
                >
                  Apoiar no Apoia.se
                </a>
              </div>
            </div>

          </div>
        </section>

        <section id="apoio" className="section-shell py-12 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-coral">Planos de apoio</p>
            <h2 className="mt-4 text-3xl font-black text-ink md:text-5xl">Escolha como apoiar</h2>
            <p className="mt-4 text-lg text-ink/70">Cada nível oferece um retorno diferente — e todo apoio contribui para manter a SouJúnior funcionando.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {planos.map((plan) => (
              <article
                key={plan.name}
                className={[
                  'rounded-[30px] border p-7 shadow-sm flex flex-col',
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

                <p className="mt-5 text-base leading-7 text-ink/70 flex-grow">{plan.description}</p>

                <a
                  href="https://apoia.se/soujunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    'mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-bold transition',
                    plan.featured
                      ? 'bg-ink text-white hover:bg-ink/80'
                      : 'border border-ink/20 bg-white text-ink/90 hover:bg-paper/50',
                  ].join(' ')}
                >
                  Apoiar no Apoia.se
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-ink/70 max-w-2xl mx-auto">
              A participação nas atividades da SouJúnior é gratuita. Apoiar é uma forma voluntária de contribuir para que esse espaço continue aberto para quem está começando.
            </p>
          </div>
        </section>

      </main>

      <footer id="contato" className="border-t border-ink/10 bg-paper">
        <div className="section-shell flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="eyebrow text-coral">SOUJR</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">
              Junte-se a mais de 100 apoiadores mantendo esse movimento.
            </p>
            <a
              href="https://apoia.se/soujunior"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/80"
            >
              Apoiar no Apoia.se
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-ink/70">
            <a href="https://apoia.se/soujunior" target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">Apoia.se</a>
            <a href="https://github.com/SouJunior" target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">GitHub</a>
            <a href="https://discord.gg/soujunior" target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">Discord</a>
            <a href="https://chat.whatsapp.com/soujunior" target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;