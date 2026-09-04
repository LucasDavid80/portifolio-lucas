import { Test, TestingModule } from '@nestjs/testing';
import { ProjetoController } from './projeto.controller';
import { ProjetoPrisma } from './projeto.prisma';

describe('ProjetoController', () => {
  let controller: ProjetoController;
  let mockRepo: Partial<ProjetoPrisma>;

  const mockProjetos = [
    {
      id: 1,
      nome: 'My Roadie Platform',
      descricao: 'Plataforma musical',
      imagens: ['/img1.png'],
      nivel: 1,
      tipo: 'fullstack',
      destaque: true,
      repositorio: 'https://github.com/LucasDavid80/my-roadie-platform',
      tecnologias: [],
    },
  ];

  beforeEach(async () => {
    mockRepo = {
      obterTodos: jest.fn().mockResolvedValue(mockProjetos),
      obterPorId: jest.fn().mockImplementation((id: number) => {
        const projeto = mockProjetos.find((p) => p.id === id);
        return Promise.resolve(projeto || null);
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjetoController],
      providers: [
        {
          provide: ProjetoPrisma,
          useValue: mockRepo,
        },
      ],
    }).compile();

    controller = module.get<ProjetoController>(ProjetoController);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('obterTodos', () => {
    it('deve retornar a lista de projetos cadastrados', async () => {
      const resultado = await controller.obterTodos();
      expect(resultado).toEqual(mockProjetos);
      expect(mockRepo.obterTodos).toHaveBeenCalledTimes(1);
    });
  });

  describe('obterPorId', () => {
    it('deve retornar o projeto correspondente ao ID informado', async () => {
      const resultado = await controller.obterPorId(1);
      expect(resultado).toEqual(mockProjetos[0]);
      expect(mockRepo.obterPorId).toHaveBeenCalledWith(1);
    });

    it('deve retornar null se o ID não existir', async () => {
      const resultado = await controller.obterPorId(999);
      expect(resultado).toBeNull();
      expect(mockRepo.obterPorId).toHaveBeenCalledWith(999);
    });
  });
});
