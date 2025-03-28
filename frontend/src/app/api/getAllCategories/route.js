import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// Rota GET para buscar todos os nomes das categorias
export async function GET() {
  try {
    const [rows] = await pool.execute(`SELECT CONCAT('[', GROUP_CONCAT(QUOTE(nome)), ']') AS nomes FROM categorias`);

    // Substitui aspas simples por aspas duplas para tornar a string um JSON válido
    const arrayNomes = JSON.parse(rows[0].nomes.replace(/'/g, '"'));    

    return NextResponse.json(arrayNomes);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
