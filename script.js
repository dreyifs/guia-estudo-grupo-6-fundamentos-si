'use strict';
// Fonte editorial do portal. O conteúdo estático do HTML mantém a leitura disponível sem JavaScript.
const siteData = {
  "seminario": {
    "titulo": "Segurança da Informação e Proteção de Dados",
    "descricao": "Guia rápido para acompanhar os cinco blocos do seminário.",
    "professor": "Gleiser Rodrigues de Melo",
    "instituicao": "Instituto Federal de Sergipe (IFS)",
    "campus": "Campus Itabaiana",
    "disciplina": "Fundamentos de Sistemas de Informação",
    "unidade": "Unidade 2",
    "tema": "Tema 6",
    "integrantes": [
      "Antony",
      "Letícia",
      "Mikael",
      "Andrey",
      "Izabelly"
    ],
    "curso": "Bacharelado em Ciência da Computação",
    "duracao": "20 minutos",
    "nomeGuia": "Guia de Estudo do Grupo 6"
  },
  "introducao": {
    "pergunta": "Imagine que dados pessoais e bancários de milhares de clientes fossem expostos. Quem poderia ser prejudicado?",
    "ligacao": "A segurança protege os dados e as informações que dão base às decisões.",
    "titulo": "Por que proteger a informação?",
    "contexto": [
      "Empresas usam informações para operar, conhecer clientes, administrar processos e tomar decisões.",
      "Exposição, alteração ou indisponibilidade podem gerar riscos financeiros, operacionais, jurídicos e reputacionais."
    ],
    "si": "Um Sistema de Informação (SI) reúne pessoas, processos e tecnologia para coletar, processar, armazenar e distribuir informações."
  },
  "fluxoUnidade1": [
    {
      "titulo": "Dados",
      "descricao": "Registros brutos, como um CPF, um valor ou uma data.",
      "exemplo": "250, sem unidade, data ou contexto."
    },
    {
      "titulo": "Informação",
      "descricao": "Dados organizados com contexto, como o extrato de uma conta.",
      "exemplo": "Saldo de R$ 250 na conta em 10 de abril."
    },
    {
      "titulo": "Conhecimento",
      "descricao": "Interpretação e identificação de padrões.",
      "exemplo": "Ao comparar os extratos, a cliente percebe que os gastos com delivery aumentam todo mês."
    },
    {
      "titulo": "Decisão",
      "descricao": "Ação orientada por informações e conhecimento.",
      "exemplo": "A cliente reorganiza o orçamento e define um limite mensal para delivery."
    }
  ],
  "conceitos": [
    {
      "titulo": "Ameaça",
      "resumo": "Evento ou agente com potencial de causar dano.",
      "exemplo": "Um criminoso tenta obter credenciais de acesso."
    },
    {
      "titulo": "Vulnerabilidade",
      "resumo": "Fragilidade que pode ser explorada por uma ameaça.",
      "exemplo": "Senha fraca ou sistema sem atualização."
    },
    {
      "titulo": "Risco",
      "resumo": "Possibilidade de consequências negativas decorrentes de ameaças e vulnerabilidades, considerando probabilidade e impacto.",
      "exemplo": "Risco de acesso indevido a uma base de clientes."
    },
    {
      "titulo": "Incidente de segurança",
      "resumo": "Evento adverso confirmado que compromete propriedades de segurança.",
      "exemplo": "Exposição não autorizada de dados pessoais."
    }
  ],
  "ameacas": [
    {
      "titulo": "Malware",
      "icon": "alert",
      "resumo": "Software malicioso que pode roubar, alterar ou bloquear dados.",
      "exemplo": "Arquivos ficam bloqueados e aparece um pedido de resgate.",
      "defesa": "Atualizações, proteção de endpoints, backup e restrição de privilégios.",
      "arte": "files"
    },
    {
      "titulo": "Phishing",
      "icon": "lock",
      "resumo": "Mensagens ou páginas falsas para obter dados ou induzir ações.",
      "exemplo": "Um e-mail imita seu banco e pede que você confirme a senha.",
      "defesa": "Verificar remetente e endereço, usar MFA e treinar a equipe.",
      "arte": "mail"
    },
    {
      "titulo": "Engenharia social",
      "icon": "users",
      "resumo": "Manipulação de pessoas para conseguir acesso ou informação.",
      "exemplo": "Alguém se passa pelo suporte e pede um código de autenticação.",
      "defesa": "Confirmar identidades por canais confiáveis e não compartilhar códigos.",
      "arte": "chat"
    },
    {
      "titulo": "Riscos internos",
      "icon": "database",
      "resumo": "Ações acidentais ou intencionais de pessoas com acesso legítimo.",
      "exemplo": "Uma planilha de clientes é enviada ao destinatário errado.",
      "defesa": "Privilégio mínimo, conscientização, revisão de acessos e registros.",
      "arte": "share"
    }
  ],
  "cid": [
    {
      "titulo": "Confidencialidade",
      "curto": "A informação só deve ser acessada por quem tem autorização.",
      "exemplo": "Somente o cliente e profissionais autorizados consultam dados da conta.",
      "controles": "Controle de acesso, autenticação, criptografia.",
      "falha": "Uma pessoa sem autorização consegue ler o extrato de outra."
    },
    {
      "titulo": "Integridade",
      "curto": "Os dados precisam permanecer corretos e protegidos contra alterações indevidas.",
      "exemplo": "O valor de uma transferência não deve ser alterado durante o processamento.",
      "controles": "Validação, trilhas de auditoria, controle de mudanças.",
      "falha": "O valor errado é debitado após uma alteração indevida."
    },
    {
      "titulo": "Disponibilidade",
      "curto": "Serviços e informações devem estar acessíveis quando necessários.",
      "exemplo": "O aplicativo bancário precisa permitir acesso aos serviços previstos.",
      "controles": "Redundância, backups, monitoramento e recuperação.",
      "falha": "Clientes ficam temporariamente sem acesso ao serviço de pagamentos."
    }
  ],
  "psi": {
    "definicao": "Uma Política de Segurança da Informação (PSI) define diretrizes, regras e responsabilidades para proteger as informações da organização.",
    "componentes": [
      {
        "titulo": "Pessoas",
        "texto": "Responsabilidades, treinamento, comportamento seguro e reporte de incidentes.",
        "exemplo": "Uma funcionária reconhece uma mensagem de phishing e a comunica pelo canal interno."
      },
      {
        "titulo": "Processos",
        "texto": "Classificação da informação, procedimentos, resposta a incidentes e revisão periódica.",
        "exemplo": "A empresa segue um procedimento com responsáveis definidos para registrar, conter e investigar incidentes."
      },
      {
        "titulo": "Tecnologia",
        "texto": "Gestão de identidade, restrições de acesso, criptografia, logs e medidas preventivas.",
        "exemplo": "O sistema de cadastro exige autenticação multifator."
      }
    ]
  },
  "camadas": [
    {
      "titulo": "Física",
      "subtitulo": "Proteção dos ambientes e equipamentos",
      "descricao": "Controle de entrada, visitantes, acesso a salas e proteção de dispositivos.",
      "exemplo": "Somente a equipe autorizada entra na sala de servidores, com a entrada registrada e o ambiente monitorado."
    },
    {
      "titulo": "Lógica",
      "subtitulo": "Proteção de contas, redes e aplicações",
      "descricao": "MFA, criptografia, firewalls, atualizações, segmentação e monitoramento.",
      "exemplo": "Mesmo se uma senha vazar, o segundo fator pode impedir o uso indevido da conta."
    },
    {
      "titulo": "Administrativa",
      "subtitulo": "Regras e governança",
      "descricao": "PSI, treinamento, auditoria, classificação de dados e plano de resposta a incidentes.",
      "exemplo": "A equipe ensaia o plano de resposta e usa auditorias e avaliações de risco para atualizar os controles."
    }
  ],
  "normas": [
    {
      "nome": "ISO/IEC 27001",
      "papel": "Estabelece requisitos para um Sistema de Gestão de Segurança da Informação (SGSI).",
      "ref": "iso27001"
    },
    {
      "nome": "ISO/IEC 27002",
      "papel": "Oferece orientações para controles de segurança da informação.",
      "ref": "iso27002"
    }
  ],
  "lgpd": {
    "intro": "A Lei nº 13.709/2018 protege a liberdade, a privacidade e o livre desenvolvimento da personalidade no tratamento de dados pessoais.",
    "exemplos": [
      {
        "titulo": "Dado pessoal",
        "texto": "Informação sobre uma pessoa natural identificada ou identificável. Exemplos incluem nome, CPF, telefone, e-mail e dados financeiros associados à pessoa."
      },
      {
        "titulo": "Tratamento",
        "texto": "Qualquer operação com dados pessoais, como coleta, consulta, armazenamento, utilização, compartilhamento ou eliminação."
      }
    ],
    "principios": [
      {
        "titulo": "Finalidade",
        "resumo": "Tratar dados para propósitos legítimos, específicos, explícitos e informados.",
        "exemplo": "Explicar por que um cadastro solicita determinada informação.",
        "pratica": "No formulário, o banco informa que usará o endereço para enviar o cartão."
      },
      {
        "titulo": "Necessidade",
        "resumo": "Limitar todo o tratamento ao mínimo necessário à finalidade.",
        "exemplo": "Não solicitar dados irrelevantes para abrir uma conta.",
        "pratica": "Para enviar o cartão, pede o endereço de entrega e dispensa perguntas sem relação com esse serviço."
      },
      {
        "titulo": "Transparência",
        "resumo": "Informar de forma clara como os dados são utilizados.",
        "exemplo": "Disponibilizar aviso de privacidade compreensível.",
        "pratica": "Antes do cadastro, o cliente encontra um aviso claro sobre uso, retenção e canais de contato."
      },
      {
        "titulo": "Segurança",
        "resumo": "Proteger os dados contra acessos e eventos indevidos.",
        "exemplo": "Adotar controle de acesso e criptografia adequados.",
        "pratica": "Somente equipes autorizadas consultam informações cadastrais, com registro de acessos."
      },
      {
        "titulo": "Prevenção",
        "resumo": "Atuar para evitar danos antes que aconteçam.",
        "exemplo": "Realizar revisões de risco e orientar os profissionais.",
        "pratica": "A equipe avalia periodicamente os riscos e corrige permissões excessivas antes de um incidente."
      },
      {
        "titulo": "Responsabilização e prestação de contas",
        "resumo": "Demonstrar adoção e eficácia das medidas de conformidade.",
        "exemplo": "Manter registros de controles e evidências das ações adotadas.",
        "pratica": "A empresa documenta as revisões de acesso e guarda evidências da eficácia dos controles.",
        "rotulo": "Prestação de contas"
      }
    ],
    "artigos": [
      {
        "titulo": "Art. 6º · Princípios",
        "rotulo": "Art. 6º",
        "arte": "document",
        "descricao": "Orienta o uso dos dados pessoais. Defina a finalidade e limite a coleta ao necessário.",
        "exemplo": "Um cadastro pede apenas os dados que precisa usar."
      },
      {
        "titulo": "Art. 46 · Proteção",
        "rotulo": "Art. 46",
        "arte": "shield",
        "descricao": "Exige medidas técnicas e administrativas para proteger dados pessoais.",
        "exemplo": "Só a equipe autorizada consegue abrir o cadastro de clientes."
      },
      {
        "titulo": "Art. 48 · Comunicação",
        "rotulo": "Art. 48",
        "arte": "bell",
        "descricao": "Exige que o controlador comunique à ANPD e aos titulares incidentes que possam causar risco ou dano relevante.",
        "exemplo": "A equipe avalia a exposição dos dados e comunica quando exigido."
      }
    ],
    "ciclo": [
      {
        "titulo": "Coleta",
        "descricao": "Definir a finalidade e coletar somente dados necessários.",
        "exemplo": "O banco coleta dados de identificação necessários para abrir a conta."
      },
      {
        "titulo": "Armazenamento",
        "descricao": "Organizar, classificar e restringir acessos.",
        "exemplo": "O cadastro fica em ambiente com acesso restrito às equipes autorizadas."
      },
      {
        "titulo": "Utilização",
        "descricao": "Usar os dados conforme as finalidades e bases legais aplicáveis.",
        "exemplo": "A equipe consulta o cadastro para verificar a identidade do cliente nos serviços contratados."
      },
      {
        "titulo": "Proteção e monitoramento",
        "descricao": "Monitorar, prevenir incidentes e revisar controles.",
        "exemplo": "O banco monitora consultas fora do padrão e revisa as permissões de acesso."
      },
      {
        "titulo": "Resposta e descarte",
        "descricao": "Investigar incidentes e comunicar quando exigido; manter rotinas de retenção e descarte.",
        "exemplo": "A equipe verifica incidentes e comunica quando exigido. Dados sem necessidade de retenção são eliminados conforme as regras aplicáveis."
      }
    ],
    "incidencia": "O controlador comunica à ANPD e aos titulares se o incidente puder causar risco ou dano relevante. O prazo geral é de 3 dias úteis após saber que houve impacto sobre dados pessoais, salvo prazo legal específico.",
    "notaLegal": "Todo tratamento exige uma base legal aplicável. Consentimento é uma das hipóteses previstas na LGPD.",
    "notaCiclo": "Etapas ilustrativas. A proteção acompanha todo o tratamento."
  },
  "caso": {
    "descricao": "Em 2018, o Ministério Público do Distrito Federal e Territórios investigou a exposição de dados associados ao Banco Inter. A ação civil pública e o acordo judicial são documentados em publicações oficiais.",
    "confirmados": [
      "O MPDFT informou ainda o comprometimento de 4.840 dados de clientes de outros bancos que transacionaram com usuários do Inter.",
      "Houve exposição de certificados digitais já revogados e de uma chave privada do banco.",
      "As contagens descrevem registros documentados. O total de pessoas afetadas permanece indeterminado nesse recorte."
    ],
    "timeline": [
      {
        "data": "8 de maio de 2018",
        "titulo": "Instauração do inquérito civil público",
        "descricao": "O MPDFT abriu investigação sobre o suposto vazamento. Notícia publicada em 9 de maio.",
        "ref": "mp_maio",
        "iso": "2018-05-08"
      },
      {
        "data": "30 de julho de 2018",
        "titulo": "Ajuizamento da ação civil pública",
        "descricao": "O MPDFT pediu R$ 10 milhões por danos morais coletivos. Notícia publicada em 31 de julho.",
        "ref": "mp_julho",
        "iso": "2018-07-30"
      },
      {
        "data": "18 de dezembro de 2018",
        "titulo": "Homologação judicial do acordo",
        "descricao": "A Justiça homologou acordo de R$ 1,5 milhão. Notícia publicada em 19 de dezembro.",
        "ref": "mp_dezembro",
        "iso": "2018-12-18"
      }
    ],
    "valores": [
      {
        "titulo": "Pedido na ação civil pública",
        "valor": 10000000,
        "descricao": "Indenização por danos morais coletivos solicitada pelo MPDFT na ação de julho de 2018.",
        "ref": "mp_julho"
      },
      {
        "titulo": "Acordo judicial homologado",
        "valor": 1500000,
        "descricao": "Valor do acordo homologado pela Justiça em 18 de dezembro de 2018.",
        "ref": "mp_dezembro"
      }
    ],
    "cuidado": "O acordo reparou danos morais coletivos por via judicial. O caso é anterior à vigência das sanções da LGPD.",
    "limite": "Causa técnica específica não demonstrada nas fontes consultadas.",
    "interpretacao": "A exposição comprometeu a confidencialidade. Na ação civil, o MPDFT atribuiu ao banco cuidados insuficientes na proteção dos dados.",
    "registros": [
      {
        "titulo": "Registros cadastrais de correntistas comprometidos",
        "valor": 19961,
        "descricao": "Contagem de registros cadastrais comprometidos divulgada pelo MPDFT.",
        "ref": "mp_julho"
      },
      {
        "titulo": "Registros do conjunto com dados bancários",
        "valor": 13207,
        "descricao": "Registros que também continham dados bancários, dentro do conjunto de 19.961.",
        "ref": "mp_julho"
      }
    ],
    "reparticao": [
      {
        "titulo": "Instituições públicas de combate a crimes cibernéticos",
        "valor": 1000000,
        "descricao": "Parcela do acordo destinada a instituições públicas de combate a crimes cibernéticos.",
        "ref": "mp_dezembro"
      },
      {
        "titulo": "Instituições de caridade",
        "valor": 500000,
        "descricao": "Parcela do acordo destinada a instituições de caridade.",
        "ref": "mp_dezembro"
      }
    ]
  },
  "impactos": [
    {
      "titulo": "Clientes",
      "descricao": "Exposição de dados pessoais, risco de golpes e fraudes e preocupação com a privacidade."
    },
    {
      "titulo": "Empresa",
      "descricao": "Custos de investigação e remediação, possíveis responsabilidades jurídicas, interrupções e perda de confiança."
    },
    {
      "titulo": "Governança",
      "descricao": "Revisão de controles, políticas, processos e estratégias de proteção para reduzir riscos e responder a incidentes."
    }
  ],
  "boasPraticas": [
    {
      "grupo": "Pessoas",
      "icon": "users",
      "itens": [
        "Reconhecer mensagens suspeitas.",
        "Não compartilhar senhas ou códigos.",
        "Participar de treinamentos.",
        "Comunicar situações anormais."
      ]
    },
    {
      "grupo": "Tecnologia",
      "icon": "lock",
      "itens": [
        "Utilizar autenticação multifator.",
        "Manter sistemas atualizados.",
        "Implementar controles de acesso.",
        "Utilizar criptografia quando apropriado.",
        "Manter backups testados e monitoramento."
      ]
    },
    {
      "grupo": "Gestão",
      "icon": "flow",
      "itens": [
        "Definir uma PSI.",
        "Classificar informações.",
        "Revisar permissões de acesso.",
        "Avaliar riscos periodicamente.",
        "Manter planos de resposta a incidentes."
      ]
    }
  ],
  "glossario": [
    {
      "termo": "Ameaça",
      "sigla": "",
      "categoria": "Segurança",
      "definicao": "Evento ou agente com potencial para produzir um dano.",
      "exemplo": "Tentativa de invasão."
    },
    {
      "termo": "ANPD",
      "sigla": "Agência Nacional de Proteção de Dados",
      "categoria": "Privacidade",
      "definicao": "Autoridade brasileira responsável por zelar pela proteção de dados pessoais e pela aplicação da LGPD.",
      "exemplo": "Receber comunicações de incidentes sujeitos à obrigação legal."
    },
    {
      "termo": "Autenticação",
      "categoria": "Tecnologia",
      "definicao": "Verificação da identidade de uma pessoa ou sistema.",
      "exemplo": "Entrar na conta com senha e segundo fator."
    },
    {
      "termo": "Autenticação multifator",
      "sigla": "MFA",
      "categoria": "Tecnologia",
      "definicao": "Uso de mais de um fator para verificar a identidade.",
      "exemplo": "Senha e aplicativo autenticador."
    },
    {
      "termo": "Backup",
      "sigla": "",
      "categoria": "Tecnologia",
      "definicao": "Cópia para permitir recuperação de informações.",
      "exemplo": "Restaurar arquivos após perda."
    },
    {
      "termo": "Confidencialidade",
      "sigla": "C",
      "categoria": "Segurança",
      "definicao": "Propriedade que restringe o acesso às pessoas e aos sistemas autorizados.",
      "exemplo": "Restringir consultas a dados de clientes."
    },
    {
      "termo": "Conhecimento",
      "categoria": "Fundamentos",
      "definicao": "Compreensão obtida ao interpretar informações.",
      "exemplo": "Usar extratos para reconhecer um padrão de despesas."
    },
    {
      "termo": "Controlador",
      "sigla": "",
      "categoria": "Privacidade",
      "definicao": "Agente a quem competem as decisões referentes ao tratamento de dados pessoais.",
      "exemplo": "Empresa que define a finalidade da coleta."
    },
    {
      "termo": "Criptografia",
      "sigla": "",
      "categoria": "Tecnologia",
      "definicao": "Técnicas que transformam dados para protegê-los de leitura indevida.",
      "exemplo": "Cifrar dados em trânsito."
    },
    {
      "termo": "Dado",
      "sigla": "",
      "categoria": "Fundamentos",
      "definicao": "Registro ou fato bruto sem contexto suficiente para certa decisão.",
      "exemplo": "Um número isolado."
    },
    {
      "termo": "Dados pessoais",
      "sigla": "",
      "categoria": "Privacidade",
      "definicao": "Informação relacionada à pessoa natural identificada ou identificável.",
      "exemplo": "CPF ou e-mail associado a uma pessoa."
    },
    {
      "termo": "Dados pessoais sensíveis",
      "categoria": "Privacidade",
      "definicao": "Dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical ou a organização de caráter religioso, filosófico ou político, saúde, vida sexual, ou dado genético ou biométrico vinculado a pessoa natural.",
      "exemplo": "Dados de saúde no prontuário de uma pessoa."
    },
    {
      "termo": "Defesa em profundidade",
      "sigla": "",
      "categoria": "Governança",
      "definicao": "Emprego de várias medidas de proteção complementares.",
      "exemplo": "Controle físico, MFA e treinamento."
    },
    {
      "termo": "Disponibilidade",
      "sigla": "D",
      "categoria": "Segurança",
      "definicao": "Propriedade de manter a informação acessível quando necessária.",
      "exemplo": "Recuperar um serviço após falha."
    },
    {
      "termo": "Engenharia social",
      "sigla": "",
      "categoria": "Ameaças",
      "definicao": "Técnica de manipulação de pessoas para obter informações ou acesso.",
      "exemplo": "Falso funcionário de suporte."
    },
    {
      "termo": "Firewall",
      "categoria": "Tecnologia",
      "definicao": "Controle que permite ou bloqueia tráfego de rede conforme regras.",
      "exemplo": "Restringir conexões recebidas por um servidor."
    },
    {
      "termo": "Incidente de segurança",
      "sigla": "",
      "categoria": "Segurança",
      "definicao": "Evento adverso confirmado que compromete propriedades de segurança.",
      "exemplo": "Acesso não autorizado a registros."
    },
    {
      "termo": "Informação",
      "sigla": "",
      "categoria": "Fundamentos",
      "definicao": "Dado organizado e contextualizado para produzir significado.",
      "exemplo": "Saldo com data e identificação da conta."
    },
    {
      "termo": "Integridade",
      "sigla": "I",
      "categoria": "Segurança",
      "definicao": "Propriedade de manter dados corretos e sem alterações indevidas.",
      "exemplo": "Verificar modificações em transações."
    },
    {
      "termo": "ISO/IEC 27001",
      "categoria": "Governança",
      "definicao": "Norma com requisitos para um SGSI.",
      "exemplo": "Definir e avaliar um sistema de gestão de segurança."
    },
    {
      "termo": "ISO/IEC 27002",
      "categoria": "Governança",
      "definicao": "Norma com orientações sobre controles de segurança da informação.",
      "exemplo": "Consultar orientações ao revisar os controles de acesso."
    },
    {
      "termo": "LGPD",
      "sigla": "Lei nº 13.709/2018",
      "categoria": "Privacidade",
      "definicao": "Lei Geral de Proteção de Dados Pessoais.",
      "exemplo": "Regras para uso de dados em cadastros."
    },
    {
      "termo": "Malware",
      "sigla": "",
      "categoria": "Ameaças",
      "definicao": "Programa criado para executar ações maliciosas.",
      "exemplo": "Ransomware que bloqueia arquivos."
    },
    {
      "termo": "Operador",
      "categoria": "Privacidade",
      "definicao": "Agente que trata dados pessoais em nome do controlador.",
      "exemplo": "Prestadora que processa cadastros sob instruções da empresa contratante."
    },
    {
      "termo": "Phishing",
      "sigla": "",
      "categoria": "Ameaças",
      "definicao": "Fraude que usa mensagens ou páginas falsas para enganar pessoas.",
      "exemplo": "Página bancária falsificada."
    },
    {
      "termo": "Política de Segurança da Informação",
      "sigla": "PSI",
      "categoria": "Governança",
      "definicao": "Diretrizes e responsabilidades organizacionais para proteger informações.",
      "exemplo": "Regras de acesso e reporte de incidentes."
    },
    {
      "termo": "Ransomware",
      "categoria": "Ameaças",
      "definicao": "Malware que bloqueia acesso a dados ou sistemas e exige resgate.",
      "exemplo": "Arquivos ficam indisponíveis e surge uma exigência de pagamento."
    },
    {
      "termo": "Risco",
      "sigla": "",
      "categoria": "Segurança",
      "definicao": "Possibilidade de consequências negativas associadas a cenários incertos.",
      "exemplo": "Exposição de cadastros."
    },
    {
      "termo": "SGSI",
      "sigla": "Sistema de Gestão de Segurança da Informação",
      "categoria": "Governança",
      "definicao": "Estrutura de gestão para estabelecer, manter e melhorar a segurança da informação.",
      "exemplo": "Programa organizacional orientado pela ISO/IEC 27001."
    },
    {
      "termo": "Sistema de Informação",
      "sigla": "SI",
      "categoria": "Fundamentos",
      "definicao": "Conjunto de recursos e processos que coleta, trata e distribui informações.",
      "exemplo": "Sistema que processa operações bancárias."
    },
    {
      "termo": "Tratamento de dados",
      "sigla": "",
      "categoria": "Privacidade",
      "definicao": "Operação envolvendo dados pessoais, como coletar, consultar, compartilhar ou excluir.",
      "exemplo": "Atualizar o cadastro de um cliente."
    },
    {
      "termo": "Vulnerabilidade",
      "sigla": "",
      "categoria": "Segurança",
      "definicao": "Fraqueza explorável em um sistema ou processo.",
      "exemplo": "Aplicação desatualizada."
    }
  ],
  "flashcards": [
    {
      "frente": "Dado, informação e conhecimento",
      "verso": "250 é um dado bruto. Saber que é o saldo da conta em uma data dá contexto e gera informação. Reconhecer um padrão ao comparar saldos gera conhecimento."
    },
    {
      "frente": "Ameaça e vulnerabilidade",
      "verso": "Uma ameaça tem potencial de causar dano, como um golpista. A vulnerabilidade é uma fraqueza, como uma senha previsível."
    },
    {
      "frente": "Risco e incidente",
      "verso": "Risco é a possibilidade de um evento e de suas consequências. Incidente é um evento adverso que ocorreu e comprometeu a segurança."
    },
    {
      "frente": "Tríade CID",
      "verso": "Confidencialidade protege o acesso. Integridade preserva a correção. Disponibilidade mantém a informação acessível quando necessária."
    },
    {
      "frente": "Política de Segurança da Informação",
      "verso": "A PSI define diretrizes e responsabilidades. Por exemplo, orienta quem tem acesso a um cadastro e como comunicar um incidente."
    },
    {
      "frente": "Defesa em profundidade",
      "verso": "Combina proteções físicas, lógicas e administrativas. Se uma senha for comprometida, a MFA ainda pode proteger a conta."
    },
    {
      "frente": "Princípios da LGPD",
      "verso": "Os seis vistos aqui são finalidade, necessidade, transparência, segurança, prevenção e responsabilização e prestação de contas. O art. 6º reúne dez princípios."
    },
    {
      "frente": "Segurança da informação e proteção de dados",
      "verso": "Segurança preserva a confidencialidade, integridade e disponibilidade de informações em geral. A proteção de dados pessoais também exige finalidade, base legal e respeito aos direitos das pessoas."
    }
  ],
  "referencias": [
    {
      "id": "hintz",
      "autor": "HINTZBERGEN, Jule et al.",
      "titulo": "Fundamentos de segurança da informação: com base na ISO 27001 e na ISO 27002.",
      "ano": "2018",
      "detalhe": "Rio de Janeiro: Brasport. Veja os capítulos 3 (conceitos e riscos), 5 e 6 (políticas e organização), e 9 a 12 (acesso, criptografia, segurança física e operacional).",
      "url": "https://www.editorabrasport.com.br/livros-da-brasport/fundamentos-de-seguranca-da-informacao-com-base-na-iso-27001-e-na-iso-27002?page=10",
      "status": "Livro fornecido pelo professor"
    },
    {
      "id": "baltzan",
      "autor": "BALTZAN, Paige; PHILLIPS, Amy.",
      "titulo": "Sistemas de informação.",
      "ano": "2012",
      "detalhe": "Porto Alegre: AMGH. Cap. 4, Ética e segurança da informação. O cap. 8 desta edição trata de operações e cadeia de suprimentos.",
      "url": "https://loja.grupoa.com.br/sistemas-de-informacao-p991456",
      "status": "Livro disponibilizado na disciplina"
    },
    {
      "id": "aula01",
      "autor": "MELO, Gleiser Rodrigues de.",
      "titulo": "Aula 01: Fundamentos de Sistemas de Informação.",
      "ano": "2026",
      "detalhe": "Material da disciplina. Dados, informação, conhecimento, sistemas e atividades de SI.",
      "url": "",
      "status": "Material didático fornecido"
    },
    {
      "id": "aula03",
      "autor": "INSTITUTO FEDERAL DE SERGIPE.",
      "titulo": "Aula 03: Sistemas de informação baseados em computador.",
      "ano": "2026",
      "detalhe": "Material da disciplina. Recursos humanos, hardware, software, dados e redes.",
      "url": "",
      "status": "Material didático fornecido"
    },
    {
      "id": "lei",
      "autor": "BRASIL.",
      "titulo": "Lei nº 13.709, de 14 de agosto de 2018: Lei Geral de Proteção de Dados Pessoais.",
      "ano": "2018",
      "detalhe": "Especialmente artigos 5º, 6º, 46 e 48. Consultar texto vigente e alterações.",
      "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
      "status": "Legislação federal"
    },
    {
      "id": "anpd",
      "autor": "AGÊNCIA NACIONAL DE PROTEÇÃO DE DADOS.",
      "titulo": "Comunicação de Incidente de Segurança.",
      "ano": "2022, atualizada em 2026",
      "detalhe": "Procedimento de comunicação e perguntas frequentes sobre incidentes.",
      "url": "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis",
      "status": "Orientações oficiais"
    },
    {
      "id": "mp_maio",
      "autor": "MINISTÉRIO PÚBLICO DO DISTRITO FEDERAL E TERRITÓRIOS.",
      "titulo": "MPDFT investiga suposto vazamento de dados de clientes do Banco Inter.",
      "ano": "2018",
      "detalhe": "Notícia publicada em 9 maio 2018.",
      "url": "https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2018/10035-mpdft-investiga-suposto-vazamento-de-dados-de-clientes-do-banco-inter",
      "status": "Fonte primária do caso"
    },
    {
      "id": "mp_julho",
      "autor": "MINISTÉRIO PÚBLICO DO DISTRITO FEDERAL E TERRITÓRIOS.",
      "titulo": "MPDFT ajuíza ação contra o Banco Inter por vazamento de dados pessoais.",
      "ano": "2018",
      "detalhe": "Notícia publicada em 31 jul. 2018.",
      "url": "https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2018/10211-mpdft-ajuiza-acao-contra-o-banco-inter-por-vazamento-de-dados-pessoais",
      "status": "Fonte primária do caso"
    },
    {
      "id": "mp_dezembro",
      "autor": "MINISTÉRIO PÚBLICO DO DISTRITO FEDERAL E TERRITÓRIOS.",
      "titulo": "Banco Inter: acordo destinará R$ 1,5 milhão para caridade e combate a crimes cibernéticos.",
      "ano": "2018",
      "detalhe": "Notícia publicada em 19 dez. 2018, sobre homologação do acordo em 18 dez.",
      "url": "https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2018/10524-2018-12-19-10-27-31",
      "status": "Fonte primária do caso"
    },
    {
      "id": "ibm",
      "autor": "IBM.",
      "titulo": "O que é a segurança da informação?",
      "ano": "s.d.",
      "detalhe": "Visão geral da proteção de informações corporativas.",
      "url": "https://www.ibm.com/br-pt/think/topics/information-security",
      "status": "Leitura complementar"
    },
    {
      "id": "microsoft",
      "autor": "MICROSOFT.",
      "titulo": "O que é a proteção de dados?",
      "ano": "s.d.",
      "detalhe": "Visão geral de estratégias de proteção, descoberta e controle.",
      "url": "https://www.microsoft.com/pt-br/security/business/security-101/what-is-data-protection#data-protection-defined",
      "status": "Leitura complementar"
    },
    {
      "id": "regimento",
      "autor": "MELO, Gleiser Rodrigues de.",
      "titulo": "Regimento e roteiro do projeto de seminários: Unidade 2.",
      "ano": "2026",
      "detalhe": "Revisão de 26 out. 2026. Requisitos do material de apoio e das apresentações.",
      "url": "",
      "status": "Documento da disciplina"
    },
    {
      "id": "fichamento",
      "autor": "GRUPO DO TEMA 6.",
      "titulo": "Fichamento — Segurança da Informação e Proteção de Dados.",
      "ano": "s.d.",
      "detalhe": "Síntese de Hintzbergen et al., LGPD, IBM, Microsoft e ação civil pública do MPDFT.",
      "status": "Material do seminário"
    },
    {
      "id": "roteiro",
      "autor": "GRUPO DO TEMA 6.",
      "titulo": "Roteiro colaborativo — Tema 6.",
      "ano": "s.d.",
      "detalhe": "Planejamento dos cinco blocos e das intervenções da plateia.",
      "status": "Material do seminário"
    },
    {
      "id": "iso27001",
      "autor": "ISO; IEC.",
      "titulo": "ISO/IEC 27001:2022 — Information security management systems — Requirements.",
      "ano": "2022",
      "detalhe": "Resumo oficial dos requisitos do SGSI.",
      "url": "https://www.iso.org/standard/27001",
      "status": "Norma técnica"
    },
    {
      "id": "iso27002",
      "autor": "ISO; IEC.",
      "titulo": "ISO/IEC 27002:2022 — Information security controls.",
      "ano": "2022",
      "detalhe": "Resumo oficial das orientações sobre controles de segurança.",
      "url": "https://www.iso.org/standard/75652.html",
      "status": "Norma técnica"
    },
    {
      "id": "regol",
      "autor": "CONSELHO DIRETOR DA ANPD.",
      "titulo": "Resolução CD/ANPD nº 15, de 24 de abril de 2024.",
      "ano": "2024",
      "detalhe": "Regulamento de Comunicação de Incidente de Segurança. Veja os critérios e os arts. 6º e 9º para os prazos.",
      "url": "https://bibliotecadigital.mj.gov.br/bitstream/1/12879/2/RES_ANPD_2024_15.html",
      "status": "Regulamentação federal"
    },
    {
      "id": "anpd_inst",
      "autor": "AGÊNCIA NACIONAL DE PROTEÇÃO DE DADOS.",
      "titulo": "Institucional.",
      "ano": "s.d.",
      "detalhe": "Nome atual, missão e competências da agência reguladora.",
      "url": "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional",
      "status": "Orientações oficiais"
    }
  ],
  "blocos": [
    {
      "id": "fundamentos",
      "titulo": "Fundamentos e Ameaças",
      "curto": "Fundamentos e ameaças",
      "pessoa": "Antony",
      "icon": "database",
      "resumo": "Proteger a informação mantém as decisões confiáveis e ajuda a evitar perdas, interrupções e danos à reputação."
    },
    {
      "id": "defesa",
      "titulo": "Segurança e Defesa",
      "curto": "Segurança e defesa",
      "pessoa": "Letícia",
      "icon": "shield",
      "resumo": "A tríade CID define o que proteger. A política de segurança e os controles em camadas orientam como proteger."
    },
    {
      "id": "lgpd",
      "titulo": "Proteção de Dados e LGPD",
      "curto": "Proteção de dados e LGPD",
      "pessoa": "Mikael",
      "icon": "lock",
      "resumo": "A LGPD protege os direitos das pessoas quando seus dados são tratados."
    },
    {
      "id": "caso",
      "titulo": "Caso Banco Inter",
      "curto": "Caso Banco Inter",
      "pessoa": "Andrey",
      "icon": "case",
      "resumo": "Em 2018, o MPDFT documentou a exposição de dados e a Justiça homologou um acordo."
    },
    {
      "id": "boas-praticas",
      "titulo": "Boas Práticas e Conclusão",
      "curto": "Boas práticas e conclusão",
      "pessoa": "Izabelly",
      "icon": "check",
      "resumo": "Pessoas, tecnologia e gestão dividem a responsabilidade pela proteção dos dados."
    }
  ],
  "cenarios": [
    {
      "titulo": "Phishing",
      "descricao": "Exemplo fictício. O uso indevido da conta confirma o incidente.",
      "etapas": [
        [
          "Ameaça",
          "Uma pessoa recebe uma mensagem falsa que imita o banco."
        ],
        [
          "Exploração da fraqueza",
          "A pessoa confia na mensagem e fornece suas credenciais."
        ],
        [
          "Incidente confirmado",
          "A conta é acessada e usada sem autorização."
        ],
        [
          "Impactos possíveis",
          "Exposição de informações pessoais e tentativas de fraude."
        ]
      ]
    },
    {
      "titulo": "Software desatualizado",
      "descricao": "Exemplo fictício. A falha indica um risco. O acesso indevido confirma o incidente.",
      "etapas": [
        [
          "Ameaça",
          "Uma pessoa mal-intencionada tenta obter acesso a informações da empresa."
        ],
        [
          "Exploração da fraqueza",
          "A tentativa se aproveita de uma falha conhecida que permanece em uma versão desatualizada da aplicação."
        ],
        [
          "Incidente confirmado",
          "Registros da empresa são acessados sem autorização."
        ],
        [
          "Impactos possíveis",
          "Exposição de dados pessoais e custos de investigação e contenção."
        ]
      ]
    }
  ],
  "conclusao": {
    "mensagens": [
      {
        "titulo": "Informação tem valor",
        "texto": "Como vimos na Unidade 1, os sistemas transformam dados em informações que orientam decisões."
      },
      {
        "titulo": "Segurança sustenta a confiança",
        "texto": "Preservar confidencialidade, integridade e disponibilidade ajuda a manter operações e relações confiáveis."
      },
      {
        "titulo": "Responsabilidade é compartilhada",
        "texto": "Pessoas, tecnologia e gestão precisam atuar juntas."
      }
    ],
    "pergunta": "Um sistema de informação pode ser considerado eficiente se não consegue proteger adequadamente as informações que utiliza?"
  },
  "praticasResumo": [
    {
      "titulo": "Pessoas",
      "texto": "Desconfie de mensagens suspeitas e preserve senhas e códigos.",
      "arte": "people",
      "exemplo": "Abra o aplicativo oficial do banco para conferir uma mensagem suspeita."
    },
    {
      "titulo": "Tecnologia",
      "texto": "Use autenticação multifator, atualizações e backups testados.",
      "arte": "devices",
      "exemplo": "Um segundo fator ajuda a proteger a conta quando a senha é exposta."
    },
    {
      "titulo": "Gestão",
      "texto": "Defina regras de acesso e prepare a resposta a incidentes.",
      "arte": "plan",
      "exemplo": "Defina quem recebe e investiga uma suspeita de vazamento."
    }
  ]
};

const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
}[char]));
const htmlList = (items, render) => items.map(render).join('\n');
const icon = name => `<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;
const art = name => `<svg class="illustration" viewBox="0 0 112 72" aria-hidden="true" focusable="false"><use href="#a-${name}"></use></svg>`;
const numberFormat = new Intl.NumberFormat('pt-BR');
const currencyFormat = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL', maximumFractionDigits:0});

function externalLink(url, label) {
  return `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ${icon('external')}<span class="sr-only"> (abre em nova aba)</span></a>`;
}

const sourceNames = {
  hintz:'Hintzbergen et al. (2018)', baltzan:'Baltzan e Phillips (2012), cap. 4',
  aula01:'Aula 01 do IFS', aula03:'Aula 03 do IFS',
  lei:'LGPD no Planalto', anpd:'Orientações da ANPD',
  mp_maio:'MPDFT · 9 mai. 2018', mp_julho:'MPDFT · 31 jul. 2018', mp_dezembro:'MPDFT · 19 dez. 2018',
  ibm:'IBM', microsoft:'Microsoft', iso27001:'ISO/IEC 27001', iso27002:'ISO/IEC 27002', regol:'Resolução CD/ANPD nº 15/2024', anpd_inst:'Institucional da ANPD'
};
function sources(...ids) {
  const links = ids.map(id => {
    const ref = siteData.referencias.find(item => item.id === id);
    return ref.url
      ? externalLink(ref.url, sourceNames[id])
      : `<a href="#ref-${id}">${escapeHTML(sourceNames[id])}</a>`;
  });
  const label = ids.length === 1 ? 'Fonte' : 'Fontes';
  return `<p class="source"><strong>${label}</strong> · ${links.join(' · ')}</p>`;
}

const diagramData = {
  transformacao: {title:'Transformação dos dados', lead:'Siga o exemplo do saldo bancário', kind:'flow', items:siteData.fluxoUnidade1, refs:['aula01','aula03'],
    detail:d => description(d.descricao, [['Exemplo',d.exemplo]])},
  risco: {title:'Como um risco se concretiza', lead:'Compare dois cenários fictícios', items:siteData.cenarios, refs:['hintz','ibm'],
    detail:d => description(d.descricao) + `<ol class="scenario-steps">${htmlList(d.etapas, ([label,text])=>`<li><strong>${escapeHTML(label)}</strong>${escapeHTML(text)}</li>`)}</ol>`},
  ameacas: {title:'Mapa das ameaças', lead:'Escolha uma situação para ver como se proteger', kind:'illustrated', items:siteData.ameacas, refs:['hintz','ibm'],
    detail:d => description(d.resumo, [['Exemplo',d.exemplo],['Prevenção',d.defesa]])},
  cid: {title:'Tríade CID', lead:'Toque em um princípio para ver o que ele protege', kind:'triad', items:siteData.cid, refs:['hintz','baltzan'],
    detail:d => description(d.curto, [['Exemplo bancário',d.exemplo],['Se falhar',d.falha],['Como proteger',d.controles]])},
  psi: {title:'Pessoas, processos e tecnologia', lead:siteData.psi.definicao, kind:'hub', items:siteData.psi.componentes, refs:['hintz'],
    detail:d => description(d.texto, [['Na prática',d.exemplo]])},
  camadas: {title:'Defesa em camadas', lead:'Se uma barreira falhar, as outras ainda ajudam a reduzir o risco', kind:'layers', items:siteData.camadas, refs:['hintz','baltzan'],
    detail:d => description(d.subtitulo, [['Controles',d.descricao],['Na prática',d.exemplo]])},
  principios: {title:'Seis princípios da LGPD', lead:'Seis dos dez princípios do art. 6º', kind:'cols3', items:siteData.lgpd.principios, refs:['lei'],
    detail:d => description(d.resumo, [['Exemplo empresarial',d.exemplo],['Aplicação em um banco',d.pratica]])},
  obrigacoes: {title:'Da LGPD à prática', lead:'Veja o que cada artigo pede da empresa', kind:'illustrated', items:siteData.lgpd.artigos, refs:['lei','anpd'],
    detail:d => description(d.descricao, [['Na prática',d.exemplo]])},
  ciclo: {title:'Ciclo de tratamento dos dados', lead:'Do cadastro ao descarte', kind:'flow', items:siteData.lgpd.ciclo, refs:['lei','anpd'], note:siteData.lgpd.notaCiclo,
    detail:d => description(d.descricao, [['No cadastro bancário',d.exemplo]])},
  registros: {title:'Dados documentados no incidente', lead:'A barra verde representa parte do total cadastral', kind:'subset', illustration:'records', items:siteData.caso.registros, refs:['mp_julho'], format:d=>`${numberFormat.format(d.valor)} registros`,
    detail:d => description(d.descricao)},
  timeline: {title:'Linha do tempo', lead:'Da investigação ao acordo', kind:'timeline', items:siteData.caso.timeline,
    detail:d => `<p><time datetime="${d.iso}">${escapeHTML(d.data)}</time></p>` + description(d.descricao)},
  valores: {title:'Pedido judicial e acordo', lead:'Dois atos jurídicos em momentos diferentes', kind:'bars', items:siteData.caso.valores, refs:['mp_julho','mp_dezembro'], format:d=>currencyFormat.format(d.valor),
    detail:d => description(d.descricao)},
  reparticao: {title:'Destino dos recursos do acordo', lead:'As duas parcelas somam R$ 1,5 milhão', kind:'stacked', items:siteData.caso.reparticao, refs:['mp_dezembro'], format:d=>currencyFormat.format(d.valor),
    detail:d => description(d.descricao)},
  acoes: {title:'Onde aplicar as boas práticas', lead:'Explore as ações de cada área', kind:'illustrated', items:siteData.praticasResumo, refs:['hintz','microsoft'],
    detail:d => description(d.texto, [['Na prática',d.exemplo]])},
  impactos: {title:'Mapa de impactos', lead:'Consequências possíveis em qualquer vazamento de dados', kind:'cols3', items:siteData.impactos, refs:['ibm','microsoft'],
    detail:d => description(d.descricao)}
};

function description(text, terms = []) {
  const list = htmlList(terms, ([term, value]) => `<div><dt>${escapeHTML(term)}</dt><dd>${escapeHTML(value)}</dd></div>`);
  return `<p>${escapeHTML(text)}</p>${terms.length ? `<dl>${list}</dl>` : ''}`;
}

function panelContents(chart, item) {
  const title = chart.format ? `${item.titulo} · ${chart.format(item)}` : item.titulo;
  return `<h4>${escapeHTML(title)}</h4>${chart.detail(item)}${item.ref ? sources(item.ref) : ''}`;
}

function triadControls(chart, attributes) {
  const shapes = [
    ['M160 14 220 111 160 143 100 111Z',160,108],
    ['M100 111 160 143 160 209 38 209Z',104,189],
    ['M220 111 282 209 160 209 160 143Z',215,189]
  ];
  return `<svg class="triad" viewBox="0 0 320 220" role="group" aria-label="Três áreas da tríade CID">
    ${htmlList(chart.items, (item,i) => {
      const [path,x,y] = shapes[i];
      return `<g class="zone" role="button" tabindex="0" ${attributes(i)} aria-label="${escapeHTML(item.titulo)}">
        <path d="${path}"/><text x="${x}" y="${y}" text-anchor="middle" aria-hidden="true">${escapeHTML(item.titulo)}</text>
      </g>`;
    })}
    <circle cx="160" cy="140" r="19" fill="var(--surface)" stroke="var(--control)" pointer-events="none" aria-hidden="true"/>
    <text class="cid-label" x="160" y="145" text-anchor="middle" aria-hidden="true">CID</text>
  </svg>`;
}

function graphControls(id, chart) {
  const attributes = i => `data-item="${i}" aria-pressed="${i === 0}" aria-controls="panel-${id}"`;
  const button = (item,i) => `<button type="button" ${attributes(i)}${chart.kind === 'flow' ? ` data-step="${i+1}"` : ''}>${escapeHTML(item.rotulo ?? item.titulo)}</button>`;
  const {kind, items} = chart;
  if (kind === 'triad') return triadControls(chart, attributes);
  if (kind === 'illustrated') {
    const options = htmlList(items, (item,i) => `<button type="button" ${attributes(i)}>
      ${art(item.arte)}<span>${escapeHTML(item.rotulo ?? item.titulo)}</span>
    </button>`);
    return `<div class="choices illustrated${items.length === 3 ? ' illustrated-three' : ''}" style="--count:${items.length}">${options}</div>`;
  }
  if (kind === 'layers') {
    const core = `<span class="assets">${icon('database')} Ativos informacionais</span>`;
    const layers = items.reduceRight((inner,item,i) => `<div class="layer-shape">${button(item,i)}${inner}</div>`, core);
    return `<div class="choices layers">${layers}</div>`;
  }
  if (kind === 'timeline') {
    return `<ol class="timeline" role="list">${htmlList(items, (item,i) => `<li><button type="button" ${attributes(i)}><time datetime="${item.iso}">${escapeHTML(item.data)}</time><span>${escapeHTML(item.titulo)}</span></button></li>`)}</ol>`;
  }
  if (['bars','subset','stacked'].includes(kind)) {
    const values = items.map(item => item.valor);
    const scale = kind === 'stacked' ? values.reduce((sum,value) => sum + value, 0) : Math.max(...values);
    const length = item => `--length:${item.valor / scale * 100}%`;
    if (kind === 'stacked') {
      const segments = htmlList(items, (item,i) => `<button type="button" ${attributes(i)} style="${length(item)}" aria-label="${escapeHTML(item.titulo)} · ${escapeHTML(chart.format(item))}"></button>`);
      const legend = htmlList(items, item => `<li><span class="dot" aria-hidden="true"></span><strong>${escapeHTML(chart.format(item))}</strong> · ${escapeHTML(item.titulo)}</li>`);
      return `<div><div class="stacked">${segments}</div><ul class="legend">${legend}</ul></div>`;
    }
    const bars = htmlList(items, (item,i) => `<button class="bar-choice" type="button" ${attributes(i)}>
      <span class="bar-top"><span>${escapeHTML(item.titulo)}</span><strong>${escapeHTML(chart.format(item))}</strong></span>
      <span class="bar-track" aria-hidden="true"><span class="bar-fill" style="${length(item)}"></span></span>
    </button>`);
    return `<div class="bars ${kind}">${bars}</div>`;
  }
  const choices = `<div class="choices ${kind === 'flow' ? 'flow' : kind === 'hub' || kind === 'cols3' ? 'cols3' : 'cols2'}" style="--count:${items.length}">${htmlList(items, button)}</div>`;
  return kind === 'hub' ? `<div class="hub"><span>PSI</span>${choices}</div>` : choices;
}

function figure(id) {
  const chart = diagramData[id];
  const heading = `chart-${id}`;
  const split = ['triad','layers'].includes(chart.kind);
  const fallbackAttributes = chart.kind === 'timeline'
    ? 'class="figure-fallback timeline" role="list"' : 'class="figure-fallback"';
  return `<figure class="figure" data-chart="${id}" aria-labelledby="${heading}">
    <figcaption${chart.illustration ? ' class="caption-with-art"' : ''}>
      <div><h3 id="${heading}" tabindex="-1">${escapeHTML(chart.title)}</h3><p class="muted">${escapeHTML(chart.lead)}</p></div>
      ${chart.illustration ? art(chart.illustration) : ''}
    </figcaption>
    <div class="js-only${split ? ' graph-split' : ''}">
      ${graphControls(id, chart)}
      <div class="figure-panel" id="panel-${id}" aria-live="polite" aria-atomic="true">${panelContents(chart, chart.items[0])}</div>
    </div>
    <ol ${fallbackAttributes}>${htmlList(chart.items, item => `<li>${item.arte ? art(item.arte) : ''}${panelContents(chart,item)}</li>`)}</ol>
    ${chart.note ? `<p class="source">${escapeHTML(chart.note)}</p>` : ''}
    ${chart.refs && !chart.items.every(item=>item.ref && item.ref === chart.refs[0]) ? sources(...chart.refs) : ''}
  </figure>`;
}

function brand() {
  return `<a class="brand" href="#inicio"><span class="brand-mark">${icon('shield')}</span><span>Grupo 6</span></a>`;
}

function navigation(label) {
  const link = (id,text,symbol) => `<a href="#${id}" data-section="${id}"${id === 'inicio' ? ' aria-current="location"' : ''}>${icon(symbol)}${escapeHTML(text)}</a>`;
  return `<nav aria-label="${label}">
    <div class="nav-group">${link('inicio','Início','home')}
      ${htmlList(siteData.blocos, b => link(b.id,b.curto,b.icon))}
    </div>
    <div class="nav-group">${link('glossario','Glossário','search')}${link('revisao','Revisão','cards')}${link('referencias','Referências','link')}</div>
  </nav>`;
}

function home() {
  const s = siteData.seminario;
  return `<section id="inicio" aria-labelledby="titulo-portal" tabindex="-1">
    <div class="hero">
      <div class="hero-copy">
        <span class="eyebrow">${s.tema} · ${s.unidade} · ${s.duracao}</span>
        <h1 id="titulo-portal"><span class="title-prefix">${escapeHTML(s.nomeGuia)}<span class="sr-only"> - </span></span>${escapeHTML(s.titulo)}</h1>
        <p>${escapeHTML(s.descricao)}</p>
        <div class="hero-links">
          <a class="primary" href="#revisao">Ir para a revisão ${icon('arrow')}</a>
          <a href="#glossario">Consultar glossário</a>
        </div>
      </div>
      <section class="route" aria-labelledby="roteiro-titulo">
        <h2 id="roteiro-titulo" tabindex="-1">Roteiro do seminário</h2>
        <ol class="route-grid">${htmlList(siteData.blocos, (block,i) => `<li><a class="route-link" href="#${block.id}">
          <span class="block-index" aria-hidden="true">${i+1}</span><strong>${escapeHTML(block.curto)}</strong>${icon('arrow')}
        </a></li>`)}</ol>
      </section>
    </div>
    <details class="disclosure about"><summary>Sobre o seminário · IFS Itabaiana</summary>
      <dl class="academic">
        <div><dt>${escapeHTML(s.instituicao)}</dt><dd>${escapeHTML(s.campus)} · ${escapeHTML(s.curso)}</dd></div>
        <div><dt>${escapeHTML(s.disciplina)}</dt><dd>Professor ${escapeHTML(s.professor)}</dd></div>
        <div><dt>Integrantes</dt><dd>${escapeHTML(s.integrantes.join(' · '))}</dd></div>
      </dl>
    </details>
  </section>`;
}

const paragraphs = items => htmlList(items, text => `<p>${escapeHTML(text)}</p>`);
const cardGrid = (items, render, columns = 2) => `<div class="cards cols${columns}">${htmlList(items,render)}</div>`;
const disclosure = (label, content, id) => `<details class="disclosure"${id ? ` id="${id}"` : ''}>
  <summary>${escapeHTML(label)}</summary><div class="disclosure-body">${content}</div></details>`;
const rows = (items, title, text) => `<dl class="study-rows">${htmlList(items, item=>`<div>
  <dt>${escapeHTML(title(item))}</dt><dd>${escapeHTML(text(item))}</dd></div>`)}</dl>`;
const reflection = text => `<blockquote class="reflection">${escapeHTML(text)}</blockquote>`;

function foundations() {
  const d = siteData.introducao;
  return figure('transformacao') +
    disclosure('O sistema de informação e a Unidade 1', paragraphs([d.si,d.ligacao]) + reflection(d.pergunta)) +
    disclosure('Ameaça, vulnerabilidade, risco e incidente',
      rows(siteData.conceitos, item=>item.titulo, item=>item.resumo) + figure('risco')) +
    disclosure('Explorar malware, phishing e outras ameaças',figure('ameacas'));
}

function defense() {
  return figure('cid') + disclosure('Política de Segurança da Informação',figure('psi')) +
    disclosure('Defesa em camadas e normas ISO',figure('camadas') +
      rows(siteData.normas, item=>item.nome, item=>item.papel) + sources('iso27001','iso27002'));
}

function privacy() {
  const d = siteData.lgpd;
  return `<p class="section-note">${escapeHTML(d.notaLegal)}</p>` + figure('principios') +
    disclosure('Dados pessoais e tratamento', paragraphs([d.intro]) +
      rows(d.exemplos, item=>item.titulo, item=>item.texto) + sources('lei')) +
    disclosure('O que a empresa precisa fazer', figure('obrigacoes') +
      paragraphs([d.incidencia]) + sources('lei','anpd','regol')) +
    disclosure('Ciclo dos dados em um banco',figure('ciclo'));
}

function bankCase() {
  const d = siteData.caso;
  return figure('registros') + disclosure('Outros dados expostos e limites do caso',
    `<ul class="case-facts">${htmlList(d.confirmados, text=>`<li>${escapeHTML(text)}</li>`)}</ul>
    <p>${escapeHTML(d.limite)}</p>` + sources('mp_julho')) +
    disclosure('Linha do tempo de 2018',figure('timeline')) +
    disclosure('Valores do pedido e do acordo', figure('valores') + figure('reparticao') +
      paragraphs([d.cuidado]) + sources('mp_dezembro'));
}

function practices() {
  const d = siteData.conclusao;
  const checks = cardGrid(siteData.boasPraticas, group => `<fieldset class="check-group">
    <legend>${escapeHTML(group.grupo)}</legend>
    ${htmlList(group.itens,text=>`<label class="check-row"><input type="checkbox" autocomplete="off"><span>${escapeHTML(text)}</span></label>`)}
  </fieldset>`, 3);
  return figure('acoes') + disclosure('Abrir checklist de boas práticas',
    `<div class="checklist" id="checklist"><p class="check-status js-only" id="check-status" role="status"></p>${checks}</div>`, 'checklist-browser') +
    disclosure('Impactos para clientes, empresa e governança',figure('impactos')) +
    disclosure('Três ideias para levar do seminário',
      rows(d.mensagens, item=>item.titulo, item=>item.texto) + reflection(d.pergunta));
}

function blockSection(block, i) {
  const content = [foundations,defense,privacy,bankCase,practices][i]();
  return `<section class="block" id="${block.id}" aria-labelledby="heading-${block.id}" tabindex="-1">
    <header class="block-head"><span class="block-index" aria-hidden="true">${i+1}</span><div>
      <span class="eyebrow">${escapeHTML(block.pessoa)}</span>
      <h2 id="heading-${block.id}">${escapeHTML(block.curto)}</h2>
      <p>${escapeHTML(block.resumo)}</p>
    </div></header>
    ${content}
  </section>`;
}

function glossary() {
  const categories = [...new Set(siteData.glossario.map(item => item.categoria))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  const terms = `<div class="term-list">${htmlList(siteData.glossario, (item,i) => `<details class="term" data-term="${i}">
    <summary>${escapeHTML(item.termo)}${item.sigla ? ` <small>${escapeHTML(item.sigla)}</small>` : ''}</summary>
    <p>${escapeHTML(item.definicao)}</p>
    <p><strong>Exemplo</strong> · ${escapeHTML(item.exemplo)}</p>
  </details>`)}</div>`;
  return `<section class="reference-section" id="glossario" aria-labelledby="glossario-titulo" tabindex="-1">
    <h2 id="glossario-titulo">Glossário</h2>
    ${disclosure('Pesquisar termos', `<div class="tools js-only">
      <label>Termo ou sigla <input id="glossary-query" type="search" placeholder="Ex. PSI ou backup"></label>
      <label>Categoria <select id="glossary-category">
        <option value="">Todas as categorias</option>
        ${htmlList(categories, cat => `<option>${escapeHTML(cat)}</option>`)}
      </select></label>
    </div><p class="source js-only" id="glossary-status" role="status"></p>
    <div id="glossary-results">${terms}</div>`, 'glossary-browser')}
  </section>`;
}

function review() {
  return `<section class="reference-section" id="revisao" aria-labelledby="revisao-titulo" tabindex="-1">
    <h2 id="revisao-titulo">Revisão rápida</h2>
    ${disclosure('Abrir os cartões de revisão', `<div class="term-list">
      ${htmlList(siteData.flashcards, item => `<details class="flash"><summary>${escapeHTML(item.frente)}</summary><p>${escapeHTML(item.verso)}</p></details>`)}
    </div>`, 'review-browser')}
  </section>`;
}

function bibliography() {
  const references = `<ul class="reference-list">${htmlList(siteData.referencias, ref => `<li id="ref-${ref.id}" tabindex="-1">
    <strong>${escapeHTML(ref.autor)} <cite>${escapeHTML(ref.titulo)}</cite> ${escapeHTML(ref.ano)}.</strong>
    <p class="muted">${escapeHTML(ref.detalhe)}</p>
    ${ref.url ? `<p class="source">${externalLink(ref.url, `Consultar ${sourceNames[ref.id]}`)}</p>` : ''}
  </li>`)}</ul>`;
  return `<section class="reference-section" id="referencias" aria-labelledby="referencias-titulo" tabindex="-1">
    <h2 id="referencias-titulo">Referências</h2>
    ${disclosure('Ver bibliografia e fontes oficiais',references,'references-browser')}
  </section>`;
}

function renderPortal() {
  return `<aside class="sidebar" aria-label="Navegação lateral">
    ${brand()}${navigation('Seções do portal')}
    <p class="side-note"><strong>IFS · Campus Itabaiana</strong>Fundamentos de Sistemas de Informação</p>
  </aside>
  <main id="conteudo" tabindex="-1">
    <header class="topbar">
      ${brand()}
      <span class="topbar-title">Guia do seminário · Fundamentos de Sistemas de Informação</span>
      <details class="mobile-nav" id="mobile-nav"><summary class="utility">${icon('menu')} Seções</summary>${navigation('Seções do portal no celular')}</details>
      <button class="utility js-only" id="theme" type="button" aria-label="Modo escuro" aria-pressed="false">${icon('moon')}</button>
    </header>
    <div class="main-inner">
      ${home()}
      ${htmlList(siteData.blocos,blockSection)}
      ${glossary()}
      ${review()}
      ${bibliography()}
      <footer class="footer"><span>Material de apoio · IFS Itabaiana</span><a href="#inicio">Voltar ao início ${icon('top')}</a></footer>
    </div>
  </main>`;
}

function initCharts(portal) {
  for (const figure of portal.querySelectorAll('[data-chart]')) {
    const chart = diagramData[figure.dataset.chart];
    const panel = figure.querySelector('.figure-panel');
    const controls = [...figure.querySelectorAll('[data-item]')];
    function select(control) {
      if (control.getAttribute('aria-pressed') === 'true') return;
      for (const item of controls) item.setAttribute('aria-pressed', String(item === control));
      panel.innerHTML = panelContents(chart, chart.items[Number(control.dataset.item)]);
    }
    for (const control of controls) {
      control.addEventListener('click', () => select(control));
      if (control.getAttribute('role') === 'button') {
        control.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            select(control);
          }
        });
      }
    }
  }
}

function initGlossary() {
  const query = document.querySelector('#glossary-query');
  const category = document.querySelector('#glossary-category');
  const status = document.querySelector('#glossary-status');
  const cards = [...document.querySelectorAll('[data-term]')];
  const clean = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const entries = siteData.glossario.map(({termo,sigla,definicao,exemplo}) =>
    clean([termo,sigla,definicao,exemplo].join(' ')));
  function filter() {
    const words = clean(query.value).split(/\s+/);
    let count = 0;
    cards.forEach((card,i) => {
      const correctCategory = !category.value || siteData.glossario[i].categoria === category.value;
      const found = correctCategory && words.every(word => entries[i].includes(word));
      card.hidden = !found;
      count += Number(found);
    });
    status.textContent = count === 0 ? 'Nenhum termo encontrado. Tente outra palavra ou categoria.'
      : count === 1 ? '1 termo encontrado' : `${count} termos encontrados`;
  }
  query.addEventListener('input', filter);
  category.addEventListener('change', filter);
  filter();
}

function initChecklist() {
  const checklist = document.querySelector('#checklist');
  const fields = [...checklist.querySelectorAll('input')];
  const status = document.querySelector('#check-status');
  function update() {
    status.textContent = `${fields.filter(field => field.checked).length} de ${fields.length} itens marcados`;
  }
  checklist.addEventListener('change', update);
  update();
}

function initNavigation(portal) {
  const menu = document.querySelector('#mobile-nav');
  const summary = menu.querySelector('summary');
  const links = [...portal.querySelectorAll('[data-section]')];

  const expandableSections = {
    glossario:'glossary-browser', revisao:'review-browser', referencias:'references-browser'
  };
  function reveal(fragment) {
    const target = document.getElementById(fragment);
    if (!target) return;
    const expandable = document.getElementById(expandableSections[fragment]);
    if (expandable) expandable.open = true;
    for (let parent = target.parentElement; parent && parent !== portal; parent = parent.parentElement) {
      if (parent instanceof HTMLDetailsElement) parent.open = true;
    }
  }
  function markCurrent() {
    const fragment = location.hash.slice(1) || 'inicio';
    reveal(fragment);
    const target = document.getElementById(fragment);
    const current = target?.closest('section.block, section.reference-section, #inicio')?.id;
    for (const link of links) {
      if (link.dataset.section === current) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    }
  }
  portal.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.hash.slice(1);
    reveal(id);
    if (menu.contains(link)) {
      menu.open = false;
      document.getElementById(id)?.focus({preventScroll:true});
    }
  });
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      summary.focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  window.addEventListener('hashchange', markCurrent);
  markCurrent();
}

function initTheme() {
  const button = document.querySelector('#theme');
  button.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    button.setAttribute('aria-pressed',String(!isDark));
    button.innerHTML = icon(isDark ? 'moon' : 'sun');
  });
}

function enhance() {
  const portal = document.querySelector('#portal');
  portal.innerHTML = renderPortal();
  initCharts(portal);
  initGlossary();
  initChecklist();
  initNavigation(portal);
  initTheme();
  portal.classList.add('enhanced');
}

if (typeof document !== 'undefined') enhance();
