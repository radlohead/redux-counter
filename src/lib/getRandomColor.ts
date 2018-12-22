export default function getRandomColor(): string {
    const colors: string[] = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb'
    ];

    const random: number = Math.floor(Math.random() * 6);

    return colors[random];
}