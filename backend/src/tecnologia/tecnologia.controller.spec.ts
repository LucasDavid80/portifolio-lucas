import { Test, TestingModule } from '@nestjs/testing';
import { TecnologiaController } from './tecnologia.controller';
import { TecnologiaPrisma } from './tecnologia.prisma';

describe('TecnologiaController', () => {
  let controller: TecnologiaController;
  let mockRepo: Partial<TecnologiaPrisma>;

  const mockTecnologias = [
    {
      id: 1,
      nome: 'Flutter',
      descricao: 'Framework para desenvolvimento mobile e desktop',
      imagem: 'https://example.com/flutter.svg',
      destaque: true,
    },
    {
      id: 2,
      nome: 'Next.js',
      descricao: 'Framework React para web',
      imagem: 'https://example.com/next.svg',
      destaque: true,
    },
    {
      id: 3,
      nome: 'HTML',
      descricao: 'Marcação web',
      imagem: 'https://example.com/html.svg',
      destaque: false,
    },
  ];

  beforeEach(async () => {
    mockRepo = {
      obterTodas: jest.fn().mockResolvedValue(mockTecnologias),
      obterDestaques: jest
        .fn()
        .mockResolvedValue(mockTecnologias.filter((t) => t.destaque)),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecnologiaController],
      providers: [
        {
          provide: TecnologiaPrisma,
          useValue: mockRepo,
        },
      ],
    }).compile();

    controller = module.get<TecnologiaController>(TecnologiaController);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('obterTodas', () => {
    it('deve retornar todas as tecnologias', async () => {
      const resultado = await controller.obterTodas();
      expect(resultado).toEqual(mockTecnologias);
      expect(mockRepo.obterTodas).toHaveBeenCalledTimes(1);
    });
  });

  describe('obterDestaques', () => {
    it('deve retornar apenas tecnologias marcadas com destaque', async () => {
      const resultado = await controller.obterDestaques();
      expect(resultado).toHaveLength(2);
      expect(resultado.every((t) => t.destaque)).toBe(true);
      expect(mockRepo.obterDestaques).toHaveBeenCalledTimes(1);
    });
  });
});
