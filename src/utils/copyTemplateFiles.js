import path from 'path';
import fsExtra from 'fs-extra';
const { copy, readdir } = fsExtra;
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function copyTemplateFiles(targetDir) {
  const templateDir = path.join(__dirname, '../../templates');
  console.log('Template dir:', templateDir);
  console.log('Target dir:', targetDir);

  const files = await readdir(templateDir);
  console.log('Files in templateDir:', files);

  await copy(templateDir, targetDir, {
    overwrite: true,
    recursive: true,
  });
}
