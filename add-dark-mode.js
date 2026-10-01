import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip DarkModeToggle.jsx itself
  if (filePath.includes('DarkModeToggle.jsx')) return;
  if (filePath.includes('App.jsx')) return; // Already updated App.jsx

  // Replacements
  // Ensure we don't duplicate if already present
  content = content.replace(/bg-brand-ivory(?! dark:bg-brand-charcoal)/g, 'bg-brand-ivory dark:bg-brand-charcoal');
  content = content.replace(/text-brand-charcoal(?! dark:text-brand-ivory)(?!\/)/g, 'text-brand-charcoal dark:text-brand-ivory');
  
  // Replace bg-white with a darker version in dark mode, unless it's a specific button
  content = content.replace(/bg-white(?! \/| dark:bg-)/g, 'bg-white dark:bg-[#1A1A1A]');
  
  // Specific border color replacements
  content = content.replace(/border-brand-charcoal\/10(?! dark:)/g, 'border-brand-charcoal/10 dark:border-white/10');
  content = content.replace(/border-brand-charcoal\/5(?! dark:)/g, 'border-brand-charcoal/5 dark:border-white/5');
  content = content.replace(/border-brand-charcoal\/20(?! dark:)/g, 'border-brand-charcoal/20 dark:border-white/20');
  
  // Replace text-brand-charcoal/60 or /70
  content = content.replace(/text-brand-charcoal\/60(?! dark:)/g, 'text-brand-charcoal/60 dark:text-brand-ivory/60');
  content = content.replace(/text-brand-charcoal\/70(?! dark:)/g, 'text-brand-charcoal/70 dark:text-brand-ivory/70');
  
  // Also add transition to bg and text colors for smoothness where they exist
  // We can just add transition-colors duration-500 everywhere there's a background or text color change if not already there, 
  // but it's easier to just rely on the ones we add. 
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverse('./src');
console.log('Done adding dark mode classes.');
