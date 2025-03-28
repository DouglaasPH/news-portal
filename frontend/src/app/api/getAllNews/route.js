import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// Rota GET para buscar todos os nomes das categorias
export async function GET() {
  try {
    const [rows] = await pool.execute(`SELECT * FROM materias`);

    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
