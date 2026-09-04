import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjetosPage from '../page';

describe('ProjetosPage (Galeria de Projetos)', () => {
  it('deve renderizar o título principal da galeria', () => {
    render(<ProjetosPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Galeria de/i })).toBeInTheDocument();
  });

  it('deve exibir os botões de filtro por categoria', () => {
    render(<ProjetosPage />);
    expect(screen.getByRole('button', { name: /Todos os Projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Full-Stack & Web/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Mobile & Desktop/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Inteligência Artificial/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Acadêmico & Otimização/i })).toBeInTheDocument();
  });

  it('deve filtrar os projetos ao clicar na categoria "Inteligência Artificial"', () => {
    render(<ProjetosPage />);

    // Clica no filtro de IA
    const botaoIA = screen.getByRole('button', { name: /Inteligência Artificial/i });
    fireEvent.click(botaoIA);

    // Projetos de IA devem estar presentes
    expect(screen.getByText('IA Pinguim')).toBeInTheDocument();
    expect(screen.getByText('Project mAInd')).toBeInTheDocument();

    // Projetos fora de IA não devem estar no DOM
    expect(screen.queryByText('Simplex Solver')).not.toBeInTheDocument();
    expect(screen.queryByText('PDF Toolkit')).not.toBeInTheDocument();
  });

  it('deve filtrar os projetos ao clicar na categoria "Mobile & Desktop"', () => {
    render(<ProjetosPage />);

    const botaoMobile = screen.getByRole('button', { name: /Mobile & Desktop/i });
    fireEvent.click(botaoMobile);

    expect(screen.getByText('PDF Toolkit')).toBeInTheDocument();
    expect(screen.getByText('Tech Taste')).toBeInTheDocument();
    expect(screen.queryByText('IA Pinguim')).not.toBeInTheDocument();
  });

  it('deve voltar a exibir todos os projetos ao clicar em "Todos os Projetos"', () => {
    render(<ProjetosPage />);

    // Filtra primeiro
    const botaoMobile = screen.getByRole('button', { name: /Mobile & Desktop/i });
    fireEvent.click(botaoMobile);
    expect(screen.queryByText('IA Pinguim')).not.toBeInTheDocument();

    // Volta para Todos
    const botaoTodos = screen.getByRole('button', { name: /Todos os Projetos/i });
    fireEvent.click(botaoTodos);

    expect(screen.getByText('IA Pinguim')).toBeInTheDocument();
    expect(screen.getByText('PDF Toolkit')).toBeInTheDocument();
    expect(screen.getByText('My Roadie Platform')).toBeInTheDocument();
  });
});
