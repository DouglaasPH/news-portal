import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// Rota GET para buscar uma notícia
export async function GET(req, res) {
  const url = new URL(req.url); // Usar a URL para obter os parâmetros da query
  const id = url.searchParams.get('id'); // Acessa o parâmetro id na URL

  try {
    const [rows] = await pool.execute(`SELECT materias.titulo, materias.conteudo, materias.data_publicacao, autores.nome AS autor_nome, categorias.nome AS categoria_nome FROM materias JOIN autores ON materias.autor_id = autores.id JOIN categorias ON materias.categoria_id = categorias.id WHERE materias.id = ?;`, [id]);

    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}