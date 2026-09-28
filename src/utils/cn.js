import clsxDefault, { clsx as clsxNamed } from 'clsx';
import { twMerge } from 'tailwind-merge';

const clsxFn = typeof clsxDefault === 'function' ? clsxDefault : (typeof clsxNamed === 'function' ? clsxNamed : function(...args) { return args.filter(Boolean).join(' '); });

export function cn(...inputs) {
  return twMerge(clsxFn(inputs));
}
