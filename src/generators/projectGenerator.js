import path from 'path';
import spawn from 'cross-spawn';
import { copyTemplateFiles } from '../utils/copyTemplateFiles.js';


export default function generateProject(language, projectName) {
  return new Promise((resolve, reject) => {

    const args = [
      'create-next-app@15.4.1',
      projectName,
      language === 'ts' ? '--typescript' : '--javascript',
      '--no-tailwind',      
      '--eslint',
      '--src-dir',
      '--no-app',
      '--import-alias', '@/*',
      '--no-interactive',
      '--yes',
    ];

    console.log(`🚀 Creating Next.js project (${language}) named '${projectName}'...`);

    const cmd = 'npx';
    const child = spawn(cmd, args, { stdio: 'inherit' });

    child.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`❌ create-next-app exited with code ${code}`));
      }

      console.log('📦 Installing TailwindCSS and PostCSS plugins...');

      const extraDeps = [
        'tailwindcss@3.3.2',
        'postcss@8.4.21',
        'autoprefixer@10.4.14',
        'lucide-react',
      ];

      const install = spawn('npm', ['install', '-D', ...extraDeps], {
        cwd: path.resolve(projectName),
        stdio: 'inherit',
      });

      install.on('close', async (installCode) => {
        if (installCode !== 0) {
          return reject(new Error('❌ Failed to install TailwindCSS/PostCSS plugins.'));
        }

        try {
          console.log(`📁 Copying template files for language: ${language}...`);
          await copyTemplateFiles(path.resolve(projectName), language);
          console.log('✅ Project generation complete!');
          resolve();
        } catch (error) {
          reject(new Error(`❌ Error copying template files: ${error.message}`));
        }
      });
    });
  });
}
