import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// Rota GET para buscar uma notícia
export async function GET(req, res) {
  const url = new URL(req.url); // Usar a URL para obter os parâmetros da query
  const id = url.searchParams.get('id'); // Acessa o parâmetro id na URL

  try {
    const [rows] = await pool.execute(`SELECT * FROM materias WHERE categoria_id = ?`, [id]);
    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
