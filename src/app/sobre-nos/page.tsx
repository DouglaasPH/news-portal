export default function SobreNosPage() {
    return (
        <main className='pl-10 pr-10 pt-[1vw] flex justify-between flex-col h-[1400px] sm:h-[1000px] md:h-[1000px] lg:h-[900px] xl:h-[1000px]'>
            {/* Seção: Sobre Nós */}
            <section className="md:h-[90px] lg:h-[100px] xl:h-[100px] flex flex-col justify-between">
                <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Sobre Nós</h1>
                <p className="ml-1 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Somos o seu portal de notícias confiável e atualizado. Nossa missão é levar informação com imparcialidade e responsabilidade, conectando você aos principais acontecimentos do Recife, de Pernambuco e do Brasil.
                </p>
            </section>

            {/* Seção: O que nos define */}
            <section className="md:h-[135px] lg:h-[120px] xl:h-[130px] flex flex-col justify-between">
                <h1 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>O que nos define?</h1>
                <p className="ml-1 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Somos um portal comprometido com o jornalismo sério e transparente. Nossa cobertura é completa e imparcial, trazendo notícias verificadas e aprofundadas. Acreditamos na inovação e utilizamos tecnologia para entregar a melhor experiência de comunicação. Nosso compromisso é sempre com a verdade, garantindo que o leitor tenha acesso a informações confiáveis e bem apuradas.
                </p>
            </section>            

            {/* Seção: Nossa Missão */}
            <section className="md:h-[110px] lg:h-[98px] xl:h-[100px] flex flex-col justify-between">
                <h1 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Nossa Missão</h1>
                <p className="ml-1 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Nosso objetivo é informar com qualidade e rapidez, oferecendo um jornalismo acessível e relevante para o dia a dia dos nossos leitores. Trabalhamos para que cada notícia contribua para a construção de uma sociedade mais informada e consciente.
                </p>
            </section>                        

            {/* Seção: Nossa Visão */}
            <section className="md:h-[95px] lg:h-[98px] xl:h-[100px] flex flex-col justify-between">
                <h1 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Nossa Visão</h1>
                <p className="ml-1 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Queremos ser referência em notícias locais e nacionais, sendo reconhecidos pela credibilidade e inovação. Buscamos aprimorar constantemente nossos métodos para oferecer a melhor cobertura jornalística possível.
                </p>
            </section>

            {/* Seção: Nossos Valores */}
            <section className="md:h-[130px] lg:h-[125px] xl:h-[130px] flex flex-col justify-between">
                <h1 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Nossos Valores</h1>
                <p className="ml-1 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Acreditamos na transparência e trabalhamos para que a notícia seja entregue sem distorções. Valorizamos a agilidade, mantendo nossa audiência informada em tempo real. Prezamos pela qualidade do conteúdo, garantindo que todas as informações sejam verificadas e confiáveis. Além disso, buscamos sempre engajar e conectar pessoas ao conhecimento, contribuindo para um debate saudável e construtivo.
                </p>
            </section>
            
            {/* Seção: Fale Conosco */}
            <section className="md:h-[150px] lg:h-[145px] xl:h-[125px] flex flex-col justify-between">
                <h1 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Fale Conosco</h1>
                <p className="ml-1 sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                    Se você deseja entrar em contato, sugerir pautas ou tirar dúvidas, estamos à disposição. Nosso e-mail é contato@portal_de_notícias.com.br e também estamos disponíveis pelo telefone (81) 99999-9999. Nosso escritório fica localizado na Rua da Informação, 123, no Recife - PE. Acompanhe nossas atualizações e fique sempre bem informado através das nossas redes sociais. Estamos no Facebook como /PortalDeNoticias, no Instagram como @PortalDeNoticias e no Twitter como @PortalDeNoticias.                    
                </p>
            </section>            
        </main>
    )
}