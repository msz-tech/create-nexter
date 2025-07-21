import prompts from 'prompts';
import languagePrompt from './prompts/languagePrompt.js';
import generateProject from './generators/projectGenerator.js';
import { cleanProject } from '../src/scripts/cleanProject.js';  
import { copyTemplateFiles } from './utils/copyTemplateFiles.js';

export default async function main() {
  const { language } = await languagePrompt();

  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Enter your project folder name',
    initial: 'my-nexter-app',
    validate: name => (name.trim() === '' ? 'Project name cannot be empty' : true)
  });

  console.log(`Generating Next.js project '${projectName}' with language: ${language}`);

  try {
    await generateProject(language, projectName);

    await cleanProject(projectName, language);
    
    await copyTemplateFiles(projectName);

    

    console.log('✅ Cleanup and structure completed.');
    console.log('🎉 Project created successfully!');
  } catch (err) {
    console.error('❌ Error during project generation:', err);
  }
}

