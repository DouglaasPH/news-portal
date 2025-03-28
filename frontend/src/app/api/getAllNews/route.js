import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// Rota GET para buscar todos os nomes das categorias
export async function GET() {
  try {
    const [rows] = await pool.execute(`SELECT materias.id, materias.titulo, materias.conteudo, materias.data_publicacao, autores.nome FROM materias JOIN autores ON materias.autor_id = autores.id ORDER BY materias.id DESC`);

    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
