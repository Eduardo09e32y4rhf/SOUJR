// Conteúdo reutilizável dos cards que explicam como a comunidade gera impacto.
const benefits = [
  {
    title: 'Mentorias gratuitas',
    description: 'Conectamos profissionais juniores a pessoas experientes que ajudam a transformar dúvidas em próximos passos.',
  },
  {
    title: 'Projetos open-source',
    description: 'Criamos oportunidades para ganhar experiência prática, colaborar em equipe e construir um portfólio real.',
  },
]

// Indicadores exibidos na seção de transparência e resultados da comunidade.
const impact = [
  ['+15k', 'pessoas impactadas'],
  ['+50', 'repositórios'],
  ['+200', 'voluntários'],
]

// Componente raiz da página pública da SouJunior.
function App() {
  return (
    <main>
      {/* Hero: apresenta a causa e direciona o visitante para o Apoia.se. */}
      <section className="bg-roxo px-4 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amarelo">Comunidade SouJunior</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Transforme vidas com a SouJunior</h1>
          <p className="mx-auto mb-9 max-w-2xl text-lg leading-8 text-purple-100 md:text-xl">
            Ajude a manter nossas mentorias e projetos gratuitos para profissionais de tecnologia em início de carreira.
          </p>
          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-amarelo px-8 py-3 text-lg font-bold text-white transition hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Apoiar agora (a partir de R$ 2)
          </a>
        </div>
      </section>

      {/* Benefícios: mostra por que o apoio financeiro é importante. */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-roxo">Por que nos apoiar?</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* O conteúdo vem do array para facilitar futuras inclusões ou alterações. */}
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-lg bg-white p-6 shadow-lg shadow-purple-950/5">
              <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
              <p className="leading-7 text-gray-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Impacto: exibe números resumidos que ajudam na transparência da iniciativa. */}
      <section className="bg-purple-100 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-roxo">Nosso impacto</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {/* Cada item combina um valor de impacto com seu respectivo rótulo. */}
            {impact.map(([value, label]) => (
              <div key={label} className="w-48 rounded-lg bg-white p-6 shadow-lg shadow-purple-950/5">
                <h3 className="text-4xl font-bold text-roxo">{value}</h3>
                <p className="mt-2 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé: reúne os canais oficiais para participação na comunidade. */}
      <footer className="bg-gray-900 px-4 py-8 text-center text-white">
        <p className="mb-4">Faça parte do nosso ecossistema:</p>
        <nav className="mb-4 flex justify-center gap-4" aria-label="Links da comunidade">
          <a href="https://discord.gg/FkBcf3vdQZ" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">Discord</a>
          <span aria-hidden="true">|</span>
          <a href="https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">WhatsApp</a>
          <span aria-hidden="true">|</span>
          <a href="https://github.com/SouJunior" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">GitHub</a>
        </nav>
        <p className="text-sm text-gray-500">&copy; 2026 SouJunior. Feito pela comunidade.</p>
      </footer>
    </main>
  )
}

export default App