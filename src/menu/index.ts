import { IListItem } from './data';
import './style.css';

export function generateMenu(list: IListItem[]): string {
    let output: string = '<ul>';
    for (const item of list) {
        const items: IListItem[] | undefined = item.items;
        output += `<li><a class=${items ? 'title' : ''}>${item.title}</a>`;
        if (items) {
            output += generateMenu(items);
        }
        output += '</li>'
    }
    output += '</ul>';
    return output;
}
