import { generateMenu } from './menu';
import { menuList } from './menu/data';
import $ from 'jquery';


// declare function $(s: string): any;

$('.menu')
    .html(generateMenu(menuList))
    .on('click', (e: Event) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (!el.classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    });


// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// navMenu.innerHTML = generateMenu(menuList);
// navMenu.addEventListener('click', (e: MouseEvent) => {
//     const el: HTMLElement = e.target as HTMLElement;
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parentLi.classList.toggle('menu-open');
// });
