import Link from 'next/link';
import css from './SidebarNotes.module.css';

const TAGS = ['all', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'] as const;

export default function DefaultSidebar() {
  return (
    <ul className={css.menuList}>
      {TAGS.map(tag => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag === 'all' ? 'All notes' : tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
