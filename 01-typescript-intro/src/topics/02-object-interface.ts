const skills: string[] = ['Bash', 'Counter', 'Healing']

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string
}

const personaje: Character = {
    name: 'Elvis',
    hp: 100,
    skills: ['Bash', 'Counter']
}

personaje.hometown = 'Los Teques';

console.table(personaje);

export{};