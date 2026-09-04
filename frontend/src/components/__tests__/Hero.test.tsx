import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('deve renderizar a apresentação com o nome Lucas David', () => {
    render(<Hero />);
    expect(screen.getByText(/Lucas David/i)).toBeInTheDocument();
  });

  it('deve possuir o link correto para o currículo na pasta pública', () => {
    render(<Hero />);
    const curriculoLink = screen.getByRole('link', { name: /Baixar Currículo/i });
    expect(curriculoLink).toBeInTheDocument();
    expect(curriculoLink).toHaveAttribute('href', '/curriculo/Curriculo_Lucas_David.pdf');
    expect(curriculoLink).toHaveAttribute('target', '_blank');
  });

  it('deve conter o link para a seção de projetos', () => {
    render(<Hero />);
    const projetosLink = screen.getByRole('link', { name: /Ver Projetos/i });
    expect(projetosLink).toHaveAttribute('href', '#projetos');
  });
});
