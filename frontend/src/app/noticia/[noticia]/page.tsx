export default function NoticiaPage({ params }: { params: {noticia: string} }) {
    return (
        <h1>{ params.noticia }</h1>
    )
}