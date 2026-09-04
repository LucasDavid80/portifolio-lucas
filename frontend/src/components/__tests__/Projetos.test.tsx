import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projetos from '../Projetos';

describe('Projetos Component (Destaques da Home)', () => {
  it('deve renderizar o título da seção de destaques', () => {
    render(<Projetos />);
    expect(screen.getByText(/Projetos em/i)).toBeInTheDocument();
    expect(screen.getByText(/Destaque/i)).toBeInTheDocument();
  });

  it('deve exibir o My Roadie Platform com links de código e deploy web', () => {
    render(<Projetos />);
    expect(screen.getByText('My Roadie Platform')).toBeInTheDocument();

    const repoLink = screen.getByRole('link', { name: /Ver Repositório/i });
    expect(repoLink).toHaveAttribute('href', 'https://github.com/LucasDavid80/my-roadie-platform');
    expect(repoLink).toHaveAttribute('target', '_blank');

    const webLink = screen.getByRole('link', { name: /Acessar Web/i });
    expect(webLink).toHaveAttribute('href', 'https://my-roadie-platform.vercel.app');
    expect(webLink).toHaveAttribute('target', '_blank');
  });

  it('deve destacar a metodologia SDD (Spec-Driven Development)', () => {
    render(<Projetos />);
    const sddElements = screen.getAllByText(/SDD/i);
    expect(sddElements.length).toBeGreaterThan(0);
  });

  it('deve exibir o PDF Toolkit com link para o repositório', () => {
    render(<Projetos />);
    expect(screen.getByText('PDF Toolkit')).toBeInTheDocument();
  });

  it('deve ter o botão de navegação para a galeria completa de projetos', () => {
    render(<Projetos />);
    const galeriaLink = screen.getByRole('link', { name: /Ver Todos os Projetos/i });
    expect(galeriaLink).toHaveAttribute('href', '/projetos');
  });
});
