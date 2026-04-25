export type MenuItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagem cuidadosa e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery.',
    capa: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
    cardapio: [
      {
        id: 1,
        foto: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80',
        preco: 60.0,
        nome: 'Sushi Especial',
        descricao: 'Combinado com 20 peças selecionadas pelo chef, incluindo salmão, atum e camarão.',
        porcao: '1 a 2 pessoas'
      },
      {
        id: 2,
        foto: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80',
        preco: 45.0,
        nome: 'Sashimi de Salmão',
        descricao: 'Fatias finas de salmão fresco servidas com molho especial da casa.',
        porcao: '1 pessoa'
      },
      {
        id: 3,
        foto: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
        preco: 55.0,
        nome: 'Temaki Filadélfia',
        descricao: 'Temaki recheado com salmão, cream cheese e cebolinha, crocante por fora.',
        porcao: '1 pessoa'
      },
      {
        id: 4,
        foto: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80',
        preco: 70.0,
        nome: 'Hot Roll',
        descricao: 'Rolinhos empanados e fritos com recheio cremoso de salmão e cream cheese.',
        porcao: '1 a 2 pessoas'
      },
      {
        id: 5,
        foto: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=80',
        preco: 38.0,
        nome: 'Gyoza',
        descricao: 'Pastéis japoneses recheados com carne suína e legumes, grelhados na chapa.',
        porcao: '1 pessoa'
      },
      {
        id: 6,
        foto: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
        preco: 42.0,
        nome: 'Uramaki Skin',
        descricao: 'Uramaki com skin de salmão crocante, cream cheese e cebolinha.',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas artesanais, pizzas assadas em forno a lenha e risotos cremosos. Nossos ingredientes são selecionados para garantir o verdadeiro sabor da Itália em cada mordida.',
    capa: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80',
    cardapio: [
      {
        id: 7,
        foto: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80',
        preco: 65.0,
        nome: 'Lasanha Bolonhesa',
        descricao: 'Camadas de massa fresca com molho bolonhesa, bechamel e queijo gratinado.',
        porcao: '1 a 2 pessoas'
      },
      {
        id: 8,
        foto: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        preco: 50.0,
        nome: 'Pizza Margherita',
        descricao: 'Clássica pizza com molho de tomate San Marzano, mozzarella e manjericão fresco.',
        porcao: '1 a 2 pessoas'
      },
      {
        id: 9,
        foto: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80',
        preco: 55.0,
        nome: 'Fettuccine Alfredo',
        descricao: 'Fettuccine al dente com molho cremoso de parmesão e manteiga.',
        porcao: '1 pessoa'
      },
      {
        id: 10,
        foto: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
        preco: 72.0,
        nome: 'Risoto de Funghi',
        descricao: 'Risoto cremoso com mix de cogumelos frescos e queijo parmesão.',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Sabor do Brasil',
    destacado: true,
    tipo: 'Brasileira',
    avaliacao: 4.7,
    descricao:
      'Saboreie o melhor da culinária brasileira com nosso delivery! Feijoada completa, moqueca baiana e churrasco de primeira. Pratos feitos com carinho e ingredientes frescos que trazem o verdadeiro sabor do Brasil para a sua mesa.',
    capa: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    cardapio: [
      {
        id: 11,
        foto: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&q=80',
        preco: 80.0,
        nome: 'Feijoada Completa',
        descricao: 'Feijoada tradicional com arroz, couve, farofa, torresmo e laranja.',
        porcao: '2 a 3 pessoas'
      },
      {
        id: 12,
        foto: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80',
        preco: 75.0,
        nome: 'Picanha na Brasa',
        descricao: 'Picanha grelhada na brasa servida com arroz, feijão tropeiro e vinagrete.',
        porcao: '1 a 2 pessoas'
      },
      {
        id: 13,
        foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80',
        preco: 68.0,
        nome: 'Moqueca Baiana',
        descricao: 'Moqueca de peixe com leite de coco, dendê, pimentões e coentro fresco.',
        porcao: '2 pessoas'
      }
    ]
  },
  {
    id: 4,
    titulo: 'Bangkok Street',
    destacado: false,
    tipo: 'Tailandesa',
    avaliacao: 4.5,
    descricao:
      'Explore os sabores exóticos da Tailândia sem sair de casa! Pad thai autêntico, curries aromáticos e pratos com o equilíbrio perfeito entre doce, salgado, ácido e picante. Uma verdadeira viagem gastronômica ao sudeste asiático.',
    capa: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80',
    cardapio: [
      {
        id: 14,
        foto: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&q=80',
        preco: 48.0,
        nome: 'Pad Thai',
        descricao: 'Macarrão de arroz salteado com camarões, amendoim, brotos e molho tamarindo.',
        porcao: '1 pessoa'
      },
      {
        id: 15,
        foto: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
        preco: 52.0,
        nome: 'Green Curry',
        descricao: 'Curry verde tailandês com frango, berinjela, bambu e manjericão thai.',
        porcao: '1 pessoa'
      },
      {
        id: 16,
        foto: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400&q=80',
        preco: 35.0,
        nome: 'Spring Rolls',
        descricao: 'Rolinhos primavera crocantes recheados com vegetais e molho agridoce.',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 5,
    titulo: 'El Mariachi Cantina',
    destacado: false,
    tipo: 'Mexicana',
    avaliacao: 4.3,
    descricao:
      'Tacos, burritos e nachos feitos com receitas autênticas mexicanas! Sabores intensos, ingredientes frescos e aquele toque picante que faz toda a diferença. Traga o México para sua casa com o nosso delivery.',
    capa: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=800&q=80',
    cardapio: [
      {
        id: 17,
        foto: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
        preco: 42.0,
        nome: 'Tacos al Pastor',
        descricao: 'Tacos com carne de porco marinada, abacaxi, cebola e coentro.',
        porcao: '1 pessoa'
      },
      {
        id: 18,
        foto: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
        preco: 48.0,
        nome: 'Burrito Supreme',
        descricao: 'Burrito generoso com carne, feijão, arroz, guacamole, sour cream e queijo.',
        porcao: '1 pessoa'
      },
      {
        id: 19,
        foto: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&q=80',
        preco: 38.0,
        nome: 'Nachos Loaded',
        descricao: 'Nachos crocantes cobertos com chili, queijo cheddar, jalapeños e guacamole.',
        porcao: '1 a 2 pessoas'
      }
    ]
  },
  {
    id: 6,
    titulo: 'Le Petit Bistrot',
    destacado: true,
    tipo: 'Francesa',
    avaliacao: 4.8,
    descricao:
      'Sofisticação e sabor da culinária francesa no conforto da sua casa. Pratos clássicos preparados com técnica e ingredientes premium. Do croissant ao coq au vin, cada receita é uma celebração da gastronomia francesa.',
    capa: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    cardapio: [
      {
        id: 20,
        foto: 'https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?w=400&q=80',
        preco: 95.0,
        nome: 'Coq au Vin',
        descricao: 'Frango assado lentamente em vinho tinto com cogumelos, cebola e bacon.',
        porcao: '1 pessoa'
      },
      {
        id: 21,
        foto: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80',
        preco: 45.0,
        nome: 'Croissant Presunto e Queijo',
        descricao: 'Croissant folhado recheado com presunto parma e queijo gruyère gratinado.',
        porcao: '1 pessoa'
      },
      {
        id: 22,
        foto: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80',
        preco: 55.0,
        nome: 'Crème Brûlée',
        descricao: 'Clássica sobremesa francesa com creme de baunilha e açúcar caramelizado.',
        porcao: '1 pessoa'
      }
    ]
  }
]

export default restaurants
