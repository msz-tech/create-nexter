import path from 'path';
import fsExtra from 'fs-extra';
const { copy, readdir, pathExists } = fsExtra;
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Copy template files based on the selected language (ts or js)
 * @param {string} targetDir - The directory where the template files will be copied
 * @param {string} language - 'ts' or 'js' to select the appropriate template folder
 */
export async function copyTemplateFiles(targetDir, language) {
  if (!['ts', 'js'].includes(language)) {
    throw new Error(`Invalid language '${language}'. Expected 'ts' or 'js'.`);
  }

  const templateDir = path.join(__dirname, '../../templates', language);

  const exists = await pathExists(templateDir);
  if (!exists) {
    throw new Error(`Template directory does not exist: ${templateDir}`);
  }

  console.log(`[copyTemplateFiles] Copying template for language: ${language}`);
  console.log(`[copyTemplateFiles] From: ${templateDir}`);
  console.log(`[copyTemplateFiles] To: ${targetDir}`);

  const files = await readdir(templateDir);
  console.log(`[copyTemplateFiles] Files to copy: ${files.join(', ')}`);

  await copy(templateDir, targetDir, {
    overwrite: true,
    recursive: true,
  });

  console.log(`[copyTemplateFiles] Copy completed successfully.`);
}
