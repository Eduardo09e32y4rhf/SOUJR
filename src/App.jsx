// Links principais usados pela navegacao fixa da landing page.
const navigation = [
  ['A causa', '#causa'],
  ['Como funciona', '#jornada'],
  ['Impacto', '#impacto'],
  ['Dúvidas', '#duvidas'],
]

// As tres etapas deixam a proposta facil de entender durante uma apresentacao.
const journey = [
  { number: '01', title: 'Chegue com uma dúvida', description: 'Você entra na comunidade mesmo sem saber exatamente qual deve ser o próximo passo.' },
  { number: '02', title: 'Construa com apoio', description: 'Mentores e outros juniores compartilham repertório, feedback e caminhos possíveis.' },
  { number: '03', title: 'Mostre o que aprendeu', description: 'Cada projeto vira prática, portfólio e confiança para buscar novas oportunidades.' },
]

// Trilhas de atuacao apresentadas como cards, sem depender de um back-end.
const tracks = [
  ['01', 'Produto & UX', 'Aprenda a transformar problemas reais em experiencias mais simples.', '36 encontros'],
  ['02', 'Desenvolvimento', 'Pratique codigo em projetos colaborativos e revisoes de pull request.', '18 squads'],
  ['03', 'Carreira', 'Organize seu portfolio, sua apresentacao e seus proximos movimentos.', 'Aberto sempre'],
]

// Depoimentos curtos ajudam a tornar o resultado da comunidade mais concreto.
const testimonials = [
  ['“Eu parei de estudar sozinho e comecei a construir com intenção.”', 'Marina Alves', 'Front-end junior'],
  ['“O primeiro projeto do meu portfólio nasceu dentro de uma squad.”', 'Caio Nunes', 'Product designer junior'],
]

// Perguntas frequentes resolvidas com o elemento nativo details, sem estado extra.
const faqs = [
  ['Preciso já saber programar?', 'Não. A comunidade acolhe quem está começando e ajuda você a descobrir uma trilha possível.'],
  ['Como o apoio é utilizado?', 'Ele ajuda a manter ferramentas, encontros, organização dos projetos e espaços gratuitos para a comunidade.'],
  ['Posso participar como mentor?', 'Sim. Pessoas com experiência podem contribuir com encontros, revisões, conteúdo e orientação de carreira.'],
]

// Componente raiz da experiencia publica da SouJunior.
function App() {
  return (
    <main className="overflow-hidden bg-paper text-ink">
      {/* Navegacao: ancora o visitante nas partes principais da apresentacao. */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 text-sm font-bold tracking-[0.16em] text-white"><span className="grid size-9 place-items-center rounded-full bg-coral text-sm text-ink">SJ</span>SOU<span className="text-coral">JUNIOR</span></a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex" aria-label="Navegacao principal">
            {navigation.map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}
          </nav>
          <a href="https://apoia.se/soujunior" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-coral hover:bg-coral hover:text-ink">Apoiar a causa</a>
        </div>
      </header>

      {/* 01. Hero: apresenta o movimento com uma composicao editorial e visual. */}
      <section id="inicio" className="relative isolate min-h-[760px] bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_26%,rgba(242,111,81,0.28),transparent_27%),linear-gradient(115deg,#17211f_0%,#1f302b_54%,#345049_100%)]" />
        <div className="absolute right-[-11rem] top-32 -z-10 size-[32rem] rounded-full border border-white/10 lg:right-[-7rem]" />
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-coral"><span className="h-px w-10 bg-coral" /> Comunidade para quem esta comecando</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[5.4rem]">Seu comeco pode ser <span className="text-coral">coletivo.</span></h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/65">A SouJunior transforma estudo solitario em pratica compartilhada, com mentorias, projetos reais e gente caminhando na mesma direcao.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href="https://apoia.se/soujunior" target="_blank" rel="noreferrer" className="rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#ff8a6f]">Quero fazer parte <span aria-hidden="true">↗</span></a><a href="#jornada" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/60">Entender o projeto</a></div>
            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-white/35">Uma comunidade aberta desde 2020</p>
          </div>

          {/* O cartao sobreposto funciona como uma previa visual do ecossistema. */}
          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto"><div className="absolute -left-5 top-10 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur md:block"><p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Proxima atividade</p><p className="mt-1 text-sm font-bold">Portfolio review <span className="ml-2 text-coral">• hoje</span></p></div><div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#f7f2e9] p-3 shadow-2xl shadow-black/20"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Pessoas colaborando em uma mesa de trabalho" className="h-64 w-full rounded-[1.4rem] object-cover grayscale-[20%]" /><div className="grid grid-cols-[1fr_auto] gap-4 p-5 text-ink"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Na pratica</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Aprender fazendo.</h2></div><span className="self-end rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">+ impacto</span></div><div className="flex items-end justify-between border-t border-ink/10 px-5 pb-2 pt-4"><div className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-[#dd9f7e] text-xs font-bold">MA</span><span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-[#8ea99d] text-xs font-bold">CN</span><span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-[#d4c075] text-xs font-bold">+4</span></div><p className="text-xs font-bold text-ink/50">Squad aberta</p></div></div></div>
        </div>
      </section>

      {/* 02. Faixa de confianca: cria ritmo e resume o tamanho da rede. */}
      <section className="border-b border-ink/10 bg-coral px-5 py-5 text-ink"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.15em] lg:px-3"><span>+15 mil pessoas impactadas</span><span className="hidden text-ink/40 sm:inline">✦</span><span>+50 projetos publicados</span><span className="hidden text-ink/40 sm:inline">✦</span><span>+200 voluntarios ativos</span></div></section>

      {/* 03. A causa: explica o problema sem transformar a pagina em um texto longo. */}
      <section id="causa" className="bg-paper px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">02 / A causa</p><h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">Comecar na tecnologia nao deveria parecer um labirinto.</h2></div><div className="max-w-xl lg:pb-2"><p className="text-xl leading-8 text-ink/65">Existe talento em todo lugar. O que falta, muitas vezes, e acesso: a uma conversa honesta, a um primeiro projeto e a alguem que diga “vamos tentar juntos”.</p><p className="mt-6 border-l-2 border-coral pl-5 text-sm font-bold leading-6 text-ink/70">E por isso que a SouJunior existe: para diminuir a distancia entre vontade de aprender e oportunidade de praticar.</p></div></div></section>

      {/* 04. Jornada: mostra o metodo em tres passos faceis de apresentar. */}
      <section id="jornada" className="bg-mint px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">03 / A jornada</p><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">Um caminho simples para sair do “ainda nao”.</h2></div><p className="max-w-xs text-sm leading-6 text-ink/60">Voce nao precisa chegar pronto. So precisa chegar disposto a construir.</p></div><div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">{journey.map((step) => <article key={step.number} className="bg-mint p-7 transition hover:bg-paper md:p-9"><p className="font-mono text-sm text-coral">{step.number}</p><h3 className="mt-20 text-2xl font-bold tracking-tight">{step.title}</h3><p className="mt-4 text-sm leading-6 text-ink/60">{step.description}</p></article>)}</div></div></section>

      {/* 05. Trilhas: apresenta as areas da comunidade como um pequeno produto. */}
      <section id="trilhas" className="bg-paper px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">04 / Trilhas abertas</p><div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">Escolha onde colocar a mao na massa.</h2><a href="#apoio" className="text-sm font-bold underline decoration-coral decoration-2 underline-offset-4">Ver como apoiar ↗</a></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{tracks.map(([number, title, description, detail], index) => <article key={title} className={`group min-h-[320px] rounded-3xl p-7 ${index === 1 ? 'bg-ink text-white' : 'bg-white shadow-[0_12px_50px_rgba(25,35,32,0.06)]'}`}><div className="flex items-start justify-between"><span className="font-mono text-sm text-coral">{number}</span><span className="rounded-full border border-current/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] opacity-50">{detail}</span></div><div className="mt-24"><h3 className="text-2xl font-bold tracking-tight">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 opacity-60">{description}</p></div></article>)}</div></div></section>

      {/* 06. Impacto: painel visual com dados faceis de substituir por dados reais. */}
      <section id="impacto" className="bg-ink px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-coral">05 / O impacto</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-5xl">Pequenas evolucoes. Uma rede inteira crescendo.</h2><p className="mt-6 max-w-md text-base leading-7 text-white/55">Os numeros contam uma parte da historia. A outra esta em cada pessoa que encontrou coragem para publicar o primeiro projeto.</p></div><div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4"><div className="bg-white/5 p-6 sm:col-span-2"><p className="text-5xl font-bold text-coral">15k</p><p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/50">pessoas impactadas</p><div className="mt-12 h-1 rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-coral" /></div></div><div className="bg-white/5 p-6"><p className="text-3xl font-bold">50+</p><p className="mt-3 text-xs leading-5 text-white/50">projetos open-source</p></div><div className="bg-white/5 p-6"><p className="text-3xl font-bold">200+</p><p className="mt-3 text-xs leading-5 text-white/50">voluntarios</p></div><div className="bg-white/5 p-6 sm:col-span-2"><p className="text-3xl font-bold text-coral">100%</p><p className="mt-3 text-xs leading-5 text-white/50">foco em abrir caminhos</p></div><div className="bg-coral p-6 text-ink sm:col-span-2"><p className="text-sm font-bold leading-6">“Ninguem cresce sozinho.”</p><p className="mt-8 text-xs font-bold uppercase tracking-[0.12em] opacity-60">Principio SouJunior</p></div></div></div></section>

      {/* 07. Vozes: depoimentos humanizam os resultados apresentados anteriormente. */}
      <section className="bg-paper px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">06 / Quem vive</p><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">Nao e sobre assistir de fora.</h2><div className="mt-12 grid gap-5 md:grid-cols-2">{testimonials.map(([quote, name, role]) => <figure key={name} className="rounded-3xl bg-white p-8 shadow-[0_12px_50px_rgba(25,35,32,0.06)]"><blockquote className="text-2xl font-bold leading-tight tracking-tight">{quote}</blockquote><figcaption className="mt-16 flex items-center gap-3 text-sm"><span className="grid size-10 place-items-center rounded-full bg-mint font-bold">{name.split(' ').map((part) => part[0]).join('')}</span><span><strong className="block">{name}</strong><span className="text-ink/50">{role}</span></span></figcaption></figure>)}</div></div></section>

      {/* 08. Apoio: transforma a narrativa em uma acao clara para o visitante. */}
      <section id="apoio" className="bg-coral px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">07 / Faca parte</p><h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-7xl">Seu apoio vira espaco para alguem comecar.</h2></div><a href="https://apoia.se/soujunior" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1">Apoiar a SouJunior <span className="ml-3 text-coral">↗</span></a></div></section>

      {/* 09. Duvidas: encerra objecoes antes da chamada final. */}
      <section id="duvidas" className="bg-paper px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">08 / Duvidas</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-5xl">Pode perguntar.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-ink/60">Um projeto acessivel tambem precisa ser transparente para quem esta chegando.</p></div><div className="divide-y divide-ink/10 border-y border-ink/10">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">{question}<span className="text-2xl font-normal text-coral transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 text-sm leading-6 text-ink/60">{answer}</p></details>)}</div></div></section>

      {/* 10. Rodape: ultima chamada e canais oficiais da comunidade. */}
      <footer className="bg-ink px-5 py-14 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end"><div><p className="eyebrow text-coral">09 / Ate a proxima</p><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">A proxima historia pode ser a sua.</h2></div><a href="https://discord.gg/FkBcf3vdQZ" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition hover:border-coral hover:text-coral">Entrar no Discord ↗</a></div><div className="flex flex-col justify-between gap-5 pt-7 text-xs text-white/45 sm:flex-row"><p>© 2026 SouJunior. Feito pela comunidade.</p><nav className="flex gap-5" aria-label="Canais da comunidade"><a href="https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a><a href="https://github.com/SouJunior" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a><a href="#inicio" className="hover:text-white">Voltar ao topo ↑</a></nav></div></div></footer>
    </main>
  )
}

export default App
