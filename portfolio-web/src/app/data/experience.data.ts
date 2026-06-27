export interface Experience {
    id: string;
    company: string;
    role: string;
    themeColor: string;
    description: string;
    technologies: string[];
    logoUrl: string;
    startDate: string;
    endDate: string | null; // null if currently working there
}

export const EXPERIENCES: Experience[] = [

    //ESTAGS
    {
        id: 'resum',
        company: 'Re:sum software',
        role: 'Estagiário Fullstack',
        themeColor: 'bg-resum-blue',
        description: 'Desenvolvimento de produtos SaaS complexos para Saúde e Jurídico (Lex Solution, Dr. Escala). Foco em features de alto impacto.',
        technologies: ['Angular', 'Nest.js', 'Node.js', 'PostgreSQL', 'React', 'React Native', 'TailwindCSS', 'Bootstrap', 'Docker'],
        logoUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQGBCAwHSDJlKA/company-logo_200_200/company-logo_200_200/0/1688436750339/re_sum_logo?e=1784160000&v=beta&t=ORorVFZg1zOnkljo8hvbWKRwYIZKZFR4ovnXvEq114M',
        startDate: '2025-11-24',
        endDate: '2026-06-112'
    },
    {
        id: 'vivo',
        company: 'Vivo (Telefônica Brasil)',
        role: 'Estagiário DevOps',
        themeColor: 'bg-vivo-purple',
        description: 'Atuação em ecossistemas de grande escala (Enterprise). Foco em estabilidade e alta disponibilidade para produtos como o Vivo Gaus, Vivo SSI.',
        technologies: ['Angular', 'TypeScript', 'Node.js', 'SQL Server', 'PostgreSQL', 'Bootstrap'],
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Logo_Vivo_Purpura_Positivo.svg/960px-Logo_Vivo_Purpura_Positivo.svg.png',
        startDate: '2023-14-08',
        endDate: '2025-10-08'
    }

];