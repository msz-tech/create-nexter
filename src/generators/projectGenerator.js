import path from 'path';
import { fileURLToPath } from 'url';
import spawn from 'cross-spawn';

// Pour __dirname avec ESModules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function generateProject(language, projectName) {
  return new Promise((resolve, reject) => {
    const args = [
      'create-next-app@15.4.1',
      projectName,
      language === 'ts' ? '--typescript' : '--javascript',
      '--no-tailwind',        // Ne pas installer tailwind par défaut
      '--eslint',
      '--src-dir',
      '--no-app',
      '--import-alias', '@/*',
      '--no-interactive',
      '--yes',
    ];

    const cmd = 'npx';
    const child = spawn(cmd, args, { stdio: 'inherit' });

    child.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`❌ create-next-app exited with code ${code}`));
      }

      console.log('📦 Installing TailwindCSS and PostCSS plugins...');

      // Installer tailwindcss + plugins PostCSS obligatoires
          const extraDeps = [
          'tailwindcss@3.3.2',
          'postcss@8.4.21',
          'autoprefixer@10.4.14',
          'lucide-react'
        ];

      const install = spawn('npm', ['install', '-D', ...extraDeps], {
        cwd: path.resolve(projectName),
        stdio: 'inherit',
      });

      install.on('close', (installCode) => {
        if (installCode === 0) {
          console.log('✅ TailwindCSS and PostCSS plugins installed.');
          resolve();
        } else {
          reject(new Error('❌ Failed to install TailwindCSS/PostCSS plugins.'));
        }
      });
    });
  });
}
